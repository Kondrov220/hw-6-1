import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Cast from "./pages/Cast/Cast";
import Reviews from "./pages/Reviews/Reviews";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/movies" element={<Movies />} />

      <Route path="/movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
    </Routes>
  );
}

export default App;
