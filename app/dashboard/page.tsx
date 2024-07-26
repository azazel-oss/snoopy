import AccountSearch from '../ui/account-search'

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query: string
  }
}) {
  const query = searchParams?.query || ''
  return (
    <main className="flex flex-col w-full items-center justify-center flex-grow">
      {query ? (
        <div className="flex-grow inline w-full rounded-lg bg-logo-bg-light p-3">
          <AccountSearch query={query} />
        </div>
      ) : (
        <div>Welcome to snoopy chats</div>
      )}
    </main>
  )
}
