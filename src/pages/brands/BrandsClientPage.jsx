import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import * as Lucide from 'lucide-react';
import { BRAND_CATEGORIES, ENRICHED_BRANDS } from './brandsData';

export function BrandsClientPage({ brands: dbBrands }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeBrand, setActiveBrand] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Dynamically map icon strings to Lucide components
  const renderIcon = (iconName, className = "w-6 h-6") => {
    const IconComponent = Lucide[iconName] || Lucide.HelpCircle;
    return <IconComponent className={className} />;
  };

  // Filter brands based on category selection and search query
  const filteredBrands = useMemo(() => {
    return ENRICHED_BRANDS.filter(brand => {
      const matchesCategory = selectedCategory === 'all' || brand.category === selectedCategory;
      const matchesSearch = brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            brand.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            brand.categoriesSupplied.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Duplicate brands for seamless marquee scrolling
  const marqueeBrands = useMemo(() => {
    return [...ENRICHED_BRANDS, ...ENRICHED_BRANDS, ...ENRICHED_BRANDS];
  }, []);

  return (
    <div className="min-h-screen bg-bakery-cream/40 text-bakery-chocolate">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-bakery-beige/50 via-bakery-cream/30 to-transparent pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-bakery-beige/30">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-bakery-brown/30 blur-3xl animate-float-slow" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-bakery-light-brown/20 blur-3xl animate-float-medium" />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bakery-brown/10 text-bakery-brown text-xs font-semibold mb-6 border border-bakery-brown/20">
            <Lucide.Sparkles className="w-4.5 h-4.5 text-bakery-brown animate-pulse" />
            <span>Tamil Nadu's Premium Bakery Distributor</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-bakery-chocolate mb-6">
            Trusted Brands. <span className="text-bakery-brown italic">Proven Quality.</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-bakery-chocolate/80 leading-relaxed font-sans mb-10">
            We proudly partner with industry-leading manufacturers to deliver premium bakery ingredients and food solutions across Tamil Nadu.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
            {[
              { label: "Partner Brands", val: "15+", icon: "Award" },
              { label: "Baking Ingredients", val: "1,000+", icon: "ChefHat" },
              { label: "Bakery Clients", val: "500+", icon: "HeartHandshake" },
              { label: "Tamil Nadu Cities", val: "100%", icon: "MapPin" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-xs p-5 rounded-2xl border border-bakery-beige/50 shadow-xs hover:shadow-md hover:border-bakery-brown/30 transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <div className="p-2.5 rounded-xl bg-bakery-beige/30 text-bakery-brown">
                    {renderIcon(stat.icon, "w-5 h-5")}
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-bakery-chocolate">{stat.val}</div>
                <div className="text-xs font-medium uppercase tracking-wider text-bakery-chocolate/65 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Category Selector & Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-serif font-bold text-bakery-chocolate">Explore by Category</h2>
            <p className="text-sm text-bakery-chocolate/70 mt-1">Filter our authorized brands by their core ingredient categories.</p>
          </div>
          
          {/* Brand Search */}
          <div className="relative w-full md:max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-bakery-chocolate/40">
              <Lucide.Search className="w-5 h-5" />
            </div>
            <input 
              type="text" 
              placeholder="Search brands, products or categories..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-bakery-beige focus:border-bakery-brown focus:ring-1 focus:ring-bakery-brown outline-hidden text-sm transition-all shadow-xs"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-bakery-chocolate/40 hover:text-bakery-chocolate"
              >
                <Lucide.X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 text-center cursor-pointer ${
              selectedCategory === 'all' 
                ? 'bg-bakery-chocolate text-white border-bakery-chocolate shadow-md scale-102' 
                : 'bg-white text-bakery-chocolate border-bakery-beige/60 hover:border-bakery-brown/50 hover:bg-bakery-beige/10'
            }`}
          >
            <div className="mb-2 p-2 rounded-lg bg-bakery-beige/30 text-current">
              <Lucide.LayoutGrid className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold font-sans">All Brands</span>
            <span className="text-[10px] opacity-60 mt-0.5">{ENRICHED_BRANDS.length} Brands</span>
          </button>

          {BRAND_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 text-center cursor-pointer ${
                  isActive 
                    ? 'bg-bakery-chocolate text-white border-bakery-chocolate shadow-md scale-102' 
                    : 'bg-white text-bakery-chocolate border-bakery-beige/60 hover:border-bakery-brown/50 hover:bg-bakery-beige/10'
                }`}
              >
                <div className={`mb-2 p-2 rounded-lg ${isActive ? 'bg-white/10' : 'bg-bakery-beige/30'} text-current`}>
                  {renderIcon(cat.icon, "w-5 h-5")}
                </div>
                <span className="text-xs font-bold font-sans line-clamp-1">{cat.name}</span>
                <span className="text-[10px] opacity-60 mt-0.5">{cat.brandCount} Brands</span>
              </button>
            );
          })}
        </div>

        {/* Brand Showcase Cards */}
        {filteredBrands.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBrands.map((brand) => (
              <div 
                key={brand.id}
                onClick={() => setActiveBrand(brand)}
                className="group relative bg-white rounded-3xl border border-bakery-beige/40 shadow-xs hover:shadow-xl hover:border-bakery-brown/30 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full"
              >
                {/* Visual Banner Header */}
                <div className="relative h-44 overflow-hidden bg-bakery-beige/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img 
                    src={brand.banner} 
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Partnership Badge */}
                  <span className="absolute top-4 left-4 z-20 px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full bg-bakery-brown text-white shadow-xs">
                    {brand.partnershipBadge}
                  </span>

                  {/* Logo Text overlayed on image */}
                  <div className="absolute bottom-4 left-4 z-20 flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-serif font-black text-sm border shadow-md uppercase tracking-wider ${brand.logoBg}`}>
                      {brand.logoText.substring(0, 3)}
                    </div>
                    <div className="text-white">
                      <h3 className="text-lg font-serif font-black tracking-wide leading-tight">{brand.name}</h3>
                      <p className="text-[10px] text-white/85 leading-none">{brand.stats.partnershipYears} Years Partnered</p>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <p className="text-sm text-bakery-chocolate/85 leading-relaxed mb-4">
                      {brand.description}
                    </p>

                    {/* Subcategories supplied */}
                    <div className="mb-4">
                      <h4 className="text-[11px] uppercase tracking-wider text-bakery-chocolate/50 font-bold mb-1.5">Categories Supplied</h4>
                      <div className="flex flex-wrap gap-1">
                        {brand.categoriesSupplied.map((item, index) => (
                          <span key={index} className="text-[10px] font-medium bg-bakery-beige/30 text-bakery-chocolate/80 px-2 py-0.5 rounded-md">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Featured Products */}
                    <div className="mb-6">
                      <h4 className="text-[11px] uppercase tracking-wider text-bakery-chocolate/50 font-bold mb-1.5">Featured Products</h4>
                      <ul className="space-y-1.5">
                        {brand.featuredProducts.map((prod, index) => (
                          <li key={index} className="flex items-center gap-2 text-xs text-bakery-chocolate/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-bakery-brown flex-shrink-0" />
                            <span>{prod}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Link Trigger */}
                  <div className="pt-4 border-t border-bakery-beige/40 flex items-center justify-between text-xs font-bold text-bakery-brown group-hover:text-bakery-chocolate transition-colors mt-auto">
                    <span>Explore Story & Portfolio</span>
                    <Lucide.ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-bakery-beige/30 p-8 max-w-xl mx-auto shadow-xs">
            <Lucide.PackageOpen className="w-12 h-12 text-bakery-brown/50 mx-auto mb-4" />
            <h3 className="text-lg font-bold font-serif text-bakery-chocolate">No Brands Found</h3>
            <p className="text-sm text-bakery-chocolate/70 mt-1">We couldn't find any brands matching "{searchQuery}" under this category.</p>
            <button 
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-5 px-5 py-2.5 bg-bakery-brown hover:bg-bakery-chocolate text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Brand Story Detail Modal */}
      {activeBrand && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bakery-chocolate/65 backdrop-blur-md transition-all duration-300">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-bakery-beige animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Image Header */}
            <div className="relative h-52 sm:h-60 bg-bakery-beige/30">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent z-10" />
              <img 
                src={activeBrand.banner} 
                alt={activeBrand.name} 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setActiveBrand(null)}
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors cursor-pointer"
              >
                <Lucide.X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 z-20 flex items-center gap-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-serif font-black text-lg border-2 shadow-lg uppercase tracking-wider ${activeBrand.logoBg}`}>
                  {activeBrand.logoText.substring(0, 3)}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-md bg-bakery-brown text-white">
                      {activeBrand.partnershipBadge}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-black text-white leading-none">{activeBrand.name}</h3>
                  <p className="text-xs text-white/80 mt-1">{activeBrand.stats.partnershipYears} Years of Trusted Partnership</p>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-bakery-brown font-bold mb-2 flex items-center gap-1.5">
                  <Lucide.Sparkles className="w-3.5 h-3.5" />
                  Our Story & Partnership
                </h4>
                <p className="text-sm text-bakery-chocolate/85 leading-relaxed font-sans">
                  {activeBrand.story}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-bakery-beige/25 border border-bakery-beige/40">
                <h4 className="text-xs uppercase tracking-widest text-bakery-brown font-bold mb-2 flex items-center gap-1.5">
                  <Lucide.ShieldCheck className="w-4 h-4" />
                  Why Shreepathy & Co Distributes {activeBrand.name}
                </h4>
                <p className="text-xs text-bakery-chocolate/80 leading-relaxed font-sans">
                  {activeBrand.whyDistribute}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-bakery-brown font-bold mb-3 flex items-center gap-1.5">
                  <Lucide.Package className="w-3.5 h-3.5" />
                  Popular Products in Stock
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeBrand.popularProducts.map((prod, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 bg-bakery-cream/30 p-2.5 rounded-lg border border-bakery-beige/20 text-xs font-semibold text-bakery-chocolate/85">
                      <Lucide.CheckCircle2 className="w-4 h-4 text-bakery-brown flex-shrink-0" />
                      <span>{prod}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-bakery-cream/30 border-t border-bakery-beige/40 flex flex-col sm:flex-row gap-3">
              <Link 
                to={`/products?brand=${activeBrand.id}`}
                onClick={() => setActiveBrand(null)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-bakery-chocolate hover:bg-bakery-brown text-white text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                <Lucide.Search className="w-4 h-4" />
                <span>Browse Products Portfolio</span>
              </Link>
              
              <a 
                href={`https://wa.me/919876543210?text=Hi%20Shreepathy%20and%20Co,%20I%20am%20interested%20in%20ordering%20bulk%20${activeBrand.name}%20products.`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                <Lucide.Phone className="w-4 h-4" />
                <span>Enquire via WhatsApp</span>
              </a>

              <button 
                onClick={() => setActiveBrand(null)}
                className="px-5 py-3 rounded-xl border border-bakery-beige hover:bg-bakery-beige/25 text-bakery-chocolate text-xs font-bold transition-all cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Trust Statistics Banner */}
      <section className="bg-bakery-chocolate text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">Unmatched Reach, Premium Standards</h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-bakery-beige/70 mb-12">
            Helping food businesses grow by delivering genuine ingredients from top global brands on-time, every time.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { val: "50+", label: "Trusted Brands", desc: "National & Global partnerships" },
              { val: "1000+", label: "Ingredients", desc: "Across diverse food categories" },
              { val: "500+", label: "Bakery Clients", desc: "Hotels, cloud kitchens & cafes" },
              { val: "Tamil Nadu-Wide", label: "Distribution Network", desc: "Reliable statewide deliveries" }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-bakery-brown mb-2">{stat.val}</div>
                <div className="text-sm font-bold tracking-wide mb-1 text-white">{stat.label}</div>
                <div className="text-xs text-bakery-beige/50">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-bakery-brown font-bold">The Distributor Difference</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-bakery-chocolate mt-2">Why Bakeries Partner With Us</h2>
          <p className="max-w-xl mx-auto text-sm text-bakery-chocolate/75 mt-3">
            We are more than just supply distributors. We are strategic growth partners for your culinary creations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Authentic Products",
              desc: "100% genuine ingredients sourced directly from official manufacturers, preserving brand warranties and culinary safety.",
              icon: "ShieldCheck"
            },
            {
              title: "Direct Distribution",
              desc: "By eliminating intermediaries, we deliver products at competitive wholesale margins with stable product availability.",
              icon: "Truck"
            },
            {
              title: "Reliable Supply Chain",
              desc: "State-of-the-art storage facilities matching temperature regulations for sensitive chocolates, dairy, and yeast.",
              icon: "PackageCheck"
            },
            {
              title: "Quality Assurance",
              desc: "Rigorous product checks, freshness monitoring, and strict FIFO systems guarantee excellent ingredients shelf lives.",
              icon: "Award"
            },
            {
              title: "Technical Support",
              desc: "Direct access to manufacturer chefs for ingredient demos, recipe trials, and trouble-shooting premixes.",
              icon: "Wrench"
            },
            {
              title: "Fast Delivery",
              desc: "Dedicated logistics network ensuring lightning-fast dispatches to Chennai, Coimbatore, and across Tamil Nadu.",
              icon: "Sparkles"
            }
          ].map((benefit, i) => (
            <div key={i} className="group bg-white p-8 rounded-3xl border border-bakery-beige/50 hover:border-bakery-brown/30 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="inline-flex p-3 rounded-2xl bg-bakery-beige/35 text-bakery-brown mb-5 group-hover:scale-110 transition-transform">
                {renderIcon(benefit.icon, "w-6 h-6")}
              </div>
              <h3 className="text-lg font-bold font-serif text-bakery-chocolate mb-2">{benefit.title}</h3>
              <p className="text-xs sm:text-sm text-bakery-chocolate/75 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Logo Wall (Marquee) */}
      <section className="bg-white py-14 border-y border-bakery-beige/30 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 text-center mb-8">
          <span className="text-[10px] tracking-widest font-bold text-bakery-brown uppercase">Authorized Product Lineup</span>
          <h3 className="text-lg font-serif font-black text-bakery-chocolate/75 mt-1">Sourcing From the Industry Leaders</h3>
        </div>
        
        {/* Scrolling marquee */}
        <div className="relative overflow-hidden w-full flex select-none marquee-container mt-6">
          <div className="flex animate-marquee space-x-12 pr-12 min-w-full">
            {marqueeBrands.map((brand, i) => (
              <div 
                key={`m1-${i}`}
                className="flex items-center gap-3 grayscale opacity-45 hover:grayscale-0 hover:opacity-100 transition-all duration-300 py-2 cursor-pointer"
                onClick={() => setActiveBrand(brand)}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-serif font-black text-xs border uppercase tracking-wider ${brand.logoBg}`}>
                  {brand.logoText.substring(0, 3)}
                </div>
                <span className="text-sm font-serif font-black tracking-wide text-bakery-chocolate">{brand.name}</span>
              </div>
            ))}
          </div>
          <div className="flex animate-marquee space-x-12 pr-12 min-w-full" aria-hidden="true">
            {marqueeBrands.map((brand, i) => (
              <div 
                key={`m2-${i}`}
                className="flex items-center gap-3 grayscale opacity-45 hover:grayscale-0 hover:opacity-100 transition-all duration-300 py-2 cursor-pointer"
                onClick={() => setActiveBrand(brand)}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-serif font-black text-xs border uppercase tracking-wider ${brand.logoBg}`}>
                  {brand.logoText.substring(0, 3)}
                </div>
                <span className="text-sm font-serif font-black tracking-wide text-bakery-chocolate">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action (CTA) Section */}
      <section className="bg-bakery-beige/30 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-white border border-bakery-beige rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-bakery-beige/30 rounded-bl-full pointer-events-none" />
          
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-bakery-chocolate mb-4">
            Looking for a Specific Brand?
          </h2>
          <p className="text-sm sm:text-base text-bakery-chocolate/75 max-w-2xl mx-auto mb-10">
            We source custom ingredients and carry catalog sheets for hundreds of baking brands. Connect with our dedicated wholesale distribution team today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="mailto:sales@shreepathyandco.in?subject=Request%20Product%20Catalog"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-bakery-brown hover:bg-bakery-chocolate text-white text-xs font-bold rounded-xl transition-all shadow-md cursor-pointer"
            >
              <Lucide.Download className="w-4.5 h-4.5" />
              <span>Request Product Catalog</span>
            </a>
            
            <Link 
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-bakery-chocolate hover:bg-bakery-brown text-white text-xs font-bold rounded-xl transition-all shadow-md cursor-pointer"
            >
              <Lucide.Mail className="w-4.5 h-4.5" />
              <span>Contact Sales Team</span>
            </Link>
            
            <a 
              href="https://wa.me/919876543210?text=Hi%20Shreepathy%20and%20Co,%20I%20would%20like%20to%20place%20an%20order%20for%20bakery%20ingredients."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-md cursor-pointer"
            >
              <Lucide.Phone className="w-4.5 h-4.5" />
              <span>Order via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
