import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckoutModal } from "./CheckoutModal";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemoveFromCart: (index: number) => void;
}

export const CartSidebar = ({ isOpen, onClose, cart, onRemoveFromCart }: CartSidebarProps) => {
  const [showCheckout, setShowCheckout] = useState(false);

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    onClose();
    setShowCheckout(true);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-card shadow-zen-strong z-50 p-6 overflow-y-auto transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-border">
          <h2 className="text-xl font-semibold">Tu Carrito</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            ✕
          </Button>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <div className="text-4xl mb-4">🛒</div>
            <p>Tu carrito está vacío</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cart.map((item, index) => (
                <div key={`${item.id}-${index}`} className="flex gap-3 p-3 bg-muted/30 rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <p className="text-primary font-semibold">€{item.price.toFixed(2)} × {item.quantity}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onRemoveFromCart(index)}
                      className="text-destructive hover:text-destructive/90 p-0 h-auto"
                    >
                      Eliminar
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 mb-6">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span>€{total.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-3">
              <Button 
                variant="zen" 
                size="lg" 
                className="w-full"
                onClick={handleCheckout}
              >
                Proceder al Checkout
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full"
                onClick={onClose}
              >
                Continuar Comprando
              </Button>
            </div>
          </>
        )}
      </div>

      <CheckoutModal 
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        cart={cart}
        total={total}
      />
    </>
  );
};