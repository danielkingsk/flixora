import React from "react";
import { useState, useEffect } from "react";
import { useDebounce } from "react-use";
import Search from "./components/Search";
import MovieCard from "./components/MovieCard";
import { getTrendingMovies, updateSearchCount } from "./appwrite";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: { accept: "application/json", Authorization: `Bearer ${API_KEY}` },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceSearchTerm, setDebounceSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useDebounce(() => setDebounceSearchTerm(searchTerm), 1000, [searchTerm]);

  const fetchMovie = async (query = "") => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      const { data: Response, results } = await response.json();

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      if (Response === "False") {
        setErrorMessage(Error || "Failed to fetch movies");
        setMovieList([]);
        return;
      }
      setMovieList(results || []);

      if (query && results.length > 0) {
        await updateSearchCount(query, results[0]);
      }
    } catch (error) {
      console.log(`Error Fetching Movies: ${error}`);
      setErrorMessage("Error fetching movies. Please try again later");
    } finally {
      setIsLoading(false);
    }
  };

  const loadTrendingMovies = async () => {
    try {
      const movies = await getTrendingMovies();
      setTrendingMovie(movies);
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
    }
  };

  useEffect(() => {
    fetchMovie(debounceSearchTerm);
  }, [debounceSearchTerm]);

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <h1>
            Find The <span className="text-gradient">Movies</span> You Enjoy
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        {trendingMovie.length > 0 && (
          <section className="trending">
            <h2>Trending Movies</h2>
            <ul>
              {trendingMovie.map((movie, index) => (
                <li key={movie.$id}>
                  <p>{index + 1}</p>
                  <img src={movie.posterUrl} alt={movie.title} />
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="all-movies">
          <h2>All Movies</h2>
          {isLoading ? (
            <p className="text-white">Loading...</p>
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
