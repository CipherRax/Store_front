import { useState } from "react";
import { Link } from "react-router-dom";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Laptop, Shirt, Dumbbell, Home as HomeIcon } from "lucide-react";

const categoryIcons: Record<string, any> = {
  Laptop,
  Shirt,
  Dumbbell,
  Home: HomeIcon,
};

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "all" || product.category === selectedCategory;
    const minPriceMatch = !minPrice || product.price >= parseFloat(minPrice);
    const maxPriceMatch = !maxPrice || product.price <= parseFloat(maxPrice);
    return categoryMatch && minPriceMatch && maxPriceMatch;
  });

  const handleClearFilters = () => {
    setSelectedCategory("all");
    setMinPrice("");
    setMaxPrice("");
  };

  const getCategoryCount = (categoryId: string) => {
    return products.filter((p) => p.category === categoryId).length;
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Welcome to the <span className="gradient-text">Future</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up">
          Experience next-generation shopping with cutting-edge products
        </p>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = categoryIcons[category.icon];
            return (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="glass-card rounded-xl p-8 text-center hover-lift group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center glow-effect">
                  <Icon size={32} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {getCategoryCount(category.id)} products
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-6 mb-8">
        <div className="glass-card rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent className="glass-card border-border">
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Input
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="glass-card border-border"
            />

            <Input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="glass-card border-border"
            />

            <Button
              variant="outline"
              onClick={handleClearFilters}
              className="border-border"
            >
              Clear Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-8">
          Featured Products{" "}
          <span className="text-muted-foreground text-lg">
            ({filteredProducts.length})
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
