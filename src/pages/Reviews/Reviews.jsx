import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTY3ZWRmZGQxODYxODU0YWJlNDdiZGY2NzljNDEwZiIsIm5iZiI6MTc0OTM5NDYyNS44MjIsInN1YiI6IjY4NDVhNGMxMjFjY2VjM2FhNTM0MjM4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dXPQG1HIwiWpm95QkmsmxfTXYc9D8dDU8gqyPgxjEig'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US`, options)
      .then(res => res.json())
      .then(res => setReviews(res.results)) 
      .catch(err => console.error(err));
  }, [movieId]);

  if (reviews.length === 0) return <p>No reviews available.</p>;

  return (
    <ul className="reviews-list">
      {reviews.map(review => (
        <li key={review.id}>
          <p><strong>Author:</strong> {review.author}</p>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}