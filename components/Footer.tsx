import React from 'react';

const SocialIcon: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Column 1: About */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                           <span className="text-2xl font-bold text-white" style={{ fontFamily: "'Nunito', sans-serif" }}>Tráfego Elevado</span>
                        </div>
                        <p className="text-gray-400">Especializada em tráfego pago, transformamos seu investimento em vendas constantes.</p>
                    </div>

                    {/* Column 2: Navigation */}
                    <div>
                        <h4 className="font-semibold text-white tracking-wider">Navegação</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
                            <li><a href="#quem-somos" className="hover:text-white transition-colors">Quem somos</a></li>
                            <li><a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a></li>
                            <li><a href="#metodo" className="hover:text-white transition-colors">Método</a></li>
                            <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
                            <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h4 className="font-semibold text-white tracking-wider">Serviços</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#contato" className="hover:text-white transition-colors">Tráfego pago</a></li>
                            <li><a href="#contato" className="hover:text-white transition-colors">Landing pages</a></li>
                            <li><a href="#contato" className="hover:text-white transition-colors">Criativos</a></li>
                            <li><a href="#contato" className="hover:text-white transition-colors">Google Meu Negócio</a></li>
                            <li><a href="#contato" className="hover:text-white transition-colors">Consultorias</a></li>
                            <li><a href="#contato" className="hover:text-white transition-colors">Crescimento de Perfis</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="font-semibold text-white tracking-wider">Contato</h4>
                        <ul className="mt-4 space-y-3 text-gray-400">
                           <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                                trafegoelevado@gmail.com
                            </li>
                             <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                Slmb/GO
                            </li>
                        </ul>
                         <div className="mt-6 flex space-x-4">
                            <SocialIcon href="#">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </SocialIcon>
                            <SocialIcon href="#">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218 1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.05 4.39c.636-.247 1.363-.416 2.427.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm6.406-11.845a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd" /></svg>
                            </SocialIcon>
                         </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
                    <p>&copy; 2023 Tráfego Elevado. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;