import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SearchInput } from "./SearchInput";
import { CartSidebar } from "./CartSidebar";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  species: string;
  category: string;
}

interface NavigationProps {
  products: Product[];
  cart: Array<{ id: string; name: string; price: number; image: string; quantity: number }>;
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (index: number) => void;
}

export const Navigation = ({ products, cart, onAddToCart, onRemoveFromCart }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const smoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <button 
              onClick={() => smoothScroll('inicio')} 
              className="flex items-center gap-2 text-xl font-semibold text-foreground hover:text-primary transition-zen cursor-pointer"
            >
              <div className="w-8 h-8 bg-zen-gradient rounded-full flex items-center justify-center text-primary-foreground font-bold">
                禅
              </div>
              ZenBonsai
            </button>

            {/* Desktop Navigation */}
            <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''} hidden md:flex md:items-center md:gap-8`}>
              <li><button onClick={() => smoothScroll('inicio')} className="nav-link text-foreground hover:text-primary transition-zen">Inicio</button></li>
              <li><button onClick={() => smoothScroll('catalogo')} className="nav-link text-foreground hover:text-primary transition-zen">Catálogo</button></li>
              <li><button onClick={() => smoothScroll('guias')} className="nav-link text-foreground hover:text-primary transition-zen">Guías de Cuidado</button></li>
              <li><button onClick={() => smoothScroll('acerca')} className="nav-link text-foreground hover:text-primary transition-zen">Acerca de</button></li>
              <li><button onClick={() => smoothScroll('contacto')} className="nav-link text-foreground hover:text-primary transition-zen">Contacto</button></li>
            </ul>

            {/* Mobile Navigation */}
            <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''} fixed top-14 left-0 w-full bg-background flex-col p-4 shadow-zen-medium md:hidden ${mobileMenuOpen ? 'flex' : 'hidden'}`}>
              <li><button onClick={() => smoothScroll('inicio')} className="nav-link w-full text-left py-3 border-b border-border text-foreground hover:text-primary transition-zen">Inicio</button></li>
              <li><button onClick={() => smoothScroll('catalogo')} className="nav-link w-full text-left py-3 border-b border-border text-foreground hover:text-primary transition-zen">Catálogo</button></li>
              <li><button onClick={() => smoothScroll('guias')} className="nav-link w-full text-left py-3 border-b border-border text-foreground hover:text-primary transition-zen">Guías de Cuidado</button></li>
              <li><button onClick={() => smoothScroll('acerca')} className="nav-link w-full text-left py-3 border-b border-border text-foreground hover:text-primary transition-zen">Acerca de</button></li>
              <li><button onClick={() => smoothScroll('contacto')} className="nav-link w-full text-left py-3 text-foreground hover:text-primary transition-zen">Contacto</button></li>
            </ul>

            {/* Right side controls */}
            <div className="flex items-center gap-4">
              <SearchInput 
                products={products} 
                isOpen={searchOpen} 
                onToggle={() => setSearchOpen(!searchOpen)} 
              />
              
              <button 
                onClick={() => setCartOpen(true)}
                className="relative p-2 hover:bg-accent rounded-lg transition-zen" 
                title="Carrito"
              >
                🛒
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                ☰
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <CartSidebar 
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onRemoveFromCart={onRemoveFromCart}
      />
    </>
  );
};