import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft, Package } from "lucide-react";
import { addToCart } from "@/utils/cart";
import { toast } from "sonner";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/shop")}>Back to Shop</Button>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back
        </Button>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <div>
            <div className="glass-card rounded-xl overflow-hidden mb-4 aspect-square">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`glass-card rounded-lg overflow-hidden aspect-square transition-all ${
                    selectedImage === index
                      ? "ring-2 ring-primary"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <p className="text-sm text-accent uppercase tracking-wider mb-2">
              {product.category}
            </p>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-5xl font-bold gradient-text mb-6">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Specs */}
            <div className="glass-card rounded-xl p-6 mb-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Package size={20} />
                Specifications
              </h3>
              <ul className="space-y-2">
                {product.specs.map((spec, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-auto">
              <Button
                size="lg"
                className="flex-1 gradient-primary text-lg"
                onClick={handleAddToCart}
              >
                <ShoppingCart size={20} className="mr-2" />
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
