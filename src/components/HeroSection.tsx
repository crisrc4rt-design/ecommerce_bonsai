import { Button } from "@/components/ui/button";
import mountainBg from "@/assets/mountain-background.jpg";

export const HeroSection = () => {
  const smoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-hero-bg"
        style={{ 
          backgroundImage: `linear-gradient(rgba(44, 44, 44, 0.7), rgba(44, 44, 44, 0.7)), url(${mountainBg})` 
        }}
      />

      {/* Floating leaves animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute opacity-20 animate-pulse" style={{ left: '10%', top: '20%', animationDelay: '0s' }}>🍃</div>
        <div className="absolute opacity-20 animate-pulse" style={{ left: '80%', top: '30%', animationDelay: '2s' }}>🍃</div>
        <div className="absolute opacity-20 animate-pulse" style={{ left: '30%', top: '10%', animationDelay: '5s' }}>🍃</div>
      </div>

      <div className="container relative z-10 text-center text-white px-4 fade-in">
        <p className="text-soft-orange font-crimson text-xl mb-8">El Arte Milenario del Bonsái</p>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Encuentra la <span className="zen-gradient-text">Serenidad</span><br/>
          en Cada Rama
        </h1>
        
        <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-90 max-w-2xl mx-auto">
          Descubre nuestra colección única de bonsáis, donde cada árbol cuenta 
          una historia de paciencia, dedicación y armonía con la naturaleza.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            variant="zen-hero" 
            size="xl"
            onClick={() => smoothScroll('catalogo')}
            className="min-w-48"
          >
            Explorar Catálogo →
          </Button>
          <Button 
            variant="zen-ghost" 
            size="xl"
            onClick={() => smoothScroll('acerca')}
            className="min-w-48 text-white border-white/30 hover:bg-white hover:text-primary"
          >
            ▶ Nuestra Filosofía
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="slide-up" style={{ animationDelay: '0s' }}>
            <div className="text-2xl md:text-3xl font-bold text-matte-gold">500+</div>
            <div className="text-sm md:text-base text-white/80">Bonsáis Únicos</div>
          </div>
          <div className="slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-2xl md:text-3xl font-bold text-matte-gold">15+</div>
            <div className="text-sm md:text-base text-white/80">Especies Disponibles</div>
          </div>
          <div className="slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-2xl md:text-3xl font-bold text-matte-gold">98%</div>
            <div className="text-sm md:text-base text-white/80">Clientes Satisfechos</div>
          </div>
          <div className="slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-2xl md:text-3xl font-bold text-matte-gold">20+</div>
            <div className="text-sm md:text-base text-white/80">Años de Experiencia</div>
          </div>
        </div>
      </div>
    </section>
  );
};