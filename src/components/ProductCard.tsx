import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { addToCart } from "@/utils/cart";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="glass-card rounded-xl overflow-hidden hover-lift group">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="p-5">
          <p className="text-xs text-accent uppercase tracking-wider mb-2">
            {product.category}
          </p>
          <h3 className="font-semibold text-lg mb-2 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold gradient-text">
              ${product.price.toFixed(2)}
            </span>
            <Button
              size="sm"
              className="gradient-primary"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={16} className="mr-2" />
              Add
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
