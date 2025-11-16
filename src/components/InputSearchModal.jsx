import React, { useEffect, useState } from "react";
import { X, Search } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { fetchdataBase } from "../redux/slice/base.serverSlice";
import absolutesinema from "../assets/absolutecinema.jpg";
import { useNavigate } from "react-router-dom"
const InputSearchModal = ({ open, onClose }) => {
  const [searchModal, setsearchModal] = useState("");
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.server);
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchdataBase());
  }, [dispatch]);

  if (!open) return null;

  const searchMovies = data.filter((movie) =>
    movie.title.toLowerCase().includes(searchModal.toLowerCase().trim())
  );

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-start justify-center pt-32 z-50 px-4">
      <div className="bg-[#1c1c1e] border border-white/10 w-full max-w-lg rounded-2xl p-5 shadow-xl">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-xl font-semibold">Поиск</h2>
          <button onClick={onClose}>
            <X className="text-gray-300 hover:text-white w-6 h-6" />
          </button>
        </div>

        <div className="flex items-center gap-3 bg-white/10 border border-white/20 px-4 py-3 rounded-xl mb-4">
          <Search className="text-gray-300" />
          <input
            type="text"
            onChange={(e) => setsearchModal(e.target.value)}
            autoFocus
            placeholder="Введите название..."
            className="w-full bg-transparent outline-none text-white placeholder-gray-400"
          />
        </div>

        <ul className="space-y-3 max-h-80 overflow-y-auto pr-2">
          {searchMovies.slice(0, 10).map((e) => (
            <li
              key={e.id}
              onClick={() => { navigate(`/movie/${e.id}`); onClose(); }}
              className="flex items-center gap-4 p-2 rounded-lg hover:bg-white/10 cursor-pointer transition"
            >
              <img
                className="w-14 h-20 object-cover rounded-md"
                src={absolutesinema}
                alt={e.title}
              />
              <span className="text-white text-lg">{e.title}</span>
            </li>
          ))}
        </ul>

        {searchMovies.length === 0 && (
          <p className="text-gray-400 text-center mt-4">Ничего не найдено...</p>
        )}

      </div>
    </div>
  );
};

export default InputSearchModal;
