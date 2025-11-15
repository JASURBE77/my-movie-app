import React, { useEffect } from "react";
import { fetchdataBase } from "../redux/slice/base.serverSlice";
import { useDispatch, useSelector } from "react-redux";

const MovieSwiperSlideNew = () => {
  const dispatch = useDispatch();
const { data, loading, error } = useSelector((state) => state.server);


  useEffect(() => {
    dispatch(fetchdataBase());
  }, [dispatch]);

  if (loading)
    return (
      <p className="text-center text-white mt-10">Loading movies...</p>
    );
  if (error)
    return (
      <p className="text-center text-red-500 mt-10">Error: {error}</p>
    );

  return (
    <div className="overflow-x-auto scrollbar-hide py-5 px-2">
      <div className="flex gap-4">
        {data?.map((e) => (
          <div
            key={e.id}
            className="relative w-[400px] h-[250px] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer flex-shrink-0"
          >
            {/* Background image */}
            <img
              src={e.thumbnail}
              alt={e.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

            {/* Top left badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {e.rating && (
                <div className="flex items-center gap-1 bg-yellow-400 text-black px-2 py-1 rounded font-semibold text-sm">
                  <span>🏆 {e.rating}</span>
                </div>
              )}
              {e.top && (
                <div className="flex items-center gap-1 bg-purple-600 text-white px-2 py-1 rounded font-semibold text-sm">
                  <span>⚡ Top-10</span>
                </div>
              )}
            </div>

            {/* Bottom info */}
            <div className="absolute bottom-0 left-0 p-4 w-full text-white">
              <h3 className="text-xl font-bold mb-1">{e.title}</h3>
              <span className="bg-red-600 px-2 py-1 text-sm rounded font-medium">
                {e.episodes ? `Все серии` : `Фильм`}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSwiperSlideNew;  