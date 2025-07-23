
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { categories } from '@/data/products';
import { useToast } from '@/hooks/use-toast';

interface CategoriesProps {
  onCategorySelect: (category: string | null) => void;
  selectedCategory: string | null;
}

const Categories = ({ onCategorySelect, selectedCategory }: CategoriesProps) => {
  const { toast } = useToast();

  const handleCategoryClick = (categoryName: string) => {
    onCategorySelect(categoryName);
    toast({
      title: "Category selected",
      description: `Showing ${categoryName} products`,
    });
  };

  const handleShowAll = () => {
    onCategorySelect(null);
    toast({
      title: "All products",
      description: "Showing all products",
    });
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Shop by Category</h2>
          <Button 
            variant={selectedCategory ? "outline" : "default"} 
            onClick={handleShowAll}
          >
            Show All
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Card 
              key={category.name} 
              className={`group hover:shadow-lg transition-shadow duration-300 cursor-pointer ${
                selectedCategory === category.name ? 'ring-2 ring-blue-500 bg-blue-50' : ''
              }`}
              onClick={() => handleCategoryClick(category.name)}
            >
              <CardContent className="p-4 text-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-24 object-cover rounded-md mb-3 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                <p className="text-xs text-gray-600">{category.count} items</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
