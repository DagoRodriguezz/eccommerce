
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[700px] overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=2000" 
          alt="Sneaker Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl space-y-6">
          <div className="inline-block bg-blue-600 text-white text-xs font-bold px-4 py-1.5 uppercase tracking-[0.2em] rounded-sm shadow-lg shadow-blue-600/20">
            Nueva Colección 2024
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bebas leading-[0.9] tracking-tight text-white">
            ESTILO QUE <br /> 
            <span className="text-blue-500">MARCA TENDENCIA</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed font-light drop-shadow-md">
            Encuentra los tenis más exclusivos en Colombia. Compra hoy y paga después con nuestras opciones de crédito instantáneo sin cuota inicial.
          </p>
          
          <div className="pt-6 flex flex-wrap gap-5">
            <button className="bg-blue-600 border-2 border-blue-600 text-white px-10 py-4 font-bold uppercase tracking-wider hover:bg-blue-700 hover:border-blue-700 transition-all duration-300 text-lg shadow-2xl shadow-blue-600/40">
              Ver Catálogo
            </button>
            <button className="border-2 border-white/40 text-white px-10 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-slate-950 transition-all duration-300 text-lg backdrop-blur-sm">
              Nuestras Marcas
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Visual Element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-blue-500 to-transparent opacity-50"></div>
    </section>
  );
};

export default Hero;
