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
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

// 🔗 Telegram Bot setup
const BOT_TOKEN = "8008999736:AAFlKkISWAutFkpJEofsWBKpdT3sw6YJ49Y";
const CHAT_ID = "474339414";

const platforms = [
  "Telegram", "WhatsApp", "Facebook", "Instagram", "Web Widget",
  "Slack", "Discord", "Email", "API Integration", "Custom Platform",
];

const aiModels = ["GPT-5", "Claude", "Mr. AI", "Gemini", "Mistral", "Perplexity", "Custom Model"];

const automationTypes = [
  "Customer Support Agent", "Restaurant Order Bot", "Reservation Assistant",
  "Business Consultant", "Voice Assistant", "Marketing Content Generator",
  "HR Assistant", "Real Estate Lead Bot", "Travel Booking Agent",
  "NFT Minting Assistant", "Crypto Wallet Notifier", "Technical Support Bot",
  "Ecommerce Manager", "Legal Form Processor", "Logistic Tracker",
  "Language Tutor", "Health Appointment Bot", "Financial Report Generator",
  "Customer Flow Builder", "Education / Online Tutor", "Hotel Concierge Bot",
  "Retail Sales Assistant", "Event Management Assistant", "Fitness & Nutrition Coach",
  "Medical Info Assistant", "Accounting & Billing Bot", "Law Office AI Clerk",
  "Construction Project Assistant", "Marketing Analyst",
];

const plans = [
  {
    id: "basic",
    name: "Basic",
    description: "Simple setup for one AI channel and model.",
    features: ["Single platform connection", "Basic AI workflow", "Email support"],
  },
  {
    id: "standard",
    name: "Standard",
    description: "Our recommended plan for most businesses.",
    features: [
      "Multi-platform automation",
      "2–3 AI models",
      "Smart workflow templates",
      "Priority Telegram & WhatsApp support",
    ],
    highlight: true,
  },
  {
    id: "premium",
    name: "Premium",
    description: "Full-scale AI ecosystem with advanced automations.",
    features: [
      "Unlimited platforms & models",
      "Custom AI workflows",
      "Dedicated AI consultant",
      "24/7 technical support",
    ],
  },
];

const PaymentModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [platform, setPlatform] = useState("");
  const [model, setModel] = useState("");
  const [task, setTask] = useState("");
  const [automationType, setAutomationType] = useState("");
  const [plan, setPlan] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!platform || !model || !task || !automationType || !plan) {
      toast.error("Please complete all steps before submitting.");
      return;
    }

    setSubmitting(true);
    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: `🧠 *New AI Agent Request*\n\n📱 Platform: ${platform}\n🤖 Model: ${model}\n🪄 Automation Type: ${automationType}\n💬 Task: ${task}\n⚙️ Selected Plan: ${plan}\n\nDate: ${new Date().toLocaleString()}`,
          parse_mode: "Markdown",
        }),
      });

      toast.success("✅ Thank you for your request! Our team will contact you shortly.");
      setStep(1);
      setPlatform("");
      setModel("");
      setTask("");
      setAutomationType("");
      setPlan("");
    } catch (err) {
      console.error(err);
      toast.error("Failed to send request. Please try again later.");
    }
    setSubmitting(false);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold gradient-text text-center">
            Build Your AI Automation
          </DialogTitle>
          <DialogDescription className="text-center text-lg">
            Step {step} of 5
          </DialogDescription>
        </DialogHeader>

        {/* Step 1 — Platform */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-center">1. Choose Platform</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {platforms.map((p) => (
                <Card
                  key={p}
                  className={`p-4 text-center cursor-pointer transition-all ${
                    platform === p ? "border-primary bg-primary/10" : "hover:shadow"
                  }`}
                  onClick={() => setPlatform(p)}
                >
                  {p}
                </Card>
              ))}
            </div>
            <div className="flex justify-end">
              <Button onClick={() => (platform ? setStep(2) : toast.error("Select a platform"))}>
                Next
              </Button>
            </div>
          </div>
        )}

        {/* Step 2 — Model */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-center">2. Choose AI Model</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {aiModels.map((m) => (
                <Card
                  key={m}
                  className={`p-4 text-center cursor-pointer transition-all ${
                    model === m ? "border-primary bg-primary/10" : "hover:shadow"
                  }`}
                  onClick={() => setModel(m)}
                >
                  {m}
                </Card>
              ))}
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button onClick={() => (model ? setStep(3) : toast.error("Select a model"))}>
                Next
              </Button>
            </div>
          </div>
        )}

        {/* Step 3 — Task */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-center">3. Define Your Task</h3>
            <Textarea
              placeholder="Describe what your AI agent should do..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(2)}>
                Back
              </Button>
              <Button onClick={() => (task ? setStep(4) : toast.error("Describe your task"))}>
                Next
              </Button>
            </div>
          </div>
        )}

        {/* Step 4 — Automation Type */}
        {step === 4 && (
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-center">4. Select Automation Type</h3>
            <div className="grid sm:grid-cols-2 gap-3 max-h-[280px] overflow-y-auto p-2 border rounded-lg">
              {automationTypes.map((t) => (
                <Card
                  key={t}
                  className={`p-3 cursor-pointer transition-all ${
                    automationType === t ? "border-primary bg-primary/10" : "hover:shadow"
                  }`}
                  onClick={() => setAutomationType(t)}
                >
                  {t}
                </Card>
              ))}
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(3)}>
                Back
              </Button>
              <Button
                onClick={() =>
                  automationType ? setStep(5) : toast.error("Select automation type")
                }
              >
                Next
              </Button>
            </div>
          </div>
        )}

        {/* Step 5 — Plan */}
        {step === 5 && (
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-center">5. Choose Configuration Plan</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {plans.map((p) => (
                <Card
                  key={p.id}
                  className={`p-6 text-center cursor-pointer relative transition-all ${
                    plan === p.name
                      ? "border-primary bg-primary/10 scale-[1.02]"
                      : "hover:shadow"
                  } ${p.highlight ? "ring-2 ring-primary/40" : ""}`}
                  onClick={() => setPlan(p.name)}
                >
                  {p.highlight && (
                    <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                      Recommended
                    </div>
                  )}
                  <h4 className="text-xl font-bold mb-2">{p.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{p.description}</p>
                  <ul className="text-sm space-y-1">
                    {p.features.map((f) => (
                      <li key={f}>• {f}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <Button variant="outline" onClick={() => setStep(4)}>
                Back
              </Button>
              <Button onClick={handleSubmit} disabled={submitting}>
                {submitting ? "Sending..." : "Send Request"}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;