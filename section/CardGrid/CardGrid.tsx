/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { fetchMovies } from "../../API/api";
import { Movie } from "../../API/api";

const CardGrid: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedMovies = await fetchMovies();
        setMovies(fetchedMovies);
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, []);

  return (
    <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 bg-slate-700">
      {movies.map((movie) => (
        <article key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={"..."}
            className="mb-3 h-[300px] w-full object-cover p-6 hover:scale-105"
          />
          <div className="flex ">
            <h2 className="font-bold px-6 text-lg">{movie.title}</h2>
            <h2 className="font-bold px-6">{movie.vote_average}</h2>
            <span>⭐</span>
          </div>
          <p className="w-4/5 p-6 line-clamp-5">{movie.overview}</p>
        </article>
      ))}
    </section>
  );
};

export default CardGrid;
