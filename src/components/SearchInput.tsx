import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  species: string;
  category: string;
}

interface SearchInputProps {
  products: Product[];
  isOpen: boolean;
  onToggle: () => void;
}

export const SearchInput = ({ products, isOpen, onToggle }: SearchInputProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onToggle();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onToggle]);

  const handleSearch = (value: string) => {
    setQuery(value);
    
    if (value.length < 2) {
      setResults([]);
      return;
    }

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(value.toLowerCase()) ||
      product.species.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filtered);
  };

  const handleResultClick = (product: Product) => {
    const productElement = document.getElementById(`product-${product.id}`);
    if (productElement) {
      productElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Highlight the product
      productElement.style.boxShadow = '0 0 0 3px hsl(var(--primary) / 0.3)';
      setTimeout(() => {
        productElement.style.boxShadow = '';
      }, 2000);
    }
    
    setQuery("");
    setResults([]);
    onToggle();
  };

  return (
    <div className="relative" ref={containerRef}>
      <Button
        variant="ghost"
        size="icon"
        onClick={onToggle}
        title="Buscar"
        className="rounded-lg"
      >
        🔍
      </Button>
      
      {isOpen && (
        <div className="absolute top-full right-0 w-72 md:w-80 bg-card border border-border rounded-lg shadow-zen-medium z-50 p-4">
          <input
            ref={inputRef}
            type="text"
            placeholder="Buscar bonsáis..."
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full p-3 border border-input rounded-md outline-none focus:ring-2 focus:ring-ring mb-3"
          />
          
          {results.length > 0 && (
            <div className="max-h-48 overflow-y-auto">
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleResultClick(product)}
                  className="p-3 border-b border-border last:border-b-0 cursor-pointer hover:bg-muted transition-zen"
                >
                  <div className="font-medium text-foreground">{product.name}</div>
                  <div className="text-sm text-muted-foreground">{product.species}</div>
                </div>
              ))}
            </div>
          )}
          
          {query.length >= 2 && results.length === 0 && (
            <div className="p-3 text-muted-foreground text-center">
              No se encontraron resultados
            </div>
          )}
        </div>
      )}
    </div>
  );
};