import { useState } from "react";

interface Guide {
  id: string;
  title: string;
  description: string;
  content: string;
  icon: string;
}

export const GuidesSection = () => {
  const [activeGuide, setActiveGuide] = useState<string | null>(null);

  const guides: Guide[] = [
    {
      id: "riego",
      title: "Guía Completa de Riego",
      description: "Aprende cuándo y cómo regar tu bonsái según la especie y estación",
      icon: "💧",
      content: `
        <p>El riego es uno de los aspectos más importantes en el cuidado del bonsái. La frecuencia depende de varios factores:</p>
        <ul class="my-4 pl-6 space-y-2">
          <li>• Especie del árbol</li>
          <li>• Tamaño de la maceta</li>
          <li>• Época del año</li>
          <li>• Humedad ambiental</li>
        </ul>
        <p><strong>Consejo:</strong> Introduce un palillo en la tierra para comprobar la humedad antes de regar.</p>
      `
    },
    {
      id: "poda",
      title: "Técnicas de Poda",
      description: "Domina el arte de la poda para dar forma y mantener la salud de tu árbol",
      icon: "✂️",
      content: `
        <p>La poda es esencial para mantener la forma deseada y promover un crecimiento saludable:</p>
        <ul class="my-4 pl-6 space-y-2">
          <li>• <strong>Poda de mantenimiento:</strong> Eliminar ramas muertas o enfermas</li>
          <li>• <strong>Poda de formación:</strong> Dar forma al árbol según el estilo deseado</li>
          <li>• <strong>Poda de raíces:</strong> Realizar durante el trasplante para mantener el equilibrio</li>
        </ul>
        <p><strong>Mejor época:</strong> Primavera temprana, antes del crecimiento activo.</p>
      `
    },
    {
      id: "trasplante",
      title: "Trasplante y Sustrato",
      description: "Cuándo y cómo trasplantar tu bonsái para un crecimiento óptimo",
      icon: "🏺",
      content: `
        <p>El trasplante renueva el sustrato y controla el crecimiento de las raíces:</p>
        <ul class="my-4 pl-6 space-y-2">
          <li>• <strong>Frecuencia:</strong> Cada 1-3 años según la edad y especie</li>
          <li>• <strong>Mejor época:</strong> Final del invierno o principios de primavera</li>
          <li>• <strong>Sustrato:</strong> Mezcla drenante de akadama, pumice y grava volcánica</li>
        </ul>
        <p><strong>Señales:</strong> Agua que no drena bien, raíces saliendo por los agujeros de drenaje.</p>
      `
    },
    {
      id: "ubicacion",
      title: "Ubicación e Iluminación",
      description: "Encuentra el lugar perfecto para tu bonsái en casa",
      icon: "☀️",
      content: `
        <p>La ubicación correcta es fundamental para la salud de tu bonsái:</p>
        <ul class="my-4 pl-6 space-y-2">
          <li>• <strong>Exterior vs Interior:</strong> La mayoría prefieren exterior</li>
          <li>• <strong>Luz solar:</strong> Mínimo 4-6 horas de luz directa</li>
          <li>• <strong>Protección:</strong> Evitar vientos fuertes y heladas extremas</li>
          <li>• <strong>Rotación:</strong> Girar regularmente para crecimiento uniforme</li>
        </ul>
        <p><strong>Tip:</strong> Observa las hojas - amarillean si hay exceso o falta de luz.</p>
      `
    },
    {
      id: "plagas",
      title: "Prevención de Plagas",
      description: "Mantén tu bonsái saludable y libre de enfermedades",
      icon: "🛡️",
      content: `
        <p>La prevención es clave para mantener un bonsái saludable:</p>
        <ul class="my-4 pl-6 space-y-2">
          <li>• <strong>Inspección regular:</strong> Revisa hojas y ramas semanalmente</li>
          <li>• <strong>Higiene:</strong> Limpia herramientas entre usos</li>
          <li>• <strong>Ventilación:</strong> Asegura buena circulación de aire</li>
          <li>• <strong>Tratamientos preventivos:</strong> Aceite de neem mensual</li>
        </ul>
        <p><strong>Plagas comunes:</strong> Ácaros, pulgones, cochinillas - actúa rápido si aparecen.</p>
      `
    }
  ];

  const toggleGuide = (guideId: string) => {
    setActiveGuide(activeGuide === guideId ? null : guideId);
  };

  return (
    <section id="guias" className="py-16 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 fade-in">
          <div className="flex items-center justify-center mb-8">
            <span className="text-matte-gold mr-2">📚</span>
            <span className="text-matte-gold font-medium tracking-wider uppercase text-sm">
              Guías de Cuidado
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Aprende el <span className="zen-gradient-text">Arte</span> del Bonsái
          </h2>
          
          <p className="text-lg leading-relaxed text-muted-foreground">
            Descubre nuestras guías expertas para cuidar tu bonsái y mantenerlo saludable durante años.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {guides.map((guide, index) => (
            <div 
              key={guide.id}
              className="bg-card border border-border/50 rounded-xl shadow-zen-soft overflow-hidden slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleGuide(guide.id)}
                className="w-full p-6 text-left hover:bg-muted/30 transition-zen focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{guide.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{guide.title}</h3>
                      <p className="text-muted-foreground text-sm">{guide.description}</p>
                    </div>
                  </div>
                  <span 
                    className={`text-xl transition-transform duration-300 ${
                      activeGuide === guide.id ? 'rotate-180' : ''
                    }`}
                  >
                    ▼
                  </span>
                </div>
              </button>
              
              {activeGuide === guide.id && (
                <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
                  <div 
                    className="text-muted-foreground leading-relaxed prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: guide.content }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};