
import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import { CartProvider } from '@/hooks/useCart';
import { products } from '@/data/products';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const featuredProducts = products.filter(product => product.featured);
  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory)
    : products;

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
  };

  return (
    <CartProvider>
      <div className="min-h-screen">
        <Header onCategorySelect={handleCategorySelect} selectedCategory={selectedCategory} />
        <Hero />
        <Categories onCategorySelect={handleCategorySelect} selectedCategory={selectedCategory} />
        {!selectedCategory && <ProductGrid products={featuredProducts} title="Featured Products" />}
        <ProductGrid 
          products={filteredProducts} 
          title={selectedCategory ? `${selectedCategory} Products` : "All Products"} 
        />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
