import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Home, Store, LayoutDashboard } from "lucide-react";
import { useEffect, useState } from "react";
import { getCart, getCartItemCount } from "@/utils/cart";

const Navbar = () => {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = getCart();
      setCartCount(getCartItemCount(cart));
    };

    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);
    return () => window.removeEventListener("cartUpdated", updateCartCount);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-2xl font-bold">F</span>
            </div>
            <span className="text-xl font-bold gradient-text">FutureStore</span>
          </Link>

          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={`flex items-center gap-2 transition-colors ${
                isActive("/")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Home size={20} />
              <span className="hidden sm:inline">Home</span>
            </Link>

            <Link
              to="/shop"
              className={`flex items-center gap-2 transition-colors ${
                isActive("/shop")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Store size={20} />
              <span className="hidden sm:inline">Shop</span>
            </Link>

            <Link
              to="/dashboard"
              className={`flex items-center gap-2 transition-colors ${
                isActive("/dashboard")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <LayoutDashboard size={20} />
              <span className="hidden sm:inline">Dashboard</span>
            </Link>

            <Link
              to="/cart"
              className={`flex items-center gap-2 relative transition-colors ${
                isActive("/cart")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
