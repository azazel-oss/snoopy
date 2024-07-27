'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { Button } from '@/app/ui/button'
import { useDebouncedCallback } from 'use-debounce'
import { useRouter, useSearchParams } from 'next/navigation'

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams()
  const [showButton, setShowButton] = useState(!searchParams.has('query'))
  const { replace } = useRouter()
  const handleSearch = useDebouncedCallback(term => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }
    replace(`/dashboard?${params.toString()}`)
  }, 300)
  return (
    <div className="relative flex flex-shrink-0">
      {showButton ? (
        <>
          <Button
            onClick={() => setShowButton(false)}
            className="w-full bg-black hover:text-white hover:bg-app-red-secondary"
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
            onChange={e => handleSearch(e.target.value)}
            defaultValue={searchParams.get('query')?.toString()}
            autoFocus
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-app-red-secondary" />
          <XCircleIcon
            onClick={() => {
              replace(`/dashboard`)
              setShowButton(true)
            }}
            className="absolute right-3 top-1/2 h-[18px] hover:cursor-pointer w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-app-red-secondary"
          />
        </>
      )}
    </div>
  )
}
