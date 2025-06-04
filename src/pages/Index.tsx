
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import { products } from '@/data/products';

const Index = () => {
  const featuredProducts = products.filter(product => product.featured);
  const allProducts = products;

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <ProductGrid products={featuredProducts} title="Featured Products" />
      <ProductGrid products={allProducts} title="All Products" />
      <Footer />
    </div>
  );
};

export default Index;
