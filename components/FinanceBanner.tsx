
import React from 'react';

const FinanceBanner: React.FC = () => {
  return (
    <section className="bg-slate-900 py-12 border-y border-slate-800 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left">
            <h2 className="text-white text-3xl font-bebas tracking-widest uppercase">Crédito Inmediato</h2>
            <div className="mt-2 text-blue-500 text-xl font-bold italic">
               Llévalos hoy, págalos después
            </div>
            <p className="text-slate-500 text-sm mt-1 uppercase tracking-tighter font-semibold">SIN CUOTA INICIAL - APRUEBA EN MINUTOS</p>
          </div>

          <div className="flex flex-wrap justify-center gap-10 items-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <div className="text-white font-bold text-3xl flex items-center gap-2 italic">
                <span className="text-blue-400">Addi</span>
            </div>
            <div className="text-white font-bold text-3xl flex items-center gap-2">
                <span className="text-red-500 font-bebas tracking-wider">SU+Pay</span>
            </div>
            <div className="text-white font-bold text-3xl flex items-center gap-2">
                <span className="text-green-500 font-bold">sistecrédito</span>
            </div>
            <div className="h-10 w-px bg-slate-700 mx-2 hidden lg:block"></div>
            <div className="flex items-center gap-4">
                <div className="flex gap-6 items-center">
                    <img src="https://logodownload.org/wp-content/uploads/2019/06/mercado-pago-logo.png" className="h-5 brightness-0 invert" alt="MercadoPago" />
                    <img src="https://wompi.com/assets/img/logo-wompi-blanco.png" className="h-5" alt="Wompi" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceBanner;
