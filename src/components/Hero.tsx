
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleShopNow = () => {
    // Scroll to products section
    const productsSection = document.querySelector('[data-section="products"]');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewDeals = () => {
    // Scroll to featured products
    const featuredSection = document.querySelector('[data-section="featured"]');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Latest Electronics & Gadgets
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Discover cutting-edge technology at unbeatable prices. Free shipping, easy returns, and expert support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100"
            onClick={handleShopNow}
          >
            Shop Now
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-blue-600"
            onClick={handleViewDeals}
          >
            View Deals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
