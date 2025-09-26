import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  const smoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="acerca" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <div className="flex items-center mb-8">
              <span className="text-matte-gold mr-2">🌸</span>
              <span className="text-matte-gold font-medium tracking-wider uppercase text-sm">
                Nuestra Filosofía
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              El <span className="zen-gradient-text">Camino</span> del Bonsái
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                En ZenBonsai, creemos que cada árbol es un maestro silencioso que nos enseña 
                sobre paciencia, dedicación y la belleza de lo imperfecto. Nuestro compromiso 
                va más allá de vender bonsáis; compartimos una filosofía de vida.
              </p>
              
              <p>
                Con más de 20 años de experiencia, hemos cultivado no solo árboles, sino 
                también relaciones profundas con artistas, coleccionistas y amantes de la 
                naturaleza de todo el mundo.
              </p>
              
              <p>
                Cada bonsái en nuestra colección ha sido seleccionado por maestros expertos 
                que comprenden el delicado equilibrio entre técnica tradicional y expresión artística.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                variant="zen" 
                size="lg"
                onClick={() => smoothScroll('catalogo')}
              >
                Explorar Colección
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => smoothScroll('contacto')}
              >
                Contáctanos
              </Button>
            </div>
          </div>

          <div className="slide-up">
            <div className="relative">
              <div className="bg-subtle-gradient p-8 rounded-2xl shadow-zen-medium">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Bonsáis Cuidados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Especies Raras</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">Satisfacción</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">20+</div>
                    <div className="text-sm text-muted-foreground">Años Experiencia</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-zen-gradient rounded-full flex items-center justify-center text-primary-foreground text-2xl shadow-zen-medium">
                🌸
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Nuestros Valores</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center slide-up" style={{ animationDelay: '0s' }}>
              <div className="w-20 h-20 bg-zen-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-zen-soft text-primary-foreground text-3xl">
                🧘
              </div>
              <h4 className="text-xl font-semibold mb-4">Mindfulness</h4>
              <p className="text-muted-foreground">
                Cada momento con tu bonsái es una oportunidad para practicar la presencia 
                y conectar con la naturaleza.
              </p>
            </div>
            
            <div className="text-center slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 bg-zen-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-zen-soft text-primary-foreground text-3xl">
                🎨
              </div>
              <h4 className="text-xl font-semibold mb-4">Artesanía</h4>
              <p className="text-muted-foreground">
                Respetamos las técnicas tradicionales mientras abrazamos la expresión 
                creativa personal de cada artista.
              </p>
            </div>
            
            <div className="text-center slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-20 h-20 bg-zen-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-zen-soft text-primary-foreground text-3xl">
                🤝
              </div>
              <h4 className="text-xl font-semibold mb-4">Comunidad</h4>
              <p className="text-muted-foreground">
                Creemos en compartir conocimiento y crear conexiones duraderas entre 
                los amantes del bonsái.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};