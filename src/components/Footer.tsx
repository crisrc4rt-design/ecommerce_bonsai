export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const smoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-card text-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-zen-gradient rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                禅
              </div>
              <span className="font-semibold text-lg text-foreground">ZenBonsai</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Dedicados al arte milenario del bonsái, ofrecemos árboles auténticos 
              y el conocimiento para cuidarlos con amor y respeto.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://facebook.com/login" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-matte-gold hover:bg-matte-gold hover:text-white transition-zen">
                📘
              </a>
              <a href="https://instagram.com/accounts/login" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-matte-gold hover:bg-matte-gold hover:text-white transition-zen">
                📷
              </a>
              <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-matte-gold hover:bg-matte-gold hover:text-white transition-zen">
                🐦
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-matte-gold">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => smoothScroll('inicio')}
                  className="text-muted-foreground hover:text-matte-gold transition-zen text-sm"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => smoothScroll('catalogo')}
                  className="text-muted-foreground hover:text-matte-gold transition-zen text-sm"
                >
                  Catálogo
                </button>
              </li>
              <li>
                <button 
                  onClick={() => smoothScroll('guias')}
                  className="text-muted-foreground hover:text-matte-gold transition-zen text-sm"
                >
                  Guías de Cuidado
                </button>
              </li>
              <li>
                <button 
                  onClick={() => smoothScroll('acerca')}
                  className="text-muted-foreground hover:text-matte-gold transition-zen text-sm"
                >
                  Acerca de
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4 text-matte-gold">Atención al Cliente</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-matte-gold transition-zen text-sm">
                  Política de Envíos
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-matte-gold transition-zen text-sm">
                  Devoluciones
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-matte-gold transition-zen text-sm">
                  Garantía
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-matte-gold transition-zen text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-matte-gold">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <span>📧</span>
                <span className="text-muted-foreground">info@zenbonsai.es</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <span className="text-muted-foreground">+34 900 123 456</span>
              </div>
              <div className="flex items-start gap-2">
                <span>📍</span>
                <span className="text-muted-foreground">
                  Calle del Jardín Zen, 42<br/>
                  28001 Madrid, España
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} ZenBonsai. Todos los derechos reservados. Hecho con 🌿 para los amantes del bonsái.
          </p>
        </div>
      </div>
    </footer>
  );
};