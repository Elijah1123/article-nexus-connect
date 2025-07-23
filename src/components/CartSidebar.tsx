import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { useState } from 'react';
import CheckoutModal from './CheckoutModal';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  const { items: cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-lg z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-5 w-5" />
            <h2 className="font-semibold text-lg">Shopping Cart</h2>
            <Badge variant="secondary">{cartItems.length}</Badge>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingBag className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex space-x-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-sm mb-1">{item.name}</h3>
                        <p className="text-xs text-gray-500 mb-2">Electronics</p>
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-blue-600">${item.price}</span>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-6 w-6 p-0"
                              onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-6 w-6 p-0"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm text-gray-600">
                            Total: ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-500 hover:text-red-700"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <Separator />
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg">Total:</span>
              <span className="font-bold text-xl text-blue-600">${getCartTotal().toFixed(2)}</span>
            </div>
            <Button
              className="w-full"
              size="lg"
              onClick={() => setShowCheckout(true)}
            >
              Proceed to Checkout
            </Button>
          </div>
        )}
      </div>

      <CheckoutModal
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        cartItems={cartItems}
        total={getCartTotal()}
      />
    </>
  );
};

export default CartSidebar;