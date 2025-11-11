
import React from 'react';

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const methodData = [
    {
        step: 1,
        title: "Planejamento",
        items: [
            "Definição de objetivos e metas",
            "Estratégia baseada no orçamento",
            "Preparação da estrutura",
            "Compra de domínio, criação de site e hospedagem",
            "Cadastros em plataformas",
            "Organização de todos os ativos"
        ],
        color: "blue"
    },
    {
        step: 2,
        title: "Execução",
        items: [
            "Configuração de ferramentas e nomenclaturas",
            "Pixel, segmentações e públicos",
            "Criação de personas e criativos",
            "Campanhas em Meta Ads e Google Ads",
            "Relatórios iniciais de métricas e resultados"
        ],
        color: "green"
    },
    {
        step: 3,
        title: "Otimização",
        items: [
            "Análise constante de resultados",
            "Ajustes de orçamento, públicos e criativos",
            "Testes de estrutura de campanhas",
            "Rotinas e processos de melhoria contínua"
        ],
        color: "purple"
    },
    {
        step: 4,
        title: "Acompanhamento",
        items: [
            "Transparência total",
            "Suporte rápido",
            "Reuniões periódicas",
            "Feedback e pesquisas de satisfação (NPS)"
        ],
        color: "orange"
    }
];

const colorClasses = {
    blue: { bg: 'bg-brand-light-blue', text: 'text-brand-blue' },
    green: { bg: 'bg-brand-light-green', text: 'text-brand-green' },
    purple: { bg: 'bg-brand-light-purple', text: 'text-brand-purple' },
    orange: { bg: 'bg-brand-light-orange', text: 'text-brand-orange' },
};

const MethodCard: React.FC<{ step: number; title: string; items: string[]; color: keyof typeof colorClasses }> = ({ step, title, items, color }) => {
    const colors = colorClasses[color];
    return (
        <div className={`p-8 rounded-2xl shadow-lg h-full ${colors.bg}`}>
            <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl text-white bg-${color}-500`}>
                   {step}
                </div>
                <h3 className={`text-2xl font-bold ${colors.text}`}>{title}</h3>
            </div>
            <ul className="mt-6 space-y-3">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start">
                        <CheckIcon />
                        <span className="ml-3 text-gray-700">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Method: React.FC = () => {
    return (
        <section id="metodo" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Método Tráfego Elevado</h2>
                    <div className="mt-4 w-24 h-1 bg-brand-blue mx-auto"></div>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Nosso método é baseado em 4 pilares que garantem campanhas eficientes.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {methodData.map(data => (
                         <MethodCard key={data.step} {...data} color={data.color as keyof typeof colorClasses} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Method;