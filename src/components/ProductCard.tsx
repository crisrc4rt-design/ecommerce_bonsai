import { Button } from "@/components/ui/button";

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

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const renderStars = (rating: number) => {
    return '⭐'.repeat(Math.floor(rating));
  };

  const getBadgeStyle = (badge: string) => {
    switch (badge.toLowerCase()) {
      case 'nuevo':
        return 'bg-primary text-primary-foreground';
      case 'destacado':
        return 'bg-matte-gold text-white';
      case 'descuento':
        return 'bg-terracotta text-white';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div 
      id={`product-${product.id}`}
      className="card bg-card border border-border/50 rounded-xl overflow-hidden shadow-zen-soft hover:shadow-zen-medium transition-zen hover:-translate-y-1"
      data-category={product.category}
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-zen hover:scale-105"
        />
        
        {product.badges && product.badges.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.badges.map((badge, index) => (
              <span 
                key={index}
                className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeStyle(badge)}`}
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="p-4">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
          {product.species}
        </p>
        
        <h3 className="font-semibold text-base mb-3 text-card-foreground leading-tight">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="text-sm">{renderStars(product.rating)}</div>
          <span className="text-xs text-muted-foreground">({product.rating})</span>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-primary">€{product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              €{product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <div className="text-xs text-muted-foreground mb-4 pt-3 border-t border-border/50">
          {product.careInstructions}
        </div>
        
        <Button 
          variant="zen" 
          size="sm" 
          className="w-full"
          onClick={() => onAddToCart(product)}
        >
          Añadir al Carrito
        </Button>
      </div>
    </div>
  );
};