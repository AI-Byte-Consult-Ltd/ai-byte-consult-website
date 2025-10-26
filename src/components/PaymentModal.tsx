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
import { Input } from "@/components/ui/input";
import { Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface PaymentModalProps {
  open: boolean;
  onClose: () => void;
  config: {
    platform: string;
    llm: string;
    taskDescription: string;
    role: string;
    integration?: string;
  };
}

const BOT_TOKEN = "8008999736:AAFlKkISWAutFkpJEofsWBKpdT3sw6YJ49Y";
const CHAT_ID = "474339414";

const PaymentModal = ({ open, onClose, config }: PaymentModalProps) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [telegram, setTelegram] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async () => {
    if (!email && !phone && !telegram) {
      toast.error("Please enter at least one contact method.");
      return;
    }

    setSending(true);
    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          parse_mode: "Markdown",
          text: `🧠 *New AI Automation Request*\n\n📱 Platform: ${config.platform}\n🤖 Model: ${config.llm}\n🪄 Type: ${config.role}\n💬 Task: ${config.taskDescription}\n🔗 Integration: ${config.integration || "N/A"}\n\n📧 Email: ${email || "-"}\n📞 Phone: ${phone || "-"}\n💬 Telegram: ${telegram || "-"}\n\n📅 Date: ${new Date().toLocaleString()}`,
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");
      toast.success("✅ Your request has been sent! Our team will contact you soon.");
      onClose();
      setEmail("");
      setPhone("");
      setTelegram("");
    } catch (err) {
      console.error(err);
      toast.error("Failed to send request. Please try again later.");
    }
    setSending(false);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl glass-card">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold gradient-text text-center">
            Review & Submit Your Request
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground text-lg">
            Please check your configuration and provide your contact details so we can reach you.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Summary */}
          <Card className="p-6 bg-card/50">
            <ul className="space-y-2 text-base">
              <li>📱 <strong>Platform:</strong> {config.platform}</li>
              <li>🤖 <strong>AI Model:</strong> {config.llm}</li>
              <li>🪄 <strong>Automation Type:</strong> {config.role}</li>
              <li>💬 <strong>Task:</strong> {config.taskDescription}</li>
              {config.integration && (
                <li>🔗 <strong>Integration:</strong> {config.integration}</li>
              )}
            </ul>
          </Card>

          {/* Contact Inputs */}
          <Card className="p-6 bg-gradient-to-r from-primary/20 to-purple-500/20 border-2 border-primary/50">
            <h4 className="text-xl font-bold mb-4 text-center">Contact Information</h4>
            <p className="text-center text-muted-foreground mb-4">
              Please enter at least one method of contact:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Input
                placeholder="Telegram username"
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
              />
            </div>
          </Card>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between pt-6">
            <Button variant="outline" onClick={onClose} disabled={sending} className="flex-1">
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={sending}
              className="flex-1 gap-2 text-lg"
              size="lg"
            >
              {sending ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Check className="w-5 h-5" /> Submit Request
                </>
              )}
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground pt-2">
            🔒 Your contact info will be used only to respond to your request.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
