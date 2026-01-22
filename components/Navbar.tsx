
import React from 'react';
import { NAVIGATION } from '../constants';

interface NavbarProps {
  onNavigate: (page: 'home' | 'tenis', brand?: string | null) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-blue-600 text-white text-center py-2 text-xs md:text-sm font-bold tracking-wider uppercase">
        🔥 POR COMPRAS DE 499K RECIBE EL 10% OFF 🔥
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="flex flex-col leading-none border-2 border-blue-600 p-1 rounded-sm">
              <span className="text-blue-600 font-bebas text-2xl tracking-tighter">TENIS</span>
              <span className="text-gray-900 font-bebas text-lg tracking-[0.1em] ml-0.5">COLOMBIA</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {NAVIGATION.map((item) => (
              <div key={item.label} className="relative group px-3 py-2">
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.label === 'Inicio') onNavigate('home');
                    if (item.label === 'Tenis') onNavigate('tenis');
                    if (item.label === 'Promociones') onNavigate('tenis'); // Placeholder redirect
                  }}
                  className="text-sm font-bold hover:text-blue-600 transition-colors text-gray-800 flex items-center gap-1 uppercase tracking-tight"
                >
                  {item.label}
                  {item.hasDropdown && <i className="fa-solid fa-chevron-down text-[10px] group-hover:rotate-180 transition-transform"></i>}
                </a>

                {/* Dropdown Menu */}
                {item.hasDropdown && item.subItems && (
                  <div className="absolute top-full left-0 mt-0 w-48 bg-white shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 rounded-b-lg">
                    {item.subItems.map((sub) => (
                      <a
                        key={sub}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (item.label === 'Marcas') {
                            onNavigate('tenis', sub);
                          } else {
                            onNavigate('tenis');
                          }
                        }}
                        className="block px-6 py-2.5 text-xs font-bold text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors uppercase tracking-widest"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search & Icons */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center border rounded-md px-4 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all border-gray-200">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="bg-transparent text-sm focus:outline-none w-40 xl:w-56"
              />
              <button className="text-gray-400 hover:text-blue-600">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            
            <div className="flex items-center gap-1">
               <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
                 <i className="fa-regular fa-user text-xl"></i>
               </button>
               <button className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors">
                 <i className="fa-solid fa-cart-shopping text-xl"></i>
                 <span className="absolute top-1 right-1 bg-blue-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">0</span>
               </button>
            </div>

            <button className="xl:hidden p-2 text-gray-700">
                <i className="fa-solid fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
