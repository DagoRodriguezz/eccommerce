
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Logo & About */}
          <div className="space-y-6">
            <div className="flex flex-col leading-none">
              <span className="text-blue-500 font-bebas text-4xl tracking-tighter">TENIS</span>
              <span className="text-white font-bebas text-2xl tracking-[0.2em] ml-0.5 opacity-80">COLOMBIA</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Tu destino #1 en Colombia para los sneakers más exclusivos. Elevamos tu estilo con los mejores modelos y opciones de financiamiento del país.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-slate-900 flex items-center justify-center rounded-xl hover:bg-blue-600 transition-all duration-300">
                <i className="fa-brands fa-facebook-f text-lg"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-slate-900 flex items-center justify-center rounded-xl hover:bg-blue-600 transition-all duration-300">
                <i className="fa-brands fa-instagram text-lg"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-slate-900 flex items-center justify-center rounded-xl hover:bg-blue-600 transition-all duration-300">
                <i className="fa-brands fa-tiktok text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-blue-500">Tienda</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all inline-block">Novedades</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all inline-block">Hombres</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all inline-block">Mujeres</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all inline-block">Marcas Premium</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all inline-block">Outlet</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-blue-500">Soporte</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all inline-block">Mi Cuenta</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all inline-block">Estado del Pedido</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all inline-block">Envíos y Entregas</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all inline-block">Garantías</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-2 transition-all inline-block">Contacto</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-blue-500">Sede Central</h4>
            <ul className="space-y-5 text-slate-400 text-sm">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-location-dot text-blue-500"></i>
                </div>
                <div className="flex flex-col">
                   <span className="text-white font-bold">Medellín, Colombia</span>
                   <span className="text-xs">Centro de Distribución Nacional</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-phone text-blue-500"></i>
                </div>
                <div className="flex flex-col">
                   <span className="text-white font-bold">+57 300 123 4567</span>
                   <span className="text-xs">Línea de Ventas Directas</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-slate-500 font-medium tracking-wide">
            © 2024 TENIS COLOMBIA STORE. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all">
            <img src="https://static.pse.com.co/images/logos/pse_logo.png" className="h-8" alt="PSE" />
            <img src="https://logodownload.org/wp-content/uploads/2014/10/visa-logo-1.png" className="h-4" alt="Visa" />
            <img src="https://logodownload.org/wp-content/uploads/2014/10/mastercard-logo-7.png" className="h-5" alt="Mastercard" />
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a 
        href="#" 
        className="fixed bottom-8 right-8 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(34,197,94,0.4)] hover:bg-green-600 hover:scale-110 transition-all z-50 text-3xl animate-bounce-slow"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </footer>
  );
};

export default Footer;
