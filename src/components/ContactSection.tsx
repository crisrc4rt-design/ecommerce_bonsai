import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Te responderemos en las próximas 24 horas.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contacto" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <div className="flex items-center justify-center mb-8">
            <span className="text-matte-gold mr-2">💬</span>
            <span className="text-matte-gold font-medium tracking-wider uppercase text-sm">
              Contáctanos
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Comencemos una <span className="zen-gradient-text">Conversación</span>
          </h2>
          
          <p className="text-lg leading-relaxed text-muted-foreground">
            ¿Tienes preguntas sobre nuestros bonsáis o necesitas consejos de cuidado? 
            Estamos aquí para ayudarte en tu viaje zen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="slide-up">
            <div className="bg-card p-8 rounded-xl shadow-zen-soft border border-border/50">
              <h3 className="text-xl font-semibold mb-6">Envíanos un mensaje</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    placeholder="¿Sobre qué quieres hablar?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Comparte tus preguntas o comentarios..."
                  />
                </div>

                <Button type="submit" variant="zen" size="lg" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Información de contacto</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-zen-gradient rounded-lg flex items-center justify-center text-primary-foreground text-xl">
                      📧
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-muted-foreground">info@zenbonsai.es</p>
                      <p className="text-muted-foreground">soporte@zenbonsai.es</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-zen-gradient rounded-lg flex items-center justify-center text-primary-foreground text-xl">
                      📞
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Teléfono</h4>
                      <p className="text-muted-foreground">+34 900 123 456</p>
                      <p className="text-xs text-muted-foreground">Lun - Vie: 9:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-zen-gradient rounded-lg flex items-center justify-center text-primary-foreground text-xl">
                      📍
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Ubicación</h4>
                      <p className="text-muted-foreground">
                        Calle del Jardín Zen, 42<br />
                        28001 Madrid, España
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-zen-soft border border-border/50">
                <h4 className="font-semibold mb-4">Preguntas frecuentes</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-primary mb-1">¿Enviáis a toda España?</p>
                    <p className="text-muted-foreground">Sí, enviamos a toda la península. Envío gratuito desde €50.</p>
                  </div>
                  <div>
                    <p className="font-medium text-primary mb-1">¿Ofrecéis garantía?</p>
                    <p className="text-muted-foreground">30 días de garantía en todos los bonsáis.</p>
                  </div>
                  <div>
                    <p className="font-medium text-primary mb-1">¿Cursos presenciales?</p>
                    <p className="text-muted-foreground">Ofrecemos talleres mensuales en nuestro centro.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};