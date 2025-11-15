import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import absolutecinema from "../assets/absolutecinema.jpg";

const MovieDetail = () => {
  const { id } = useParams();
  const { data } = useSelector((state) => state.server);

  const movie = data.find((m) => m.id.toString() === id);

  if (!movie)
    return (
      <p className="text-white text-center mt-10">Movie not found</p>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* Movie Image */}
        <img
          src={absolutecinema}
          alt={movie.title}
          className="w-full max-w-[650px] h-auto rounded-xl shadow-lg"
        />

        {/* Movie Info */}
        <div className="text-white flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {movie.title}
          </h1>
          <p className="mb-2 font-semibold">Rating: {movie.rating}</p>
          <p className="mb-2">{movie.episodes ? "Все серии" : "Фильм"}</p>
          <p className="text-gray-300 mt-4">{movie.description}</p>

          {/* Optional buttons */}
          <div className="mt-6 flex gap-4 flex-wrap">
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
              Savatchaga
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
              Shikoyat qilish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
