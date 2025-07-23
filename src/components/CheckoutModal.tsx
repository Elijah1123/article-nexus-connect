import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { X, CreditCard, Smartphone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/hooks/useCart';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  total: number;
}

const CheckoutModal = ({ isOpen, onClose, cartItems, total }: CheckoutModalProps) => {
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'card'>('mpesa');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const { clearCart } = useCart();

  const handleMpesaPayment = async () => {
    if (!phoneNumber) {
      toast({
        title: "Phone number required",
        description: "Please enter your M-Pesa phone number",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate M-Pesa payment process
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Payment Successful!",
        description: `M-Pesa payment of $${total.toFixed(2)} processed successfully`,
      });
      clearCart();
      onClose();
    }, 3000);
  };

  const handleCardPayment = () => {
    toast({
      title: "Feature Coming Soon",
      description: "Card payment integration will be available soon",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-60 flex items-center justify-center p-4">
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Checkout</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Order Summary */}
          <div>
            <h3 className="font-semibold mb-3">Order Summary</h3>
            <div className="space-y-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.name} x{item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <Separator className="my-3" />
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div>
            <h3 className="font-semibold mb-3">Payment Method</h3>
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant={paymentMethod === 'mpesa' ? 'default' : 'outline'}
                className="h-16 flex flex-col"
                onClick={() => setPaymentMethod('mpesa')}
              >
                <Smartphone className="h-6 w-6 mb-1" />
                <span className="text-xs">M-Pesa</span>
              </Button>
              <Button
                variant={paymentMethod === 'card' ? 'default' : 'outline'}
                className="h-16 flex flex-col"
                onClick={() => setPaymentMethod('card')}
              >
                <CreditCard className="h-6 w-6 mb-1" />
                <span className="text-xs">Card</span>
              </Button>
            </div>
          </div>

          {/* M-Pesa Payment Form */}
          {paymentMethod === 'mpesa' && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="phone">M-Pesa Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+254 7XX XXX XXX"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm text-green-700">
                  <strong>Instructions:</strong>
                  <br />
                  1. Enter your M-Pesa phone number
                  <br />
                  2. Click "Pay with M-Pesa"
                  <br />
                  3. Enter your M-Pesa PIN when prompted
                </p>
              </div>

              <Button
                className="w-full"
                onClick={handleMpesaPayment}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing M-Pesa Payment...</span>
                  </div>
                ) : (
                  `Pay $${total.toFixed(2)} with M-Pesa`
                )}
              </Button>
            </div>
          )}

          {/* Card Payment Form */}
          {paymentMethod === 'card' && (
            <div className="space-y-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-700">
                  Card payment integration coming soon. Please use M-Pesa for now.
                </p>
              </div>
              <Button
                className="w-full"
                variant="outline"
                onClick={handleCardPayment}
              >
                Pay with Card (Coming Soon)
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckoutModal;