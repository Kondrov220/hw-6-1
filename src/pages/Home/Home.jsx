import Header from "../Header/Header";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Home() {

  const[data, setData] = useState([]);
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTY3ZWRmZGQxODYxODU0YWJlNDdiZGY2NzljNDEwZiIsIm5iZiI6MTc0OTM5NDYyNS44MjIsInN1YiI6IjY4NDVhNGMxMjFjY2VjM2FhNTM0MjM4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dXPQG1HIwiWpm95QkmsmxfTXYc9D8dDU8gqyPgxjEig'
  }
};
useEffect(() => {
fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
  .then(res => res.json())
  .then(res => setData(res.results))
  .catch(err => console.error(err));
}, [])
  return (
    <>
    <Header></Header>
   
      <ul className="movies-list">
        {data.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
            {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;