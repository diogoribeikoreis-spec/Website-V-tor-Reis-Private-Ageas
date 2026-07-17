import React, { useEffect, useState } from 'react';
import { DynamicIcon } from './DynamicIcon';
import { InsuranceArea } from '../types';

interface HeaderProps {
  currentArea: InsuranceArea;
  onAreaChange: (area: InsuranceArea) => void;
  onOpenLeadForm: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentArea,
  onAreaChange,
  onOpenLeadForm
}) => {
  return (
    <header className="sticky top-0 z-40 bg-elegant-header/90 backdrop-blur-md border-b border-white/5 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo Section */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-lg font-bold tracking-tight text-white hover:text-white/95 transition-colors">
                Vítor Reis
              </span>
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] py-0.5 px-1.5 bg-elegant-teal/20 text-[#33D9EC] rounded border border-elegant-teal/30">
                Private
              </span>
            </div>
            
            {/* Ageas Logo styling approximation in pure CSS/text */}
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-xs text-gray-400 font-sans tracking-wide">
                parceiro exclusivo
              </span>
              <span className="text-xs font-semibold tracking-tighter text-white font-sans lowcase">
                ageas<span className="text-[#90BC0D]">.</span>
              </span>
            </div>
          </div>
        </div>

        {/* Particular / Empresas main switch */}
        <nav className="hidden md:flex items-center gap-1 bg-elegant-bg p-1 rounded-xl border border-white/5">
          <button
            onClick={() => onAreaChange('particular')}
            className={`flex items-center gap-2 py-2 px-5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
              currentArea === 'particular'
                ? 'bg-elegant-teal text-white shadow-lg shadow-teal-950/20'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <DynamicIcon name="UserCheck" size={16} />
            Particular
          </button>
          <button
            onClick={() => onAreaChange('empresas')}
            className={`flex items-center gap-2 py-2 px-5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
              currentArea === 'empresas'
                ? 'bg-[#33D9EC] text-slate-950 shadow-lg shadow-cyan-950/20'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <DynamicIcon name="Building2" size={16} />
            Empresas
          </button>
        </nav>

        {/* Right Call To Actions */}
        <div className="flex items-center gap-3">

          {/* WhatsApp Direct Link */}
          <a
            href="https://wa.me/351932642879"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 rounded-lg text-xs font-semibold text-[#25D366] transition-all"
          >
            <svg className="w-3.5 h-3.5 fill-current text-[#25D366]" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.455L0 24zm6.59-11.971c-.148-.247-.148-.495-.074-.742.074-.247.371-.495.618-.742.247-.247.495-.247.618-.247.124 0 .247 0 .371.074.124.074.247.247.371.495.124.371.371.865.371.989 0 .124-.074.247-.148.371-.074.124-.148.247-.247.371-.074.124-.148.247-.074.371.371.618.865 1.113 1.484 1.607.742.618 1.36.865 1.607.989.247.124.371.074.495-.074.124-.148.495-.618.618-.865.124-.247.247-.247.495-.124.247.124 1.484.742 1.731.865.247.124.371.247.433.371.074.124.074.742-.148 1.36-.247.618-1.237 1.237-1.731 1.237-.495 0-1.113-.124-3.216-.989-2.474-.989-4.08-3.585-4.204-3.71-.124-.124-.989-1.36-.989-2.597 0-1.237.618-1.855.865-2.102z" />
            </svg>
            <span>WhatsApp</span>
          </a>

          {/* Emergency support / direct call info */}
          <a
            href="tel:+351932642879"
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 hover:bg-white/5 rounded-lg text-xs font-semibold text-gray-400 hover:text-white transition-colors"
          >
            <DynamicIcon name="Phone" size={14} className="text-elegant-teal" />
            <span>932 642 879</span>
          </a>

          <button
            onClick={onOpenLeadForm}
            className={`py-2 px-4 rounded-xl text-xs font-bold tracking-wide uppercase transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer ${
              currentArea === 'particular'
                ? 'bg-elegant-teal text-white hover:bg-elegant-teal/80 shadow-teal-950/20'
                : 'bg-[#33D9EC] text-slate-950 hover:bg-[#57e3f2] shadow-cyan-950/20'
            }`}
          >
            Pedir Simulação
          </button>
        </div>

      </div>

      {/* Mobile Switcher header bar */}
      <div className="flex md:hidden border-t border-white/5 bg-elegant-bg p-1.5">
        <button
          onClick={() => onAreaChange('particular')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${
            currentArea === 'particular'
              ? 'bg-elegant-teal text-white shadow-lg'
              : 'text-gray-400'
          }`}
        >
          <DynamicIcon name="UserCheck" size={16} />
          Particular
        </button>
        <button
          onClick={() => onAreaChange('empresas')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${
            currentArea === 'empresas'
              ? 'bg-[#33D9EC] text-slate-950 shadow-lg'
              : 'text-gray-400'
          }`}
        >
          <DynamicIcon name="Building2" size={16} />
          Empresas
        </button>
      </div>
    </header>
  );
};
