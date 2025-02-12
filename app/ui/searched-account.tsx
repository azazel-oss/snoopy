import Image from 'next/image'
import { User } from '@/app/lib/definitions'

export default function SearchResult({ user }: { user: User }) {
  return (
    <div className="flex gap-4">
      <Image
        src={'/avatar_img_14.png'}
        alt={`${user.name} avatar image`}
        width={50}
        height={50}
        className="rounded-full"
      />
      <div>
        <div className="font-bold">{user.name}</div>
        <div>{user.email}</div>
      </div>
    </div>
  )
}
