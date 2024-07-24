import Link from 'next/link'
import { Button } from '../ui/button'
import { inter } from '../ui/fonts'

export default function Home() {
  return (
    <main className="flex items-center justify-center md:h-screen gap-40">
      <div
        className={`${inter.className} flex flex-col gap-32 font-black text-9xl text-center`}
      >
        <section>
          Let&apos;s get{' '}
          <span className="text-app-red-secondary">snoopin&apos;</span>
        </section>
        <section className="flex gap-20 text-xl justify-center">
          <Link href={'/dashboard'}>
            <Button className="inline px-7 p-7 bg-black hover:bg-logo-bg-light">
              Dashboard
            </Button>
          </Link>
          <Link href={'/login'}>
            <Button className="inline px-7 p-7 bg-black hover:bg-logo-bg-light">
              Login
            </Button>
          </Link>
          <Link href={'/register'}>
            <Button className="inline px-7 p-7 bg-app-red-secondary hover:bg-logo-bg-light">
              Register
            </Button>
          </Link>
        </section>
      </div>
    </main>
  )
}
