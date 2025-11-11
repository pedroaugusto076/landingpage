import React, { useState } from 'react';

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Quem somos", href: "#quem-somos" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Método", href: "#metodo" },
    { name: "Serviços", href: "#servicos" },
    { name: "Depoimentos", href: "#depoimentos" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="#inicio" aria-label="Tráfego Elevado Home" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-800" style={{ fontFamily: "'Nunito', sans-serif" }}>Tráfego Elevado</span>
            </a>
          </div>
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-600 hover:text-brand-blue flex items-center">
                {link.name}
                {link.name === "Serviços" && <ChevronDownIcon className="w-4 h-4 ml-1" />}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <a href="#contato" className="px-5 py-2.5 text-sm font-medium text-white bg-brand-blue rounded-lg hover:bg-brand-dark-blue focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors">
              Entre em contato
            </a>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-brand-blue" aria-label="Abrir menu">
                <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
        {isMenuOpen && (
            <div className="lg:hidden pb-4">
                <nav className="flex flex-col space-y-4 items-center">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-gray-600 hover:text-brand-blue flex items-center" onClick={closeMenu}>
                            {link.name}
                            {link.name === "Serviços" && <ChevronDownIcon className="w-4 h-4 ml-1" />}
                        </a>
                    ))}
                    <a href="#contato" className="w-full text-center px-5 py-2.5 text-sm font-medium text-white bg-brand-blue rounded-lg hover:bg-brand-dark-blue focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors" onClick={closeMenu}>
                      Entre em contato
                    </a>
                </nav>
            </div>
        )}
      </div>
    </header>
  );
};

export default Header;