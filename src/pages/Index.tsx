import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProductCatalog } from "@/components/ProductCatalog";
import { GuidesSection } from "@/components/GuidesSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SupportChat } from "@/components/SupportChat";
import { useToast } from "@/hooks/use-toast";

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

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { toast } = useToast();

  // Import all product images
  const productData: Product[] = [
    {
      id: "1",
      name: "Ficus Retusa Clásico",
      species: "Ficus Retusa",
      price: 89.99,
      originalPrice: 119.99,
      image: "/src/assets/ficus.jpg",
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
      image: "/src/assets/acer-bonsai.jpg",
      category: "expertos",
      badges: ["Destacado", "Descuento"],
      rating: 4.9,
      careInstructions: "💧 Riego: 3-4 veces/semana • ☀️ Luz: Semisombra"
    },
    // ... otros productos
  ];

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1
        }];
      }
    });

    toast({
      title: "¡Producto añadido!",
      description: `${product.name} se añadió al carrito.`,
    });
  };

  const removeFromCart = (index: number) => {
    setCart(prevCart => {
      const newCart = [...prevCart];
      newCart.splice(index, 1);
      return newCart;
    });

    toast({
      title: "Producto eliminado",
      description: "El producto se eliminó del carrito.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        products={productData}
        cart={cart}
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
      />
      
      <HeroSection />
      
      <ProductCatalog onAddToCart={addToCart} />
      
      <GuidesSection />
      
      <AboutSection />
      
      <ContactSection />
      
      <Footer />
      
      <SupportChat />
    </div>
  );
};

export default Index;