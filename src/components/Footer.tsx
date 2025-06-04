
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubscribe = () => {
    if (email.trim() && email.includes('@')) {
      toast({
        title: "Subscribed successfully!",
        description: `You'll receive updates at ${email}`,
      });
      setEmail('');
    } else {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
    }
  };

  const handleLinkClick = (linkName: string) => {
    toast({
      title: "Navigation",
      description: `Opening ${linkName} page...`,
    });
    // In a real app, these would navigate to actual pages
    console.log('Clicked link:', linkName);
  };

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
              <li>
                <button 
                  onClick={() => handleLinkClick('About Us')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('Contact')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('Shipping Info')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Shipping Info
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('Returns')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Returns
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => handleLinkClick('Help Center')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Help Center
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('Track Order')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Track Order
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('Warranty')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Warranty
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('Support')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Support
                </button>
              </li>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
              />
              <Button 
                size="sm" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={handleSubscribe}
              >
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
