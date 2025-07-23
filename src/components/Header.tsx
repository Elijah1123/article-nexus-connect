
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';

interface HeaderProps {
  onCategorySelect: (category: string | null) => void;
  selectedCategory: string | null;
}

const Header = ({ onCategorySelect, selectedCategory }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getCartCount } = useCart();
  const { toast } = useToast();

  const categories = ['Smartphones', 'Laptops', 'Headphones', 'Cameras', 'Gaming', 'Accessories'];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      toast({
        title: "Search functionality",
        description: `Searching for "${searchQuery}"...`,
      });
      // In a real app, this would trigger a search filter
      console.log('Searching for:', searchQuery);
    }
  };

  const handleCategoryClick = (category: string) => {
    onCategorySelect(category);
    toast({
      title: "Category filter",
      description: `Showing ${category} products`,
    });
    setIsMenuOpen(false);
  };

  const handleCartClick = () => {
    toast({
      title: "Shopping cart",
      description: `You have ${getCartCount()} items in your cart`,
    });
    // In a real app, this would open the cart sidebar/modal
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-sm py-2">
        <div className="container mx-auto px-4 text-center">
          Free shipping on orders over $99 | 24/7 Customer Support
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">ElectroStore</h1>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search for electronics..."
                className="w-full pl-4 pr-12 py-2 border rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <Button
                size="sm"
                className="absolute right-1 top-1 bottom-1 px-3"
                onClick={handleSearch}
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Button variant="outline" size="sm" className="relative" onClick={handleCartClick}>
              <ShoppingCart className="h-5 w-5" />
              {getCartCount() > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  {getCartCount()}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for electronics..."
              className="w-full pl-4 pr-12 py-2 border rounded-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Button
              size="sm"
              className="absolute right-1 top-1 bottom-1 px-3"
              onClick={handleSearch}
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`border-t ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-center space-y-2 md:space-y-0 md:space-x-8 py-4">
            <Button
              variant={selectedCategory === null ? "default" : "ghost"}
              className="justify-start md:justify-center hover:text-blue-600 hover:bg-blue-50"
              onClick={() => onCategorySelect(null)}
            >
              All Products
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                className="justify-start md:justify-center hover:text-blue-600 hover:bg-blue-50"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
