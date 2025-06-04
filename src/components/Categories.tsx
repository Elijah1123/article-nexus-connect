
import { Card, CardContent } from '@/components/ui/card';
import { categories } from '@/data/products';

const Categories = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Card key={category.name} className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer">
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
