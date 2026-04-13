import { useState } from 'react';

const Playground = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <header className="max-w-4xl mx-auto mb-8">
        <h1 className="text-2xl font-bold text-amber-400">Bram Dev Playground</h1>
        <p className="text-gray-400 text-sm mt-1">Sandbox untuk ngetes kode — ganti isi sesuka hati</p>
        <a href="#/" className="text-xs text-gray-500 hover:text-amber-400 mt-2 inline-block">← Kembali ke Page 1</a>
      </header>
      <main className="max-w-4xl mx-auto bg-gray-900 rounded-xl p-6 border border-gray-800">
        <h2 className="text-lg font-semibold mb-4">Contoh: State dan Event</h2>
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => setCount(c => c - 1)} className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition">-</button>
          <span className="text-3xl font-bold text-amber-400 w-16 text-center">{count}</span>
          <button onClick={() => setCount(c => c + 1)} className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-lg transition">+</button>
          <button onClick={() => setCount(0)} className="px-3 py-2 text-sm text-gray-400 hover:text-white border border-gray-700 rounded-lg transition">Reset</button>
        </div>
        <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center">
          <p className="text-gray-500">Area kosong - taruh komponen baru di sini</p>
          <p className="text-gray-600 text-xs mt-2">Bram Wealth Tracker atau apapun yang mau di-test</p>
        </div>
      </main>
      <footer className="max-w-4xl mx-auto mt-8 text-center text-xs text-gray-600">
        brambiz playground v0.1
      </footer>
    </div>
  );
};

export default Playground;
