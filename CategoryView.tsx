import React, { useState, useEffect } from 'react';
import { InsuranceCategory, Modality } from '../types';
import { DynamicIcon } from './DynamicIcon';

interface CategoryViewProps {
  category: InsuranceCategory;
  area: 'particular' | 'empresas';
  onSelectModalityForLead: (modalityId: string) => void;
}

export const CategoryView: React.FC<CategoryViewProps> = ({
  category,
  area,
  onSelectModalityForLead
}) => {
  const [selectedModality, setSelectedModality] = useState<Modality | null>(null);

  // Auto-select the first modality when the category changes
  useEffect(() => {
    if (category.modalities.length > 0) {
      setSelectedModality(category.modalities[0]);
    } else {
      setSelectedModality(null);
    }
  }, [category]);

  const accentColor = category.accentColor;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-gray-200">
      
      {/* LEFT COLUMN: Category Header, Pitch & Modality Selectors (span 4/12) */}
      <div className="lg:col-span-4 flex flex-col gap-6">
        
        {/* Branch General Info Card */}
        <div className="bg-elegant-card border border-white/5 rounded-2xl p-6 relative overflow-hidden shadow-xl">
          {/* Subtle colored blur background accent */}
          <div 
            className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ backgroundColor: accentColor }}
          />
          
          <div className="flex items-center gap-3.5 mb-4">
            <div 
              className="p-3.5 rounded-xl text-white shadow-inner"
              style={{ backgroundColor: `${accentColor}20`, border: `1px solid ${accentColor}40` }}
            >
              <DynamicIcon name={category.icon} className="text-white" size={24} style={{ color: accentColor }} />
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
              Seguro de {category.name}
            </h2>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {category.description}
          </p>

          <div 
            className="p-4 rounded-xl text-xs font-medium leading-relaxed"
            style={{ backgroundColor: `${accentColor}10`, borderLeft: `3px solid ${accentColor}` }}
          >
            <span className="font-semibold block uppercase tracking-wider text-xs mb-1" style={{ color: accentColor }}>
              A Nossa Proposta
            </span>
            {category.commercialPitch}
          </div>
        </div>

        {/* Modalities Selection Title */}
        <div>
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 pl-1">
            Selecione uma Modalidade
          </h3>
          
          {/* Modalities List */}
          <div className="flex flex-col gap-2.5">
            {category.modalities.map((mod) => {
              const isSelected = selectedModality?.id === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setSelectedModality(mod)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                    isSelected
                      ? 'bg-elegant-grid text-white shadow-lg'
                      : 'bg-elegant-card/60 hover:bg-elegant-grid/40 text-gray-300 hover:text-white'
                  }`}
                  style={{
                    borderColor: isSelected ? `${accentColor}50` : 'rgba(255, 255, 255, 0.04)',
                    borderLeft: isSelected ? `4px solid ${accentColor}` : '1px solid rgba(255, 255, 255, 0.04)'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-sm tracking-tight mb-1">
                        {mod.name}
                      </h4>
                      <p className="text-xs text-gray-400 line-clamp-1 group-hover:text-gray-300 transition-colors">
                        {mod.tagline}
                      </p>
                    </div>
                    <DynamicIcon 
                      name="ChevronRight" 
                      size={16} 
                      className={`transition-transform duration-300 ${
                        isSelected ? 'translate-x-1' : 'opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5'
                      }`}
                      style={{ color: isSelected ? accentColor : 'currentColor' }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* RIGHT COLUMN: Active Modality Deep-Dive (span 8/12) */}
      <div className="lg:col-span-8">
        {selectedModality ? (
          <div className="bg-elegant-grid border border-white/5 rounded-2xl p-6 md:p-8 shadow-2xl relative transition-all" style={{ borderColor: `${accentColor}20` }}>
            
            {/* Header info for active Modality */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-6 border-b border-white/5">
              <div>
                <span 
                  className="inline-block text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full mb-3"
                  style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
                >
                  {category.name} &bull; {selectedModality.name}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight mb-1">
                  {selectedModality.name}
                </h3>
                <p className="text-sm font-medium" style={{ color: `${accentColor}dd` }}>
                  {selectedModality.tagline}
                </p>
              </div>

              {/* Simulation Call to Action */}
              <button
                onClick={() => onSelectModalityForLead(selectedModality.id)}
                className="self-start py-2.5 px-5 rounded-xl font-bold text-xs tracking-wide uppercase transition-all duration-300 hover:-translate-y-0.5 shadow-lg shrink-0 cursor-pointer"
                style={{ 
                  backgroundColor: accentColor, 
                  color: area === 'particular' ? '#ffffff' : '#0B0D17',
                  boxShadow: `0 8px 20px -4px ${accentColor}30`
                }}
              >
                Simular {selectedModality.name}
              </button>
            </div>

            {/* General Description */}
            <p className="text-gray-300 text-sm leading-relaxed mt-6 mb-8">
              {selectedModality.description}
            </p>

            {/* Highlights Grid (Dynamic indicators) */}
            {selectedModality.highlights && selectedModality.highlights.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {selectedModality.highlights.map((high, index) => (
                  <div 
                    key={index}
                    className="bg-elegant-bg/60 border border-white/5 rounded-xl p-4 flex flex-col justify-center text-center shadow-inner"
                  >
                    <span className="text-[10px] uppercase font-semibold text-gray-400 tracking-wider mb-1">
                      {high.label}
                    </span>
                    <span className={`text-sm md:text-base font-bold font-sans ${high.labelClass || 'text-white'}`}>
                      {high.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Modality Content Tabs/Sections: 1. Benefícios, 2. Coberturas, 3. Exclusões */}
            <div className="space-y-8">
              
              {/* Core Benefits */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                  Principais Vantagens Comerciais
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {selectedModality.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-2.5 text-xs text-gray-300 leading-relaxed bg-elegant-bg/30 border border-white/[0.02] p-3 rounded-lg">
                      <span className="shrink-0 mt-0.5" style={{ color: accentColor }}>
                        <DynamicIcon name="Check" size={14} />
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coverages Table */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                  O que está Incluído (Coberturas)
                </h4>
                <div className="bg-elegant-bg/40 rounded-xl overflow-hidden border border-white/5">
                  <div className="grid grid-cols-12 bg-white/5 px-4 py-2.5 text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                    <span className="col-span-4 sm:col-span-3">Cobertura</span>
                    <span className="col-span-8 sm:col-span-9">Descrição e Capitais</span>
                  </div>
                  <div className="divide-y divide-white/5">
                    {selectedModality.coverages.map((cov, idx) => (
                      <div key={idx} className="grid grid-cols-12 px-4 py-3 text-xs leading-relaxed hover:bg-white/[0.01] transition-colors">
                        <span className="col-span-4 sm:col-span-3 font-semibold text-white pr-2">
                          {cov.name}
                          {cov.isOptional && (
                            <span className="block text-[9px] uppercase tracking-wider font-semibold opacity-60 mt-0.5" style={{ color: accentColor }}>
                              Opcional
                            </span>
                          )}
                        </span>
                        <span className="col-span-8 sm:col-span-9 text-gray-400">
                          {cov.detail || 'Incluído de acordo com os termos base da apólice.'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Exclusions */}
              {selectedModality.exclusions && selectedModality.exclusions.length > 0 && (
                <div className="p-4 bg-amber-950/10 border border-amber-500/10 rounded-xl">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2.5 flex items-center gap-2">
                    <DynamicIcon name="AlertTriangle" size={14} className="text-amber-500" />
                    Principais Exclusões (Transparência Completa)
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedModality.exclusions.map((excl, idx) => (
                      <li key={idx} className="flex gap-2 text-xs text-gray-400 leading-relaxed">
                        <span className="text-amber-500 shrink-0 mt-0.5">&bull;</span>
                        <span>{excl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

            {/* Bottom Disclaimer */}
            <div className="mt-8 pt-4 border-t border-white/5 text-[10px] text-gray-500 italic leading-relaxed">
              * Informação de caráter puramente comercial e não contratual. As coberturas efetivas, limites, exclusões definitivas e franquias estão sujeitas aos termos das Condições Gerais, Especiais e Particulares formalizadas na apólice emitida.
            </div>

          </div>
        ) : (
          <div className="bg-elegant-card/40 border border-dashed border-white/10 rounded-2xl p-12 text-center text-gray-400 flex flex-col items-center justify-center h-full">
            <DynamicIcon name="Info" size={48} className="text-gray-600 mb-4 animate-pulse" />
            <p className="text-sm font-medium">Por favor, selecione uma modalidade no menu lateral para visualizar as informações completas.</p>
          </div>
        )}
      </div>

    </div>
  );
};
