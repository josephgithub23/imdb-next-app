import Results from "@/components/Results";
/**
 * Server Side Rendering. SSR
 * Server component... always uses promise.
 */
export default async function SearchPage({ params }) {
  const searchTerm = params.searchTerm;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  );
  if (!res.ok) {
    return (
      <div>
        <h1 className="text-center pt-8">Error fetching data!</h1>
      </div>
    );
  }
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
      {results && results.length > 0 && <Results results={results} />}
    </div>
  );
}
