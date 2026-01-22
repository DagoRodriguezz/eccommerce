
import React, { useState, useMemo, useEffect } from 'react';
import ProductCard from './ProductCard';
import { MOCK_PRODUCTS } from '../constants';

interface TenisPageProps {
  initialBrand?: string | null;
}

const TenisPage: React.FC<TenisPageProps> = ({ initialBrand }) => {
  const brands = ['Nike', 'Adidas', 'Jordan', 'New Balance', 'Yeezy', 'Puma'];
  const sizes = ['36', '37', '38', '39', '40', '41', '42', '43', '44'];
  const colors = [
    { name: 'Blanco', class: 'bg-white border border-gray-200' },
    { name: 'Negro', class: 'bg-black' },
    { name: 'Azul', class: 'bg-blue-600' },
    { name: 'Rojo', class: 'bg-red-600' },
    { name: 'Gris', class: 'bg-gray-400' },
    { name: 'Verde', class: 'bg-green-600' },
  ];

  // Filters State
  const [selectedBrands, setSelectedBrands] = useState<string[]>(initialBrand ? [initialBrand] : []);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('popular');

  // Effect to update if initialBrand changes from outside (Navbar)
  useEffect(() => {
    if (initialBrand) {
      setSelectedBrands([initialBrand]);
    }
  }, [initialBrand]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (colorName: string) => {
    setSelectedColors(prev => 
      prev.includes(colorName) ? prev.filter(c => c !== colorName) : [...prev, colorName]
    );
  };

  const resetFilters = () => {
    setSelectedBrands([]);
    setSelectedSizes([]);
    setSelectedColors([]);
    setPriceRange(null);
  };

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    let result = [...MOCK_PRODUCTS, ...MOCK_PRODUCTS.map(p => ({...p, id: p.id + '-clone'}))]; // Duplicating for UI volume as before

    if (selectedBrands.length > 0) {
      result = result.filter(p => selectedBrands.includes(p.brand));
    }

    if (priceRange) {
      if (priceRange === '<150') result = result.filter(p => p.price < 150000);
      else if (priceRange === '150-300') result = result.filter(p => p.price >= 150000 && p.price <= 300000);
      else if (priceRange === '>300') result = result.filter(p => p.price > 300000);
    }

    // Sort
    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);

    return result;
  }, [selectedBrands, priceRange, sortBy]);

  return (
    <div className="bg-white min-h-screen">
      {/* Page Banner */}
      <section className="relative h-[300px] flex items-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Tenis Banner"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Catálogo Completo</span>
          <h1 className="text-6xl md:text-8xl font-bebas tracking-wider leading-none">
            {selectedBrands.length === 1 ? selectedBrands[0] : 'Nuestra Colección'}
          </h1>
          <p className="mt-4 text-gray-300 max-w-xl text-lg font-light">
            Explora los últimos lanzamientos y clásicos atemporales de las mejores marcas.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 shrink-0 space-y-10">
            {/* Filter by Brand */}
            <div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-6 border-b-2 border-blue-600 w-max pb-1">Marcas</h3>
              <div className="space-y-3">
                {brands.map((brand) => (
                  <label key={brand} className="flex items-center gap-3 group cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="w-5 h-5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 cursor-pointer" 
                    />
                    <span className={`text-sm transition-colors ${selectedBrands.includes(brand) ? 'text-blue-600 font-bold' : 'text-gray-600 group-hover:text-blue-600'}`}>{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter by Size */}
            <div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-6 border-b-2 border-blue-600 w-max pb-1">Tallas (CO)</h3>
              <div className="grid grid-cols-4 gap-2">
                {sizes.map((size) => (
                  <button 
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`aspect-square border flex items-center justify-center text-sm font-bold transition-all rounded-md ${
                      selectedSizes.includes(size) 
                        ? 'bg-blue-600 border-blue-600 text-white' 
                        : 'border-gray-200 text-gray-600 hover:border-blue-600 hover:text-blue-600'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter by Color */}
            <div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-6 border-b-2 border-blue-600 w-max pb-1">Color</h3>
              <div className="flex flex-wrap gap-4">
                {colors.map((color) => (
                  <button 
                    key={color.name}
                    onClick={() => toggleColor(color.name)}
                    className={`${color.class} w-8 h-8 rounded-full shadow-sm hover:scale-110 transition-transform relative`}
                    title={color.name}
                  >
                    {selectedColors.includes(color.name) && (
                      <div className="absolute inset-0 flex items-center justify-center bg-blue-500/30 rounded-full">
                        <i className="fa-solid fa-check text-xs text-white drop-shadow-md"></i>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter by Price */}
            <div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-6 border-b-2 border-blue-600 w-max pb-1">Precio</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="radio" 
                    name="price" 
                    className="text-blue-600" 
                    checked={priceRange === '<150'}
                    onChange={() => setPriceRange('<150')}
                  />
                  <span className="text-gray-600 text-sm">Menos de $150.000</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="radio" 
                    name="price" 
                    className="text-blue-600" 
                    checked={priceRange === '150-300'}
                    onChange={() => setPriceRange('150-300')}
                  />
                  <span className="text-gray-600 text-sm">$150.000 - $300.000</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="radio" 
                    name="price" 
                    className="text-blue-600" 
                    checked={priceRange === '>300'}
                    onChange={() => setPriceRange('>300')}
                  />
                  <span className="text-gray-600 text-sm">Más de $300.000</span>
                </label>
              </div>
            </div>
            
            <button 
              onClick={resetFilters}
              className="w-full bg-slate-100 text-slate-900 py-4 font-bold uppercase tracking-widest hover:bg-slate-200 transition-colors rounded-lg border border-slate-200"
            >
              Limpiar Filtros
            </button>
          </aside>

          {/* Product Listing */}
          <div className="flex-grow">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <span className="text-sm font-medium text-gray-500">
                Mostrando <span className="text-slate-900 font-bold">{filteredProducts.length}</span> modelos encontrados
              </span>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">Ordenar por:</span>
                <select 
                  className="bg-transparent text-sm font-bold border-none focus:ring-0 cursor-pointer text-slate-900"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="popular">Más populares</option>
                  <option value="price-low">Precio: Menor a Mayor</option>
                  <option value="price-high">Precio: Mayor a Menor</option>
                  <option value="new">Nuevos ingresos</option>
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <div className="text-6xl text-gray-200 mb-6">
                  <i className="fa-solid fa-box-open"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No encontramos resultados</h3>
                <p className="text-gray-500">Intenta cambiar los filtros o limpiar la búsqueda.</p>
                <button 
                  onClick={resetFilters}
                  className="mt-6 text-blue-600 font-bold uppercase tracking-widest border-b-2 border-blue-600 hover:text-blue-700 hover:border-blue-700 transition-colors"
                >
                  Ver todo el catálogo
                </button>
              </div>
            )}
            
            {filteredProducts.length > 0 && (
              <div className="mt-20 flex justify-center gap-2">
                 <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold">1</button>
                 <button className="w-10 h-10 flex items-center justify-center rounded-lg border hover:bg-gray-50 transition-colors">2</button>
                 <button className="px-4 h-10 flex items-center justify-center rounded-lg border hover:bg-gray-50 transition-colors font-bold text-sm">Siguiente</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenisPage;
