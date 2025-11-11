import React from 'react';

const icons = {
    traffic: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    landingPage: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    creatives: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 15l4-4 4 4 6-6" /></svg>,
    googleMyBusiness: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    consulting: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    profileGrowth: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
};

const servicesData = [
    { title: "Tráfego pago", description: "Criação e otimização de campanhas em diferentes fontes de tráfego: Instagram, Facebook, Google, Tiktok entre outras.", icon: icons.traffic, color: "bg-blue-500" },
    { title: "Criação de landing pages", description: "Páginas de alta conversão desenvolvidas especificamente para suas campanhas.", icon: icons.landingPage, color: "bg-green-500" },
    { title: "Produção de criativos", description: "Imagens e vídeos profissionais para anúncios que convertem.", icon: icons.creatives, color: "bg-purple-500" },
    { title: "Google Meu Negócio", description: "Criação, edição e otimização para melhorar sua presença local e atrair mais clientes da sua região.", icon: icons.googleMyBusiness, color: "bg-orange-500" },
    { title: "Consultorias para empresários", description: "Orientação estratégica personalizada para o crescimento do seu negócio.", icon: icons.consulting, color: "bg-red-500" },
    { title: "Crescimento de perfis", description: "Aumente seu alcance e engajamento nas redes sociais.", icon: icons.profileGrowth, color: "bg-teal-500" },
];

const ServiceCard: React.FC<{ title: string; description: string; icon: React.ReactNode; color: string; }> = ({ title, description, icon, color }) => {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${color}`}>
                {icon}
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">{title}</h3>
            <p className="mt-2 text-gray-600 flex-grow">{description}</p>
            <a href="#contato" className="mt-6 font-semibold text-brand-blue hover:text-brand-dark-blue">
                Saiba mais &rarr;
            </a>
        </div>
    );
};


const Services: React.FC = () => {
    return (
        <section id="servicos" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Serviços</h2>
                    <div className="mt-4 w-24 h-1 bg-brand-blue mx-auto"></div>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Soluções completas para acelerar o crescimento do seu negócio</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <a href="#contato" className="inline-block px-10 py-4 text-lg font-medium text-white bg-brand-blue rounded-lg hover:bg-brand-dark-blue focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors">
                        Solicitar orçamento
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;