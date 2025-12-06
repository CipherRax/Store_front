import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  getCart,
  updateCartItemQuantity,
  removeFromCart,
  clearCart,
  getCartTotal,
  CartItem,
} from "@/utils/cart";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadCart = () => setCart(getCart());
    loadCart();
    window.addEventListener("cartUpdated", loadCart);
    return () => window.removeEventListener("cartUpdated", loadCart);
  }, []);

  const subtotal = getCartTotal(cart);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + shipping;

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    updateCartItemQuantity(productId, newQuantity);
  };

  const handleRemove = (productId: string) => {
    removeFromCart(productId);
    toast.success("Item removed from cart");
  };

  const handleCheckout = () => {
    clearCart();
    toast.success("Order placed successfully! Thank you for your purchase.", {
      duration: 5000,
    });
    navigate("/");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full glass-card flex items-center justify-center">
            <ShoppingBag size={48} className="text-muted-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">
            Add some amazing products to get started!
          </p>
          <Link to="/shop">
            <Button className="gradient-primary">Start Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="glass-card rounded-xl p-6 flex gap-6"
              >
                <Link to={`/product/${item.id}`} className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                </Link>

                <div className="flex-1">
                  <Link to={`/product/${item.id}`}>
                    <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.category}
                  </p>
                  <p className="text-xl font-bold gradient-text">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemove(item.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 size={20} />
                  </Button>

                  <div className="flex items-center gap-3 glass-card rounded-lg p-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={16} />
                    </Button>
                    <span className="font-semibold w-8 text-center">
                      {item.quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                    >
                      <Plus size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="glass-card rounded-xl p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                </div>
                {shipping > 0 && (
                  <p className="text-sm text-accent">
                    Free shipping on orders over $100!
                  </p>
                )}
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="gradient-text">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Button
                className="w-full gradient-primary text-lg py-6"
                onClick={handleCheckout}
              >
                Checkout
              </Button>

              <Link to="/shop">
                <Button variant="outline" className="w-full mt-4">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
