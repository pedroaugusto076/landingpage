import React from 'react';

const icons = {
    growth: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
    ),
    users: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    ),
    clock: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    campaigns: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    )
};

const statCards = [
    { value: "7x ROAS", label: "Retorno médio em anúncios", icon: icons.growth, color: 'blue' },
    { value: "50+", label: "Clientes ativos em diferentes segmentos", icon: icons.users, color: 'green' },
    { value: "10K+", label: "Horas usando os gerenciadores de anúncios", icon: icons.clock, color: 'purple' },
    { value: "2000+", label: "Campanhas de sucesso criadas", icon: icons.campaigns, color: 'orange' },
];

const colorClasses = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
    green: { bg: 'bg-green-100', text: 'text-green-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600' },
};

const Experience: React.FC = () => {
    return (
        <section id="experiencia" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Autoridade e experiência</h2>
                    <div className="mt-4 w-24 h-1 bg-brand-blue mx-auto"></div>
                </div>

<div className="items-center">
  <div className="space-y-4 text-gray-600 text-lg text-center max-w-3xl mx-auto">
    <p>
      Nossa equipe construiu sua experiência em tráfego pago colocando em prática o conteúdo de{" "}
      <a
        href="https://www.google.com/search?q=quem+%C3%A9+pedro+sobral"
        className="font-bold text-blue-600 underline hover:text-blue-800 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pedro Sobral
      </a>
      , referência máxima em anúncios online na América Latina. Ao longo dos anos, desenvolveu estratégias que ajudaram diversos negócios a aumentar vendas e consolidar presença digital.
    </p>
  </div>
</div>


                <div className="mt-20">
                    <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Alguns números que comprovam nossa experiência:</h3>
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {statCards.map((card, index) => {
                                const colors = colorClasses[card.color as keyof typeof colorClasses];
                                return (
                                    <div key={index} className={`${colors.bg} p-6 rounded-xl flex items-center space-x-4`}>
                                        <div className={`${colors.text}`}>
                                            {card.icon}
                                        </div>
                                        <div>
                                            <p className={`text-2xl font-bold ${colors.text}`}>{card.value}</p>
                                            <p className={`text-sm ${colors.text}`}>{card.label}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;