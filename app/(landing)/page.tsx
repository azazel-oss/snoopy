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
          Let&apos;s get <span className="text-red-600">snoopin&apos;</span>
        </section>
        <section className="flex gap-40 text-xl justify-center">
          <Link href={'/dashboard'}>
            <Button className="inline px-7 p-7">Dashboard</Button>
          </Link>
          <Link href={'/login'}>
            <Button className="inline px-7 p-7">Login</Button>
          </Link>
        </section>
      </div>
    </main>
  )
}
