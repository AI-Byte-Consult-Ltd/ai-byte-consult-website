import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CreditCard, Bitcoin, DollarSign, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface PaymentModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  amount: number;
}

const paymentMethods = [
  {
    id: "paypal",
    name: "PayPal",
    icon: DollarSign,
    description: "Pay with your PayPal account",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "stripe",
    name: "Stripe",
    icon: CreditCard,
    description: "Credit or debit card",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "coinbase",
    name: "Coinbase Commerce",
    icon: Bitcoin,
    description: "Pay with cryptocurrency",
    color: "from-orange-500 to-orange-600",
  },
];

const PaymentModal = ({ open, onClose, onSuccess, amount }: PaymentModalProps) => {
  const [selectedMethod, setSelectedMethod] = useState<string>("");
  const [processing, setProcessing] = useState(false);

  const handlePayment = async () => {
    if (!selectedMethod) {
      toast.error("Please select a payment method");
      return;
    }

    setProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      toast.success(`Payment via ${paymentMethods.find(m => m.id === selectedMethod)?.name} successful!`);
      onSuccess();
      setSelectedMethod("");
    }, 2000);

    // In production, this would integrate with actual payment APIs:
    // - PayPal SDK
    // - Stripe Checkout
    // - Coinbase Commerce API
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold gradient-text">
            Complete Your Order
          </DialogTitle>
          <DialogDescription className="text-lg">
            Choose your preferred payment method to proceed
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Amount Display */}
          <Card className="p-6 bg-gradient-to-r from-primary/20 to-purple-500/20 border-2 border-primary/50">
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold">Total Amount</span>
              <span className="text-4xl font-bold gradient-text">${amount}</span>
            </div>
          </Card>

          {/* Payment Methods */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold mb-4">Select Payment Method</h3>
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <Card
                  key={method.id}
                  className={`p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-neon ${
                    selectedMethod === method.id
                      ? "border-2 border-primary bg-primary/10"
                      : "bg-card/50"
                  }`}
                  onClick={() => setSelectedMethod(method.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${method.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg">{method.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {method.description}
                      </p>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full border-2 transition-all ${
                        selectedMethod === method.id
                          ? "border-primary bg-primary"
                          : "border-border"
                      }`}
                    >
                      {selectedMethod === method.id && (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full" />
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              onClick={onClose}
              disabled={processing}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handlePayment}
              disabled={!selectedMethod || processing}
              className="flex-1 gap-2"
              size="lg"
            >
              {processing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing...
                </>
              ) : (
                `Pay $${amount}`
              )}
            </Button>
          </div>

          {/* Security Note */}
          <p className="text-xs text-center text-muted-foreground pt-2">
            🔒 Secure payment powered by industry-leading encryption
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
