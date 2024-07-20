import '@/app/ui/global.css'
import Image from 'next/image'

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
            <Image
              src={'/snoopy-logo.png'}
              width={700}
              height={700}
              alt="Snoopy logo image"
            />
          </div>
        </section>
        <section className="w-1/2">{children}</section>
      </body>
    </html>
  )
}
