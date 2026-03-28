import { useState } from "react";
import { Link } from "react-router-dom";

export default function Movies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTY3ZWRmZGQxODYxODU0YWJlNDdiZGY2NzljNDEwZiIsIm5iZiI6MTc0OTM5NDYyNS44MjIsInN1YiI6IjY4NDVhNGMxMjFjY2VjM2FhNTM0MjM4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dXPQG1HIwiWpm95QkmsmxfTXYc9D8dDU8gqyPgxjEig'
    }
  };

  const handleSearch = e => {
    e.preventDefault();
    if (!query) return;

    fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&language=en-US`, options)
      .then(res => res.json())
      .then(res => setMovies(res.results))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}