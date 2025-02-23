import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'
import { authConfig } from '@/auth.config'
import type { User } from '@/app/lib/definitions'
import { sql } from '@vercel/postgres'
import bcrypt from 'bcrypt'

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const partialCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials)
        if (partialCredentials.success) {
          const { email, password } = partialCredentials.data
          const user = await getUser(email)
          if (!user) return null
          const passwordsMatch = await bcrypt.compare(password, user.password)
          if (passwordsMatch) return user
        }
        console.log('Invalid credentials')
        return null
      },
    }),
  ],
})

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`
    return user.rows[0]
  } catch (error) {
    console.error('Failed to fetch user', error)
    throw new Error('Failed to fetch user.')
  }
}
