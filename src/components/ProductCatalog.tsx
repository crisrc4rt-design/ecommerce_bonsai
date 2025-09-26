import { useState, useMemo } from "react";
import { ProductCard } from "./ProductCard";

// Import the real bonsai images
import acerBonsaiImg from "@/assets/acer-bonsai.jpg";
import ficusImg from "@/assets/ficus.jpg";
import juniperForestImg from "@/assets/juniper-forest.webp";
import juniperFukinagashiImg from "@/assets/juniper-fukinagashi.webp";
import bonsaiToolsImg from "@/assets/bonsai-tools.webp";

interface Product {
  id: string;
  name: string;
  species: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badges?: string[];
  rating: number;
  careInstructions: string;
}

interface ProductCatalogProps {
  onAddToCart: (product: Product) => void;
}

export const ProductCatalog = ({ onAddToCart }: ProductCatalogProps) => {
  const [activeCategory, setActiveCategory] = useState("todos");

  const products: Product[] = [
    {
      id: "1",
      name: "Ficus Retusa Clásico",
      species: "Ficus Retusa",
      price: 89.99,
      originalPrice: 119.99,
      image: ficusImg,
      category: "principiantes",
      badges: ["Destacado", "Descuento"],
      rating: 4.8,
      careInstructions: "💧 Riego: 2-3 veces/semana • ☀️ Luz: Indirecta"
    },
    {
      id: "2",
      name: "Arce Japonés Rojo Premium",
      species: "Acer Palmatum",
      price: 234.00,
      originalPrice: 280.00,
      image: acerBonsaiImg,
      category: "expertos",
      badges: ["Destacado", "Descuento"],
      rating: 4.9,
      careInstructions: "💧 Riego: 3-4 veces/semana • ☀️ Luz: Semisombra"
    },
    {
      id: "3",
      name: "Bosque de Juníperos Miniatura",
      species: "Juniperus Procumbens",
      price: 345.50,
      image: juniperForestImg,
      category: "expertos",
      badges: ["Nuevo", "Destacado"],
      rating: 4.7,
      careInstructions: "💧 Riego: 2 veces/semana • ☀️ Luz: Sol directo"
    },
    {
      id: "4",
      name: "Junípero San José Fukinagashi",
      species: "Juniperus Chinensis",
      price: 189.99,
      image: juniperFukinagashiImg,
      category: "intermedios",
      badges: ["Nuevo"],
      rating: 4.6,
      careInstructions: "💧 Riego: 1-2 veces/semana • ☀️ Luz: Sol directo"
    },
    {
      id: "5",
      name: "Kit Herramientas Premium",
      species: "Kit Profesional",
      price: 67.50,
      image: bonsaiToolsImg,
      category: "herramientas",
      badges: ["Nuevo"],
      rating: 4.9,
      careInstructions: "✂️ Incluye: Tijeras, pinzas, rastrillo y alambre"
    },
    {
      id: "6",
      name: "Carmona Microphylla Inicio",
      species: "Carmona Retusa",
      price: 45.99,
      originalPrice: 65.00,
      image: ficusImg, // Using ficus as placeholder
      category: "principiantes",
      badges: ["Descuento"],
      rating: 4.4,
      careInstructions: "💧 Riego: 2 veces/semana • ☀️ Luz: Indirecta"
    },
    {
      id: "7",
      name: "Olmo Chino Tradicional",
      species: "Ulmus Parvifolia",
      price: 125.00,
      image: acerBonsaiImg, // Using acer as placeholder
      category: "intermedios",
      badges: ["Destacado"],
      rating: 4.5,
      careInstructions: "💧 Riego: 3 veces/semana • ☀️ Luz: Sol parcial"
    },
    {
      id: "8",
      name: "Serissa Phoetida Blanca",
      species: "Serissa Phoetida",
      price: 78.99,
      originalPrice: 95.00,
      image: juniperFukinagashiImg, // Using juniper as placeholder
      category: "intermedios",
      badges: ["Descuento"],
      rating: 4.3,
      careInstructions: "💧 Riego: Diario en verano • ☀️ Luz: Semisombra"
    },
    {
      id: "9",
      name: "Zelkova Serrata Shohin",
      species: "Zelkova Serrata",
      price: 156.50,
      image: juniperForestImg, // Using forest as placeholder
      category: "expertos",
      badges: ["Destacado"],
      rating: 4.8,
      careInstructions: "💧 Riego: 2-3 veces/semana • ☀️ Luz: Sol directo"
    },
    {
      id: "10",
      name: "Maceta Esmaltada Azul Cobalto",
      species: "Maceta Artesanal",
      price: 35.00,
      image: bonsaiToolsImg, // Using tools as placeholder
      category: "macetas",
      badges: [],
      rating: 4.6,
      careInstructions: "🏺 Tamaño: 15cm • Drenaje óptimo incluido"
    },
    {
      id: "11",
      name: "Pinus Thunbergii Maestro",
      species: "Pinus Thunbergii",
      price: 890.00,
      image: acerBonsaiImg,
      category: "expertos",
      badges: ["Destacado"],
      rating: 5.0,
      careInstructions: "💧 Riego: 1-2 veces/semana • ☀️ Luz: Sol pleno"
    },
    {
      id: "12",
      name: "Portulacaria Afra Jade",
      species: "Portulacaria Afra",
      price: 29.99,
      originalPrice: 42.00,
      image: ficusImg,
      category: "principiantes",
      badges: ["Descuento"],
      rating: 4.2,
      careInstructions: "💧 Riego: 1 vez/semana • ☀️ Luz: Sol directo"
    }
  ];

  const categories = [
    { id: "todos", label: "Todos" },
    { id: "principiantes", label: "Principiantes" },
    { id: "intermedios", label: "Intermedios" },
    { id: "expertos", label: "Expertos" },
    { id: "herramientas", label: "Herramientas" },
    { id: "macetas", label: "Macetas" }
  ];

  const filteredProducts = useMemo(() => {
    return activeCategory === "todos" 
      ? products 
      : products.filter(product => product.category === activeCategory);
  }, [activeCategory, products]);

  return (
    <section id="catalogo" className="py-16 bg-earth-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 fade-in">
          <div className="flex items-center justify-center mb-8">
            <span className="text-matte-gold mr-2">✨</span>
            <span className="text-matte-gold font-medium tracking-wider uppercase text-sm">
              Colección Destacada
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Maestros del <span className="zen-gradient-text">Tiempo</span>
          </h2>
          
          <p className="text-lg leading-relaxed text-muted-foreground">
            Cada bonsái en nuestra colección destacada ha sido cuidadosamente seleccionado 
            por nuestros expertos, representando décadas de dedicación y arte viviente.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-zen whitespace-nowrap ${
                activeCategory === category.id
                  ? 'bg-zen-gradient text-primary-foreground shadow-zen-soft'
                  : 'bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="product-grid mb-12">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard 
                product={product} 
                onAddToCart={onAddToCart}
              />
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center slide-up" style={{ animationDelay: '0s' }}>
            <div className="w-16 h-16 bg-zen-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-zen-soft text-primary-foreground text-2xl">
              🏆
            </div>
            <h3 className="text-xl font-semibold mb-3">Garantía de Calidad</h3>
            <p className="text-muted-foreground">Cada bonsái viene con certificado de autenticidad y garantía de 30 días.</p>
          </div>
          
          <div className="text-center slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-zen-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-zen-soft text-primary-foreground text-2xl">
              🌿
            </div>
            <h3 className="text-xl font-semibold mb-3">Cuidado Personalizado</h3>
            <p className="text-muted-foreground">Incluimos guías detalladas y soporte continuo para el cuidado óptimo.</p>
          </div>
          
          <div className="text-center slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-zen-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-zen-soft text-primary-foreground text-2xl">
              ✨
            </div>
            <h3 className="text-xl font-semibold mb-3">Selección Experta</h3>
            <p className="text-muted-foreground">Curados por maestros bonsaístas con más de 20 años de experiencia.</p>
          </div>
        </div>
      </div>
    </section>
  );
};