'use server'

import { AuthError } from 'next-auth'
import { signIn } from '@/auth'
import { z } from 'zod'
import { sql } from '@vercel/postgres'
import { redirect } from 'next/navigation'
import bcrypt from 'bcrypt'

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData)
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}

const RegisterFormSchema = z.object({
  id: z.string(),
  email: z.string({
    invalid_type_error: 'Please enter an email.',
  }),
  name: z.string({
    invalid_type_error: 'Please enter a name',
  }),
  password: z.string({
    invalid_type_error: 'Please enter a password.',
  }),
})

const CreateUser = RegisterFormSchema.omit({ id: true })

export type State = {
  errors?: {
    email?: string[]
    password?: string[]
    name?: string[]
  }
  message?: string | null
}

export async function createUser(prevState: State, formData: FormData) {
  const validatedFields = CreateUser.safeParse({
    email: formData.get('email'),
    name: formData.get('name'),
    password: formData.get('password'),
  })

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create user.',
    }
  }

  // Prepare data for insertion into the database
  const { email, name, password } = validatedFields.data

  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    await sql`
      INSERT INTO users (email, name, password)
      VALUES (${email}, ${name}, ${hashedPassword})
  `
  } catch (err) {
    return {
      message: 'Database Error: Failed to create user',
    }
  }

  await authenticate(undefined, formData)

  redirect('/dashboard/')
}
