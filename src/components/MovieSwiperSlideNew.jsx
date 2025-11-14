import React, { useEffect } from "react";
import { fetchdataBase } from "../redux/slice/base.serverSlice";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieSwiperSlideNew = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.server);

  useEffect(() => {
    dispatch(fetchdataBase());
  }, [dispatch]);

  if (loading)
    return <p className="text-center text-white mt-10">Loading movies...</p>;
  if (error)
    return <p className="text-center text-red-500 mt-10">Error: {error}</p>;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false, // Kichik ekranda ham arrow bo‘lishi foydali
    draggable: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, centerMode: true, centerPadding: "20px" }
      }
    ]
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 py-10">
      <h2 className="font-bold text-2xl md:text-3xl mb-6 text-white">
        Смотреть сейчас
      </h2>
      <Slider {...settings}>
        {data?.map((e) => (
          <div key={e.id} className="p-2">
            <div className="relative w-full bg-black h-[180px] md:h-[220px] lg:h-[230px] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3RMhMmJfYHtcvbeGej1blW_aaaUTPEwtgWQ&s"
                alt={e.title}
                className="w-full h-full object-cover"
              />
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
              <div className="absolute bottom-0 left-0 p-3 md:p-4 w-full text-white">
                <h3 className="text-lg md:text-xl font-bold mb-1">{e.title}</h3>
                <span className="bg-red-600 px-2 py-1 text-sm rounded font-medium">
                  {e.episodes ? `Все серии` : `Фильм`}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieSwiperSlideNew;
