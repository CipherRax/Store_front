import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
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

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  let filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "all" || product.category === selectedCategory;
    const minPriceMatch = !minPrice || product.price >= parseFloat(minPrice);
    const maxPriceMatch = !maxPrice || product.price <= parseFloat(maxPrice);
    return categoryMatch && minPriceMatch && maxPriceMatch;
  });

  // Sort products
  filteredProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  const handleClearFilters = () => {
    setSelectedCategory("all");
    setMinPrice("");
    setMaxPrice("");
    setSortBy("name");
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Shop All Products
        </h1>

        {/* Filter Controls */}
        <div className="glass-card rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
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

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent className="glass-card border-border">
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              onClick={handleClearFilters}
              className="border-border"
            >
              Clear All
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              No products found matching your filters.
            </p>
            <Button onClick={handleClearFilters} className="mt-4">
              Clear Filters
            </Button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Shop;
