'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { Button } from '@/app/ui/button'

export default function Search({ placeholder }: { placeholder: string }) {
  const [showButton, setShowButton] = useState(true)
  return (
    <div className="relative flex flex-shrink-0">
      {showButton ? (
        <>
          <Button
            onClick={() => setShowButton(false)}
            className="w-full hover:text-black"
          >
            <MagnifyingGlassIcon className="h-[18px] w-[18px] mr-3" />
            Search
          </Button>
        </>
      ) : (
        <>
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            placeholder={placeholder}
            maxLength={18}
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </>
      )}
    </div>
  )
}
