
import React from 'react';

const icons = {
    specialized: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    ),
    relationship: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    ),
    results: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
    )
};


const InfoCard: React.FC<{ icon: React.ReactNode; title: string; description: string; color: string }> = ({ icon, title, description, color }) => (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-start space-x-4 border border-gray-100">
        <div className={`flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center ${color}`}>
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-1 text-gray-600">{description}</p>
        </div>
    </div>
);

const AboutUs: React.FC = () => {
    return (
        <section id="quem-somos" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Quem somos</h2>
                    <div className="mt-4 w-24 h-1 bg-brand-blue mx-auto"></div>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4 text-gray-600 text-lg">
                        <p>A Tráfego Elevado existe para transformar investimentos em resultados concretos. Nosso foco é ajudar empresários a conquistar mais clientes, mais vendas e mais lucro através de estratégias de anúncios online inteligentes e personalizadas.</p>
                        <p>Com mais de 3 anos de experiência, entendemos de perto os desafios de quem administra um negócio. Falamos a mesma linguagem do empresário e sabemos que cada investimento precisa gerar retorno real.</p>
                        <p>Enquanto muitas agências tentam oferecer “um pouco de tudo” e acabam entregando resultados medianos, nós escolhemos um caminho diferente: somos especialistas em tráfego pago.</p>
                        <p>Essa especialização nos permite criar campanhas otimizadas, estratégicas e adaptadas à realidade do seu negócio, garantindo crescimento consistente e resultados que realmente fazem a diferença.</p>
                    </div>
                    <div className="space-y-6">
                        <InfoCard icon={icons.specialized} title="Foco especializado" description="Dedicação exclusiva ao tráfego pago para resultados superiores." color="bg-brand-blue" />
                        <InfoCard icon={icons.relationship} title="Relacionamento próximo" description="Atendimento direto e personalizado para cada cliente." color="bg-gray-800" />
                        <InfoCard icon={icons.results} title="Resultados comprovados" description="Média de 7x de retorno sobre o investimento para nossos clientes." color="bg-brand-green" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;