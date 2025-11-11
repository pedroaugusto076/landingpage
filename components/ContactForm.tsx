import React, { useState } from 'react';

const PaperAirplaneIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);


const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        niche: '',
        objective: '',
        hasTeam: '',
        instagram: '',
        site: '',
        billing: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const targetPhoneNumber = "5564999442812"; // Número do WhatsApp da agência
        
        const message = `Olá! Gostaria de uma análise para o meu negócio.

*Nome:* ${formData.name}
*Empresa:* ${formData.company}
*Nicho do Negócio:* ${formData.niche}
*Qual seu objetivo com tráfego pago?:* ${formData.objective}
*Você tem equipe?:* ${formData.hasTeam}
*Qual o instagram a ser anunciado?:* ${formData.instagram}
*Possui site?:* ${formData.site || 'Não informado'}
*Qual seu faturamento médio mensal?:* ${formData.billing}
`;
        
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${targetPhoneNumber}?text=${encodedMessage}`;
        
        window.location.href = whatsappUrl;
    };

    return (
        <section id="contato" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Dê o impulso que o seu negócio precisa para crescer de verdade!</h2>
                    <div className="mt-4 w-24 h-1 bg-brand-blue mx-auto"></div>
                    <p className="mt-4 text-lg text-gray-600">Preencha o formulário abaixo e receba uma análise personalizada para o seu negócio. Quanto mais informações você fornecer, melhor poderemos te ajudar.</p>
                </div>
                
                <div className="max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-2xl">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome*</label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="Digite seu nome" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue" required />
                        </div>
                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Sua empresa*</label>
                            <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} placeholder="Digite o nome da sua empresa" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue" required />
                        </div>
                        <div>
                            <label htmlFor="niche" className="block text-sm font-medium text-gray-700 mb-1">Nicho do Negócio*</label>
                            <input type="text" name="niche" id="niche" value={formData.niche} onChange={handleChange} placeholder="Ex: Academia, Odontologia e etc" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue" required />
                        </div>
                         <div>
                            <label htmlFor="objective" className="block text-sm font-medium text-gray-700 mb-1">Qual seu objetivo com tráfego pago?*</label>
                            <select id="objective" name="objective" value={formData.objective} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue bg-white" required>
                                <option value="">Selecione uma opção</option>
                                <option>Aumentar vendas</option>
                                <option>Gerar leads</option>
                                <option>Aumentar visibilidade</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Você tem equipe?*</label>
                            <div className="flex items-center space-x-6">
                                <label className="flex items-center">
                                    <input type="radio" name="hasTeam" value="Sim" checked={formData.hasTeam === 'Sim'} onChange={handleChange} className="h-4 w-4 text-brand-blue border-gray-300 focus:ring-brand-blue" required />
                                    <span className="ml-2 text-gray-700">Sim</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="hasTeam" value="Não" checked={formData.hasTeam === 'Não'} onChange={handleChange} className="h-4 w-4 text-brand-blue border-gray-300 focus:ring-brand-blue" required />
                                    <span className="ml-2 text-gray-700">Não</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-1">Qual o instagram a ser anunciado?*</label>
                            <input type="text" name="instagram" id="instagram" value={formData.instagram} onChange={handleChange} placeholder="@seuinstagram" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue" required />
                        </div>
                        <div>
                            <label htmlFor="site" className="block text-sm font-medium text-gray-700 mb-1">Possui site?</label>
                            <input type="text" name="site" id="site" value={formData.site} onChange={handleChange} placeholder="www.seusite.com.br (opcional)" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue" />
                        </div>
                        <div>
                            <label htmlFor="billing" className="block text-sm font-medium text-gray-700 mb-1">Qual seu faturamento médio mensal?*</label>
                            <select id="billing" name="billing" value={formData.billing} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue bg-white" required>
                                <option value="">Selecione uma faixa</option>
                                <option>Até R$1.000</option>
                                <option>Até R$2.500</option>
                                <option>Até R$5.000</option>
                                <option>R$5.000 - R$10.000</option>
                                <option>R$10.000 - R$20.000</option>
                                <option>R$20.000 - R$30.000</option>
                                <option>Acima de R$30.000</option>
                            </select>
                        </div>
                        <button type="submit" className="w-full flex items-center justify-center px-6 py-4 text-base font-medium text-white bg-brand-blue rounded-lg hover:bg-brand-dark-blue focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors">
                            Enviar e receber análise
                            <PaperAirplaneIcon />
                        </button>
                        <p className="text-center text-xs text-gray-500">Seus dados estão seguros e serão usados apenas para contato comercial.</p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;