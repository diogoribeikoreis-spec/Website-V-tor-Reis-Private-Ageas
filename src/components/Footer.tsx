import React from 'react';
import { DynamicIcon } from './DynamicIcon';

interface FooterProps {
  onOpenLeadForm: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLeadForm }) => {
  return (
    <footer className="bg-elegant-header border-t border-white/5 pt-16 pb-12 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-tight text-white">
                Vítor Reis
              </span>
              <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-elegant-teal">
                Private Ageas Partner
              </span>
            </div>
            <p className="text-gray-500 leading-relaxed text-xs">
              A sua mediadora de seguros de confiança. Soluções de proteção premium para particulares e empresas, com o respaldo exclusivo do Grupo Ageas Seguros.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">
              Contactos Diretos
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5">
                <DynamicIcon name="Phone" size={14} className="text-elegant-teal shrink-0" />
                <a href="tel:+351932642879" className="text-gray-300 hover:text-white font-semibold transition-colors">
                  932 642 879
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="text-[#25D366] shrink-0 fill-current" width="14" height="14" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.455L0 24zm6.59-11.971c-.148-.247-.148-.495-.074-.742.074-.247.371-.495.618-.742.247-.247.495-.247.618-.247.124 0 .247 0 .371.074.124.074.247.247.371.495.124.371.371.865.371.989 0 .124-.074.247-.148.371-.074.124-.148.247-.247.371-.074.124-.148.247-.074.371.371.618.865 1.113 1.484 1.607.742.618 1.36.865 1.607.989.247.124.371.074.495-.074.124-.148.495-.618.618-.865.124-.247.247-.247.495-.124.247.124 1.484.742 1.731.865.247.124.371.247.433.371.074.124.074.742-.148 1.36-.247.618-1.237 1.237-1.731 1.237-.495 0-1.113-.124-3.216-.989-2.474-.989-4.08-3.585-4.204-3.71-.124-.124-.989-1.36-.989-2.597 0-1.237.618-1.855.865-2.102z" />
                </svg>
                <a href="https://wa.me/351932642879" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#25D366] font-semibold transition-colors">
                  WhatsApp: 932 642 879
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <DynamicIcon name="Mail" size={14} className="text-[#33D9EC] shrink-0" />
                <a href="mailto:vitor.reis@private.ageas.pt" className="text-gray-300 hover:text-white transition-colors font-medium">
                  vitor.reis@private.ageas.pt
                </a>
              </li>
            </ul>
          </div>

          {/* Branch Nav Quick Access */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">
              A Nossa Atividade
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[#90BC0D] rounded-full" />
                <span className="text-gray-400">Ramos Particulares</span>
              </li>
              <li className="flex items-center gap-2 pl-3">
                <span className="text-gray-500">&bull;</span>
                <span className="text-gray-400">Saúde, Vida e Casa</span>
              </li>
              <li className="flex items-center gap-2 pl-3">
                <span className="text-gray-500">&bull;</span>
                <span className="text-gray-400">Acidentes Pessoais e Poupança</span>
              </li>
              <li className="flex items-center gap-2 mt-2">
                <span className="w-1 h-1 bg-[#33D9EC] rounded-full" />
                <span className="text-gray-400">Ramos Empresariais</span>
              </li>
              <li className="flex items-center gap-2 pl-3">
                <span className="text-gray-500">&bull;</span>
                <span className="text-gray-400">Frotas Automóvel e Colaboradores</span>
              </li>
              <li className="flex items-center gap-2 pl-3">
                <span className="text-gray-500">&bull;</span>
                <span className="text-gray-400">Responsabilidade Civil e Património</span>
              </li>
            </ul>
          </div>

          {/* Call-to-action details */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">
              Localização & Suporte
            </h4>
            <div className="flex items-start gap-2.5 mb-4">
              <DynamicIcon name="MapPin" size={14} className="text-[#EE5623] shrink-0 mt-0.5" />
              <p className="text-xs text-gray-400 leading-relaxed">
                Porto, Portugal <br />
                <span className="text-[10px] text-gray-500">Parceiros Oficiais e Mediação Premium</span>
              </p>
            </div>
            <button
              onClick={onOpenLeadForm}
              className="w-full py-2.5 px-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <DynamicIcon name="Calendar" size={14} className="text-[#33D9EC]" />
              Falar com Mediador
            </button>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="bg-elegant-bg border border-white/5 p-4 rounded-xl mb-8 leading-relaxed text-gray-500 text-[10px] md:text-xs">
          <p className="mb-2 text-justify">
            <strong className="text-gray-400 font-semibold">Nota Informativa e Legal:</strong> Vítor Reis Private Ageas atua na qualidade de Mediador/Parceiro autorizado do Grupo Ageas Seguros. O presente website destina-se a fins puramente promocionais e informativos de apoio comercial aos nossos parceiros e clientes, não constituindo proposta contratual ou conselho de subscrição obrigatório. A aceitação do risco, determinação de capitais, prémios, exclusões e franquias definitivas dependem exclusivamente da análise da proposta, condições particulares e da documentação contratual formalizada no ato de emissão da apólice.
          </p>
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Vítor Reis Private Ageas. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};
