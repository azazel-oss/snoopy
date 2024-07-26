import { fetchQueryResults } from '../lib/actions'
import { User } from '../lib/definitions'
import SearchResult from './searched-account'

export default async function AccountSearch({ query }: { query: string }) {
  const { data } = await fetchQueryResults(query)
  return (
    <>
      <div className="text-3xl font-bold mb-4">Search Results</div>
      {data && data.length > 0 ? (
        data.map(account => (
          <SearchResult user={account as User} key={account.id} />
        ))
      ) : (
        <div>None of the accounts matched the search query</div>
      )}
    </>
  )
}
