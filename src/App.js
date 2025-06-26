import React from 'react';
import BitcoinTicker from './components/BitcoinTicker';

function App() {
  return (
    // Основной контейнер, который будет содержать видеофон
    <main className="relative w-full h-full bg-slate-900 text-white flex flex-col justify-center items-center overflow-hidden">
      {/* Новый верхний блок */}
      <div className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-sm p-4 text-center z-30">
        <a href="https://mybitcoinmining.com" className="text-xl font-bold text-white no-underline hover:text-gray-300 transition-colors">
          mybitcoinmining.com
        </a>
      </div>

      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-sm">
        <source src="/background-video.mp4" type="video/mp4" />
      </video>

      {/* Оверлей, чтобы затемнить видео и улучшить читаемость */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      {/* Контент, который будет поверх видео */}
      <div className="relative z-20 flex flex-col items-center w-full px-4">
        
        {/* Шапка */}
        <header className="absolute top-0 w-full py-6">
                    <h2 className="text-center text-2xl font-light tracking-wider">
            <a href="https://mybitcoinmining.com" target="_blank" rel="noopener noreferrer">mybitcoinmining.com</a>
          </h2>
        </header>

        {/* Центральная плашка с эффектом стекла */}
        <div className="w-full max-w-2xl p-8 text-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight uppercase">
            Launching Soon
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Our new platform is under construction. Stay tuned for the launch!
          </p>
        </div>

        <BitcoinTicker />

      </div>
    </main>
  );
}

export default App;
