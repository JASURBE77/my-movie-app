import React from "react";

const Login = () => {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://yastatic.net/s3/passport-auth-customs/customs/_/28d2b488.jpg" 
          className="w-full h-full object-cover opacity-40"
          alt="bg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md bg-[#1e1e22]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">

          <div className="flex justify-center mb-2">
            <h1 className="text-xl font-bold">Яндекс ID</h1>
          </div>
          <p className="text-center text-gray-300 text-sm mb-4">
            Войдите с Яндекс ID
          </p>

          {/* INPUT */}
          <div className="bg-white/10 border border-white/10 rounded-xl flex items-center px-4 py-3">
            {/* Flag */}
            <div className="w-9 h-6 rounded bg-white overflow-hidden mr-3">
              <img
                src="https://flagcdn.com/w320/uz.png"
                alt="uz"
                className="w-full h-full object-cover"
              />
            </div>

            <input
              type="text"
              placeholder="+998 (00) 000-00-00"
              className="flex-1 bg-transparent text-white outline-none placeholder-gray-400"
            />

            <button className="text-gray-400 hover:text-white">✕</button>
          </div>

          <button className="mt-5 w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-gray-200 transition">
            Далее
          </button>

          <button className="mt-3 w-full py-3 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/20 transition">
            Другой способ входа
          </button>

          <p className="text-gray-400 text-xs text-center mt-6">
            Яндекс ID — ключ для всех сервисов
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
