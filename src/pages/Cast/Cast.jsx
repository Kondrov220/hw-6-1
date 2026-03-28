import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTY3ZWRmZGQxODYxODU0YWJlNDdiZGY2NzljNDEwZiIsIm5iZiI6MTc0OTM5NDYyNS44MjIsInN1YiI6IjY4NDVhNGMxMjFjY2VjM2FhNTM0MjM4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dXPQG1HIwiWpm95QkmsmxfTXYc9D8dDU8gqyPgxjEig'
  }
};
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, options)
  .then(res => res.json())
  .then(res => setCast(res.cast))
  .catch(err => console.error(err));
  }, [movieId]);

  return (
    <ul className="cast-list">
      {cast.map(actor => (
        <li key={actor.id}>
        <p>{actor.name}</p>
        <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt="" />
        </li>
      ))}
    </ul>
  );
}