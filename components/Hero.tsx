import React from 'react';

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);


const Hero: React.FC = () => {
    const stats = [
        { value: "7x ROAS", label: "Retorno sobre investimento" },
        { value: "50+", label: "Clientes ativos" },
        { value: "3+", label: "Anos de experiência" }
    ];

    return (
        <section id="inicio" className="relative overflow-hidden py-20 md:py-32 bg-white">
            <div aria-hidden="true" className="absolute inset-0 -z-10">
                 <div className="absolute top-[-10rem] left-[-20rem] h-[40rem] w-[40rem] rounded-full bg-brand-blue/10 blur-3xl"></div>
                 <div className="absolute bottom-[-5rem] right-[-15rem] h-[30rem] w-[50rem] rounded-full bg-brand-green/10 blur-3xl"></div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                        Mais clientes, mais lucro e crescimento consistente para o seu negócio.
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                        Na Tráfego Elevado seu negócio vende mais, conquista clientes fiéis e multiplica os resultados do seu negócio.
                    </p>
                    <div className="mt-8">
                        <a href="#contato" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-brand-blue rounded-lg hover:bg-brand-dark-blue focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors">
                            Entre em contato
                            <ArrowRightIcon className="w-5 h-5 ml-2" />
                        </a>
                    </div>
                    <div className="mt-12 flex justify-center space-x-8 sm:space-x-12">
                        {stats.map((stat, index) => (
                            <div key={index}>
                                <p className="text-3xl font-bold text-brand-blue">{stat.value}</p>
                                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;