
import React from 'react';

const CategoryGrid: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-2">Colecciones</span>
          <h2 className="text-4xl md:text-6xl font-bebas tracking-wider text-gray-900 uppercase">Explora por Categoría</h2>
          <div className="w-20 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Unisex Section (Left large tile) */}
          <div className="relative group overflow-hidden bg-slate-100 rounded-3xl aspect-[4/5] md:aspect-auto md:h-[700px] shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out" 
              alt="Unisex Sneakers"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-14">
              <span className="text-blue-400 font-bold tracking-widest text-sm mb-2 uppercase">Para Todos</span>
              <h2 className="text-white text-5xl md:text-7xl font-bebas uppercase tracking-widest leading-none mb-6">Unisex</h2>
              <p className="text-gray-300 text-sm md:text-lg mb-8 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
                Diseños versátiles que rompen las reglas. Comodidad y estilo sin etiquetas.
              </p>
              <button className="bg-white text-slate-950 px-10 py-4 font-bold uppercase text-sm tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-300 w-max rounded-lg shadow-2xl">
                Ver Catálogo
              </button>
            </div>
          </div>

          {/* Women and Men sections (Right side stacked) */}
          <div className="flex flex-col gap-6 lg:gap-8 md:h-[700px]">
            {/* Women Section */}
            <div className="relative group overflow-hidden bg-slate-100 rounded-3xl flex-1 min-h-[350px] md:min-h-0 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out" 
                alt="Women Sneakers"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent flex flex-col justify-center p-8 md:p-14">
                <h2 className="text-white text-4xl md:text-5xl font-bebas uppercase tracking-widest mb-4">Mujeres</h2>
                <button className="bg-blue-600 text-white w-max font-bold uppercase text-xs tracking-[0.2em] px-6 py-3 rounded-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  Explorar
                </button>
              </div>
            </div>

            {/* Men Section */}
            <div className="relative group overflow-hidden bg-slate-100 rounded-3xl flex-1 min-h-[350px] md:min-h-0 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1512374382149-4332c6c021f1?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out" 
                alt="Men Sneakers"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent flex flex-col justify-center p-8 md:p-14">
                <h2 className="text-white text-4xl md:text-5xl font-bebas uppercase tracking-widest mb-4">Hombres</h2>
                <button className="bg-blue-600 text-white w-max font-bold uppercase text-xs tracking-[0.2em] px-6 py-3 rounded-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  Explorar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
