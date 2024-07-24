import '@/app/ui/global.css'
import Image from 'next/image'
import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex w-full">
        <section className="flex justify-center items-center w-1/2 bg-logo-bg-light">
          <div>
            <Link href={'/'}>
              <Image
                src={'/snoopy-logo.png'}
                width={700}
                height={700}
                alt="Snoopy logo image"
                className="transition ease-in-out hover:scale-110 border-app-red-secondary rounded-xl hover:border-4"
                priority
              />
            </Link>
          </div>
        </section>
        <section className="w-1/2">{children}</section>
      </body>
    </html>
  )
}
