import React, { useState, useEffect } from 'react';
import { InsuranceArea, InsuranceCategory } from './types';
import { PARTICULAR_CATEGORIES, EMPRESA_CATEGORIES } from './data';
import { Header } from './components/Header';
import { CategoryView } from './components/CategoryView';
import { LeadForm } from './components/LeadForm';
import { Footer } from './components/Footer';
import { DynamicIcon } from './components/DynamicIcon';

export default function App() {
  const [currentArea, setCurrentArea] = useState<InsuranceArea>('particular');
  const [activeCategory, setActiveCategory] = useState<InsuranceCategory | null>(null);
  
  // Lead Form Modal States
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [prefilledCategory, setPrefilledCategory] = useState('');
  const [prefilledModality, setPrefilledModality] = useState('');

  const currentCategories =
    currentArea === 'particular' ? PARTICULAR_CATEGORIES : EMPRESA_CATEGORIES;

  // Auto-select first category when area switches
  useEffect(() => {
    if (currentCategories.length > 0) {
      setActiveCategory(currentCategories[0]);
    } else {
      setActiveCategory(null);
    }
  }, [currentArea]);

  const handleOpenLeadFormWithPrefill = (categoryObjId: string, modalityId?: string) => {
    setPrefilledCategory(categoryObjId);
    setPrefilledModality(modalityId || '');
    setIsLeadFormOpen(true);
  };

  const handleOpenGeneralLeadForm = () => {
    setPrefilledCategory(activeCategory?.id || '');
    setPrefilledModality('');
    setIsLeadFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-elegant-bg font-sans selection:bg-[#8E419C]/30 text-gray-300 flex flex-col relative">
      
      {/* Premium Header */}
      <Header
        currentArea={currentArea}
        onAreaChange={setCurrentArea}
        onOpenLeadForm={handleOpenGeneralLeadForm}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-16 md:py-20 bg-gradient-to-b from-elegant-header to-elegant-bg border-b border-white/[0.03]">
          {/* Subtle decorative vector lines / colored glows */}
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[120px] bg-[#8E419C]/10 pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full blur-[120px] bg-elegant-teal/10 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[11px] font-semibold text-gray-300 uppercase tracking-wider mb-6 animate-fade-in">
                <span className="w-1.5 h-1.5 rounded-full bg-elegant-teal" />
                Mediação de Seguros de Confiança
              </div>

              {/* Catchy Premium Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Protegemos o seu <span className="text-[#33D9EC]">Mundo</span>, <br className="hidden sm:inline" />
                com toda a <span className="text-elegant-teal">Segurança</span>.
              </h1>

              {/* Descriptive, concise subtitle */}
              <p className="text-base md:text-lg text-gray-400 font-sans leading-relaxed mb-8 max-w-2xl mx-auto">
                Na <strong className="text-white">Vítor Reis Private Ageas</strong>, criamos soluções de seguros à sua medida. Informação simplificada, transparente e comercialmente focada em assegurar o seu futuro familiar e a solidez do seu negócio.
              </p>

              {/* Area Quick Navigation button for desktop */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleOpenGeneralLeadForm}
                  className="w-full sm:w-auto py-3.5 px-8 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <DynamicIcon name="Phone" size={16} className="text-elegant-teal" />
                  Solicitar Contacto Gratuito
                </button>
                <a
                  href="#ramos-seguros"
                  className="w-full sm:w-auto py-3.5 px-8 bg-elegant-teal hover:bg-elegant-teal/80 text-white rounded-xl text-sm font-semibold transition-all shadow-lg shadow-teal-950/20 flex items-center justify-center gap-2"
                >
                  Explorar Coberturas
                  <DynamicIcon name="ChevronRight" size={16} />
                </a>
              </div>

            </div>

            {/* Micro value-cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16 max-w-5xl mx-auto">
              
              <div className="bg-elegant-card border border-white/5 rounded-2xl p-5 flex items-start gap-4 hover:border-white/10 transition-colors">
                <div className="p-2.5 bg-[#8E419C]/10 border border-[#8E419C]/20 text-[#8E419C] rounded-xl shrink-0">
                  <DynamicIcon name="Award" size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">Parceiro Exclusivo Ageas</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">Acesso direto a uma das maiores redes médicas e de assistência em Portugal.</p>
                </div>
              </div>

              <div className="bg-elegant-card border border-white/5 rounded-2xl p-5 flex items-start gap-4 hover:border-white/10 transition-colors">
                <div className="p-2.5 bg-[#90BC0D]/10 border border-[#90BC0D]/20 text-[#90BC0D] rounded-xl shrink-0">
                  <DynamicIcon name="UserCheck" size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">Acompanhamento Private</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">Um gestor dedicado para desenhar as melhores soluções e tratar de eventuais sinistros.</p>
                </div>
              </div>

              <div className="bg-elegant-card border border-white/5 rounded-2xl p-5 flex items-start gap-4 hover:border-white/10 transition-colors">
                <div className="p-2.5 bg-elegant-teal/10 border border-elegant-teal/20 text-elegant-teal rounded-xl shrink-0">
                  <DynamicIcon name="Shield" size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">Transparência Total</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">Apresentamos apenas as coberturas ideais, de forma simples e livre de burocracias.</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* PRODUTOS / SEGUROS SECTION */}
        <section id="ramos-seguros" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section title & Category Switcher */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#90BC0D] block mb-2">
                Ramos Disponíveis
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">
                {currentArea === 'particular' ? 'Seguros para Particular' : 'Seguros para Empresas'}
              </h2>
              <p className="text-sm text-gray-400 mt-2 max-w-xl">
                Selecione o ramo de seguro para obter um resumo explicativo do mesmo e ver detalhadamente cada uma das modalidades disponíveis.
              </p>
            </div>
          </div>

          {/* Sub-Category Nav Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-3 mb-10">
            {currentCategories.map((cat) => {
              const isActive = activeCategory?.id === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-300 text-center cursor-pointer relative overflow-hidden group ${
                    isActive
                      ? 'bg-elegant-grid border-white/10 shadow-lg text-white font-semibold'
                      : 'bg-elegant-card/40 hover:bg-elegant-card/80 border-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  <div 
                    className="p-3 rounded-xl mb-3 transition-colors duration-300"
                    style={{ 
                      backgroundColor: isActive ? `${cat.accentColor}20` : 'rgba(255,255,255,0.02)',
                      border: isActive ? `1px solid ${cat.accentColor}40` : '1px solid rgba(255,255,255,0.04)'
                    }}
                  >
                    <DynamicIcon 
                      name={cat.icon} 
                      className="transition-transform group-hover:scale-105 duration-300" 
                      size={20}
                      style={{ color: isActive ? cat.accentColor : 'currentColor' }}
                    />
                  </div>
                  <span className="text-xs tracking-tight md:text-sm">{cat.name}</span>
                  {isActive && (
                    <div 
                      className="absolute bottom-0 inset-x-0 h-1 rounded-full"
                      style={{ backgroundColor: cat.accentColor }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Detailed Branch Overview & Modalities lists */}
          {activeCategory && (
            <div className="mt-8 transition-opacity duration-300">
              <CategoryView
                category={activeCategory}
                area={currentArea}
                onSelectModalityForLead={(modalityId) =>
                  handleOpenLeadFormWithPrefill(activeCategory.id, modalityId)
                }
              />
            </div>
          )}

        </section>

      </main>

      {/* Professional Footer */}
      <Footer onOpenLeadForm={handleOpenGeneralLeadForm} />

      {/* Pre-fillable Simulation Request Modal */}
      <LeadForm
        initialArea={currentArea}
        initialCategory={prefilledCategory}
        initialModality={prefilledModality}
        isOpen={isLeadFormOpen}
        onClose={() => setIsLeadFormOpen(false)}
      />

      {/* Floating WhatsApp Contact Widget */}
      <a
        href="https://wa.me/351932642879"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar via WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:hidden" />
        <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.455L0 24zm6.59-11.971c-.148-.247-.148-.495-.074-.742.074-.247.371-.495.618-.742.247-.247.495-.247.618-.247.124 0 .247 0 .371.074.124.074.247.247.371.495.124.371.371.865.371.989 0 .124-.074.247-.148.371-.074.124-.148.247-.247.371-.074.124-.148.247-.074.371.371.618.865 1.113 1.484 1.607.742.618 1.36.865 1.607.989.247.124.371.074.495-.074.124-.148.495-.618.618-.865.124-.247.247-.247.495-.124.247.124 1.484.742 1.731.865.247.124.371.247.433.371.074.124.074.742-.148 1.36-.247.618-1.237 1.237-1.731 1.237-.495 0-1.113-.124-3.216-.989-2.474-.989-4.08-3.585-4.204-3.71-.124-.124-.989-1.36-.989-2.597 0-1.237.618-1.855.865-2.102z" />
        </svg>
        <span className="text-sm font-semibold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap">
          Falar no WhatsApp
        </span>
      </a>

    </div>
  );
}
