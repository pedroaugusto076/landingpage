import React from 'react';

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const CTA: React.FC = () => {
    const stats = [
        { value: "7x ROAS", label: "Retorno médio" },
        { value: "50+", label: "Clientes ativos" },
        { value: "3+", label: "Anos de experiência" }
    ];

    return (
        <section className="bg-brand-blue text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">Chegou a hora de transformar bom faturamento em crescimento explosivo.</h2>
                    <p className="mt-6 text-lg text-blue-200">Na Agência Tráfego Elevado, criamos estratégias personalizadas para transformar seu investimento em anúncios em vendas previsíveis e constantes.</p>
                    <div className="mt-10">
                        <a href="#contato" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-brand-blue bg-white rounded-lg hover:bg-gray-200 transition-colors">
                            Entre em contato
                            <ArrowRightIcon className="w-5 h-5 ml-2" />
                        </a>
                    </div>
                </div>
                <div className="mt-16 border-t border-blue-500 pt-12">
                     <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center bg-blue-700/50 p-6 rounded-xl w-48">
                                <p className="text-4xl font-bold">{stat.value}</p>
                                <p className="text-sm text-blue-200 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;