import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center justify-center flex-grow">
      <div className="h-1/2 flex-col w-1/2 flex items-center rounded-lg bg-logo-bg-light p-12">
        <Image
          src={'/avatar_img_3.png'}
          alt="user profile image"
          width={200}
          height={200}
          className="rounded-full"
        />
        <div className="m-6 text-3xl">Asad Mahmood</div>
        <div className="m-6 text-2xl font-thin">asad@mail.com</div>
      </div>
    </main>
  )
}
