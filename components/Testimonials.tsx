
import React from 'react';

const QuoteIcon: React.FC = () => (
    <svg className="w-12 h-12 text-blue-100" fill="currentColor" viewBox="0 0 32 32">
        <path d="M9.333 22.667h-4c-1.473 0-2.667-1.194-2.667-2.667v-8c0-1.473 1.194-2.667 2.667-2.667h4c1.473 0 2.667 1.194 2.667 2.667v8c0 1.473-1.194 2.667-2.667 2.667zM26.667 22.667h-4c-1.473 0-2.667-1.194-2.667-2.667v-8c0-1.473 1.194-2.667 2.667-2.667h4c1.473 0 2.667 1.194 2.667 2.667v8c0 1.473-1.194 2.667-2.667 2.667z" />
    </svg>
);

const StarIcon: React.FC<{ className: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);


const testimonialsData = [
    {
        quote: "Com o auxílio da equipe de tráfego pago conseguimos superar as metas de vendas da nossa equipe. Dessa forma, aumentamos nossas vendas e crescemos nossa equipe contratando mais pessoas.",
        author: "Carlos Menezes",
    },
    {
        quote: "Resultado já provado. Qualidade em atendimento e resolução dos problemas. Não importa dia ou hora, sempre disponíveis para atender e resolver.",
        author: "João Paulo",
    },
    {
        quote: "Excelentes pessoas para trabalhar, sempre que a gente precisou vocês estão prontos a esclarecer qualquer dúvida e sempre fazendo da melhor forma para todos.",
        author: "Fernanda Oliveira",
    },
];

const TestimonialCard: React.FC<{ quote: string; author: string; }> = ({ quote, author }) => {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col h-full">
            <QuoteIcon />
            <div className="flex my-4">
                {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
            </div>
            <p className="text-gray-600 flex-grow">"{quote}"</p>
            <p className="mt-6 font-bold text-gray-900">- {author}</p>
        </div>
    );
};


const Testimonials: React.FC = () => {
    return (
        <section id="depoimentos" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Depoimentos</h2>
                    <div className="mt-4 w-24 h-1 bg-brand-blue mx-auto"></div>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">O que nossos clientes dizem sobre nosso trabalho</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;