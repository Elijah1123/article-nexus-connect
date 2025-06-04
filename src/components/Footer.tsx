
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">ElectroStore</h3>
            <p className="text-gray-300 mb-4">
              Your trusted destination for the latest electronics and technology gadgets.
            </p>
            <p className="text-gray-400 text-sm">
              © 2024 ElectroStore. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Returns</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Subscribe to get special offers and updates.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>Need help? Call us: 1-800-ELECTRO (1-800-353-2876)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
