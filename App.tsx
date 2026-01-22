
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FinanceBanner from './components/FinanceBanner';
import ProductCard from './components/ProductCard';
import CategoryGrid from './components/CategoryGrid';
import Footer from './components/Footer';
import TenisPage from './components/TenisPage';
import { MOCK_PRODUCTS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'tenis'>('home');
  const [initialBrand, setInitialBrand] = useState<string | null>(null);

  const navigateTo = (page: 'home' | 'tenis', brand: string | null = null) => {
    setCurrentPage(page);
    setInitialBrand(brand);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={navigateTo} />
      
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <FinanceBanner />

            {/* Featured Products Section */}
            <section className="py-24 bg-white">
              <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-16 text-center">
                  <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-2">Lo más buscado</span>
                  <h2 className="text-5xl font-bebas tracking-wider text-gray-900 uppercase">Productos Destacados</h2>
                  <div className="w-16 h-1 bg-blue-600 mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {MOCK_PRODUCTS.slice(0, 4).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                <div className="mt-16 text-center">
                  <button 
                    onClick={() => navigateTo('tenis')}
                    className="group bg-slate-950 text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-blue-600 transition-all duration-300 shadow-xl flex items-center gap-3 mx-auto"
                  >
                    Ver Todo el Catálogo
                    <i className="fa-solid fa-arrow-right transform group-hover:translate-x-2 transition-transform"></i>
                  </button>
                </div>
              </div>
            </section>

            <CategoryGrid />

            {/* Benefits Section */}
            <section className="py-24 bg-slate-50 border-t border-gray-100">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                  <div className="flex flex-col items-center text-center space-y-5">
                    <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl rotate-3 hover:rotate-0 transition-transform shadow-sm">
                      <i className="fa-solid fa-truck-fast"></i>
                    </div>
                    <h4 className="text-xl font-bold uppercase tracking-tight">Envíos Express</h4>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs">Enviamos tus favoritos a nivel nacional con seguimiento en tiempo real.</p>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-5">
                    <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl -rotate-3 hover:rotate-0 transition-transform shadow-sm">
                      <i className="fa-solid fa-shield-check"></i>
                    </div>
                    <h4 className="text-xl font-bold uppercase tracking-tight">Calidad Premium</h4>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs">Garantizamos la originalidad y durabilidad de cada par de nuestra tienda.</p>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-5">
                    <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl rotate-3 hover:rotate-0 transition-transform shadow-sm">
                      <i className="fa-solid fa-hand-holding-dollar"></i>
                    </div>
                    <h4 className="text-xl font-bold uppercase tracking-tight">Crédito Flexible</h4>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs">Financia tus compras fácilmente sin trámites complicados.</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <TenisPage initialBrand={initialBrand} />
        )}

        {/* Newsletter Section */}
        <section className="py-24 bg-blue-600 relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-black/10 rounded-full blur-2xl"></div>
            
           <div className="container mx-auto px-4 text-center text-white relative z-10">
              <h2 className="text-5xl font-bebas tracking-widest mb-4 uppercase">Únete al Club</h2>
              <p className="mb-10 max-w-2xl mx-auto text-blue-100 text-lg">Suscríbete para recibir lanzamientos exclusivos, drops limitados y un 10% de descuento en tu primera compra.</p>
              <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3">
                 <input 
                    type="email" 
                    placeholder="Tu correo electrónico" 
                    className="flex-grow px-6 py-4 text-gray-900 focus:outline-none rounded-lg bg-white shadow-inner" 
                 />
                 <button className="bg-slate-950 text-white px-10 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-blue-600 transition-all duration-300 rounded-lg shadow-xl">
                    Suscribirse
                 </button>
              </form>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
