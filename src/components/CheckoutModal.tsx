import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  total: number;
}

export const CheckoutModal = ({ isOpen, onClose, cart, total }: CheckoutModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: ''
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate order processing
    toast({
      title: "¡Pedido confirmado!",
      description: "Recibirás un email con los detalles del envío.",
    });
    
    onClose();
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postalCode: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-xl shadow-zen-strong w-full max-w-md max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Finalizar Pedido</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            ✕
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre completo *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Tu nombre completo"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="tu@email.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="+34 600 000 000"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Dirección *</Label>
            <Input
              id="address"
              required
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              placeholder="Calle, número, piso"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">Ciudad *</Label>
              <Input
                id="city"
                required
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                placeholder="Madrid"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="postalCode">Código Postal *</Label>
              <Input
                id="postalCode"
                required
                value={formData.postalCode}
                onChange={(e) => handleInputChange('postalCode', e.target.value)}
                placeholder="28001"
              />
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-4 mt-6">
            <h3 className="font-medium mb-3">Resumen del pedido</h3>
            <div className="space-y-2 text-sm">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span>{item.name} × {item.quantity}</span>
                  <span>€{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-2 mt-2 font-semibold flex justify-between">
              <span>Total:</span>
              <span>€{total.toFixed(2)}</span>
            </div>
          </div>

          <Button type="submit" variant="zen" size="lg" className="w-full mt-6">
            Confirmar Pedido
          </Button>
        </form>
      </div>
    </div>
  );
};