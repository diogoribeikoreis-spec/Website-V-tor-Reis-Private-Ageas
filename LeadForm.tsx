import React, { useState, useEffect } from 'react';
import { DynamicIcon } from './DynamicIcon';
import { InsuranceArea } from '../types';
import { PARTICULAR_CATEGORIES, EMPRESA_CATEGORIES } from '../data';

interface LeadFormProps {
  initialArea?: InsuranceArea;
  initialCategory?: string;
  initialModality?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  initialArea = 'particular',
  initialCategory = '',
  initialModality = '',
  isOpen,
  onClose
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: initialArea,
    category: initialCategory,
    modality: initialModality,
    companyName: '',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  // Update form if initial values change
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      area: initialArea,
      category: initialCategory,
      modality: initialModality
    }));
  }, [initialArea, initialCategory, initialModality]);

  // Clear copied feedback and errors when form values change or modal closes
  useEffect(() => {
    setCopied(false);
    setError('');
  }, [formData, isOpen]);

  if (!isOpen) return null;

  const currentCategories =
    formData.area === 'particular' ? PARTICULAR_CATEGORIES : EMPRESA_CATEGORIES;

  const selectedCategoryObj = currentCategories.find((c) => c.id === formData.category);
  const currentModalities = selectedCategoryObj ? selectedCategoryObj.modalities : [];

  const handleAreaChange = (area: InsuranceArea) => {
    setFormData((prev) => ({
      ...prev,
      area,
      category: '',
      modality: '',
      companyName: area === 'particular' ? '' : prev.companyName
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      // Reset modality if category changes
      ...(name === 'category' ? { modality: '' } : {})
    }));
  };

  const handleCopyData = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.category) {
      setError('Por favor, preencha todos os campos obrigatórios (*).');
      return;
    }

    if (formData.area === 'empresas' && !formData.companyName) {
      setError('Por favor, indique o nome da empresa.');
      return;
    }

    // Generate beautifully formatted text for the user's clipboard
    const categoryName = currentCategories.find((c) => c.id === formData.category)?.name || formData.category;
    const modalityName = currentModalities.find((m) => m.id === formData.modality)?.name || 'Todas as modalidades';

    let text = `*Pedido de Simulação - Vítor Reis Private Ageas*\n`;
    text += `--------------------------------------------------\n`;
    text += `• *Nome Completo:* ${formData.name}\n`;
    text += `• *Telemóvel:* ${formData.phone}\n`;
    text += `• *E-mail:* ${formData.email}\n`;
    text += `• *Segmento:* ${formData.area === 'particular' ? 'Particular' : 'Empresa'}\n`;
    if (formData.area === 'empresas' && formData.companyName) {
      text += `• *Empresa:* ${formData.companyName}\n`;
    }
    text += `• *Ramo de Seguro:* ${categoryName}\n`;
    text += `• *Modalidade/Produto:* ${modalityName}\n`;
    if (formData.message) {
      text += `• *Mensagem/Notas:* ${formData.message}\n`;
    }

    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
      })
      .catch((err) => {
        console.error('Erro ao copiar dados:', err);
        setError('Ocorreu um erro ao copiar os dados para a área de transferência.');
      });
  };

  // Build reactive URL encoded values for direct channels
  const categoryName = currentCategories.find((c) => c.id === formData.category)?.name || formData.category;
  const modalityName = currentModalities.find((m) => m.id === formData.modality)?.name || 'Todas as modalidades';

  let prefilledText = `Olá Vítor Reis, gostaria de solicitar uma simulação:\n\n`;
  prefilledText += `• Nome: ${formData.name || '(A preencher)'}\n`;
  prefilledText += `• Telemóvel: ${formData.phone || '(A preencher)'}\n`;
  prefilledText += `• E-mail: ${formData.email || '(A preencher)'}\n`;
  prefilledText += `• Segmento: ${formData.area === 'particular' ? 'Particular' : 'Empresa'}\n`;
  if (formData.area === 'empresas' && formData.companyName) {
    prefilledText += `• Empresa: ${formData.companyName}\n`;
  }
  prefilledText += `• Ramo de Seguro: ${categoryName || '(A selecionar)'}\n`;
  prefilledText += `• Modalidade/Produto: ${modalityName}\n`;
  if (formData.message) {
    prefilledText += `• Mensagem: ${formData.message}\n`;
  }

  const urlEncodedText = encodeURIComponent(prefilledText);
  const whatsappUrl = `https://wa.me/351932642879?text=${urlEncodedText}`;
  const emailUrl = `mailto:vitor.reis@private.ageas.pt?subject=Pedido de Simulação - ${encodeURIComponent(formData.name || 'Seguro')}&body=${urlEncodedText}`;
  const phoneUrl = `tel:932642879`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300">
      <div 
        id="lead-modal-card"
        className="relative w-full max-w-lg bg-elegant-card border border-white/5 rounded-2xl shadow-2xl p-6 md:p-8 overflow-y-auto max-h-[90vh] text-gray-200"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close"
        >
          <DynamicIcon name="X" size={18} />
        </button>

        <div>
          <div className="mb-6">
            <h3 className="text-2xl font-display font-semibold text-white tracking-tight mb-2">
              Pedido de Simulação
            </h3>
            <p className="text-sm text-gray-400">
              Preencha os seus dados de contacto para que possamos simular as melhores ofertas disponíveis.
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-950/30 border border-red-500/20 text-red-300 rounded-lg text-sm flex items-center gap-2">
              <DynamicIcon name="AlertTriangle" className="text-red-400 shrink-0" size={16} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleCopyData} className="space-y-4">
            {/* Type Switcher */}
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Tipo de Cliente *
              </label>
              <div className="grid grid-cols-2 gap-2 bg-elegant-bg p-1 rounded-lg border border-white/5">
                <button
                  type="button"
                  onClick={() => handleAreaChange('particular')}
                  className={`py-2 px-4 rounded-md text-sm font-medium transition-all ${
                    formData.area === 'particular'
                      ? 'bg-elegant-teal text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Particular
                </button>
                <button
                  type="button"
                  onClick={() => handleAreaChange('empresas')}
                  className={`py-2 px-4 rounded-md text-sm font-medium transition-all ${
                    formData.area === 'empresas'
                      ? 'bg-[#33D9EC] text-slate-950 shadow-lg font-semibold'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Empresas
                </button>
              </div>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-gray-400 mb-1.5">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-elegant-bg border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-elegant-teal transition-colors"
                  placeholder="O seu nome"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-gray-400 mb-1.5">
                  Telemóvel *
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-elegant-bg border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-elegant-teal transition-colors"
                  placeholder="912 345 678"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-gray-400 mb-1.5">
                E-mail de Contacto *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-elegant-bg border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-elegant-teal transition-colors"
                placeholder="exemplo@gmail.com"
                required
              />
            </div>

            {/* Company Name (only for corporate) */}
            {formData.area === 'empresas' && (
              <div>
                <label htmlFor="companyName" className="block text-xs font-semibold text-[#33D9EC] mb-1.5">
                  Nome da Empresa *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full bg-elegant-bg border border-[#33D9EC]/30 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#33D9EC] transition-colors"
                  placeholder="Empresa Lda."
                  required
                />
              </div>
            )}

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-xs font-semibold text-gray-400 mb-1.5">
                Ramo de Seguro *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full bg-elegant-bg border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-elegant-teal transition-colors"
                required
              >
                <option value="" disabled>Escolha um ramo...</option>
                {currentCategories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Modality (Dependent on Category) */}
            {formData.category && currentModalities.length > 0 && (
              <div>
                <label htmlFor="modality" className="block text-xs font-semibold text-gray-400 mb-1.5">
                  Modalidade / Produto (Opcional)
                </label>
                <select
                  id="modality"
                  name="modality"
                  value={formData.modality}
                  onChange={handleInputChange}
                  className="w-full bg-elegant-bg border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-elegant-teal transition-colors"
                >
                  <option value="">Todas as modalidades</option>
                  {currentModalities.map((mod) => (
                    <option key={mod.id} value={mod.id}>
                      {mod.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-gray-400 mb-1.5">
                Mensagem ou Requisitos Especiais (Opcional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="w-full bg-elegant-bg border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-elegant-teal transition-colors resize-none"
                placeholder="Indique capitais pretendidos, número de pessoas a segurar ou outras notas importantes..."
              />
            </div>

            <div className="pt-2 space-y-4">
              {/* Copy Button */}
              <button
                type="submit"
                className={`w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:-translate-y-0.5 ${
                  copied
                    ? 'bg-[#90BC0D] text-white shadow-green-950/20'
                    : formData.area === 'particular'
                    ? 'bg-elegant-teal hover:bg-elegant-teal/80 text-white shadow-teal-950/20'
                    : 'bg-[#33D9EC] hover:bg-[#57e3f2] text-slate-950 shadow-cyan-950/20'
                }`}
              >
                {copied ? (
                  <>
                    <DynamicIcon name="Check" size={16} />
                    <span>Dados Copiados! Prontos a enviar</span>
                  </>
                ) : (
                  <>
                    <DynamicIcon name="Copy" size={16} />
                    <span>Copiar dados para enviar</span>
                  </>
                )}
              </button>

              {copied && (
                <div className="p-3 bg-[#90BC0D]/10 border border-[#90BC0D]/20 text-[#90BC0D] rounded-lg text-[11px] text-center">
                  Dados copiados com sucesso! Clique num dos botões abaixo para colar a informação e falar connosco diretamente.
                </div>
              )}

              {/* Contact Divider */}
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-white/5"></div>
                <span className="flex-shrink mx-4 text-[10px] uppercase font-bold text-gray-500 tracking-wider">Enviar ou Ligar Diretamente</span>
                <div className="flex-grow border-t border-white/5"></div>
              </div>

              {/* Direct Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl text-xs font-bold transition-all shadow-md hover:-translate-y-0.5 text-center cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.455L0 24zm6.59-11.971c-.148-.247-.148-.495-.074-.742.074-.247.371-.495.618-.742.247-.247.495-.247.618-.247.124 0 .247 0 .371.074.124.074.247.247.371.495.124.371.371.865.371.989 0 .124-.074.247-.148.371-.074.124-.148.247-.247.371-.074.124-.148.247-.074.371.371.618.865 1.113 1.484 1.607.742.618 1.36.865 1.607.989.247.124.371.074.495-.074.124-.148.495-.618.618-.865.124-.247.247-.247.495-.124.247.124 1.484.742 1.731.865.247.124.371.247.433.371.074.124.074.742-.148 1.36-.247.618-1.237 1.237-1.731 1.237-.495 0-1.113-.124-3.216-.989-2.474-.989-4.08-3.585-4.204-3.71-.124-.124-.989-1.36-.989-2.597 0-1.237.618-1.855.865-2.102z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>

                {/* E-mail */}
                <a
                  href={emailUrl}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl text-xs font-bold transition-all shadow-md hover:-translate-y-0.5 text-center cursor-pointer"
                >
                  <DynamicIcon name="Mail" size={14} className="text-[#33D9EC] shrink-0" />
                  <span>E-mail</span>
                </a>

                {/* Call */}
                <a
                  href={phoneUrl}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl text-xs font-bold transition-all shadow-md hover:-translate-y-0.5 text-center cursor-pointer"
                >
                  <DynamicIcon name="Phone" size={14} className="text-elegant-teal shrink-0" />
                  <span>Ligar</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
