import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTY3ZWRmZGQxODYxODU0YWJlNDdiZGY2NzljNDEwZiIsIm5iZiI6MTc0OTM5NDYyNS44MjIsInN1YiI6IjY4NDVhNGMxMjFjY2VjM2FhNTM0MjM4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dXPQG1HIwiWpm95QkmsmxfTXYc9D8dDU8gqyPgxjEig'
  },
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
      .then(res => res.json())
      .then(res => setMovie(res))
      .catch(err => console.error(err));
  }, [movieId]);
if (!movie) return <p>Loading...</p>;
  return (
    <div>
        <Link className="link" to="/">Go back</Link>
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
      <h2>{movie.title}</h2>
      <p>overview</p>
      <p>{movie.overview}</p>
      <p>genres</p>
     <ul>
{movie.genres?.map(genre => (
  <li key={genre.id}>{genre.name}</li>
))}
</ul>

      <ul>
        <li><Link to="cast">Cast</Link></li>
        <li><Link to="reviews">Reviews</Link></li>
      </ul>
      <Outlet />
    </div>
  );
}