import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  MessageSquare,
  Bot,
  Cpu,
  Zap,
  Database,
  ShoppingCart,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";

// Telegram configuration
const BOT_TOKEN = "8008999736:AAFlKkISWAutFkpJEofsWBKpdT3sw6YJ49Y";
const CHAT_ID = "474339414";

// --- Data ---
const platforms = [
  { id: "telegram", name: "Telegram", icon: "💬" },
  { id: "whatsapp", name: "WhatsApp", icon: "📱" },
  { id: "facebook", name: "Facebook Page", icon: "📘" },
  { id: "instagram", name: "Instagram DM", icon: "📸" },
  { id: "web", name: "Web Widget", icon: "🌐" },
  { id: "slack", name: "Slack", icon: "💼" },
  { id: "discord", name: "Discord", icon: "🎮" },
  { id: "email", name: "Email", icon: "📧" },
  { id: "api", name: "API Integration", icon: "🔌" },
  { id: "custom", name: "Custom Platform", icon: "⚙️" },
];

const llmModels = [
  { id: "gpt5", name: "OpenAI GPT-5", description: "Most advanced reasoning" },
  { id: "claude", name: "Anthropic Claude", description: "Long context specialist" },
  { id: "gemini", name: "Google Gemini", description: "Multimodal AI" },
  { id: "mistral", name: "Mistral", description: "Open-source power" },
  { id: "custom", name: "Custom Local Model", description: "Your own model" },
];

const automationRoles = [
  { id: "support", name: "Customer Support Agent", icon: "💬" },
  { id: "restaurant", name: "Restaurant Order Bot", icon: "🍽️" },
  { id: "reservation", name: "Reservation Assistant", icon: "📅" },
  { id: "scanner", name: "Document Scanner", icon: "📄" },
  { id: "voice", name: "Voice Assistant", icon: "🎤" },
  { id: "consultant", name: "Business Consultant", icon: "💼" },
  { id: "marketing", name: "Marketing Generator", icon: "📢" },
  { id: "hr", name: "HR Assistant", icon: "👥" },
  { id: "realestate", name: "Real Estate Bot", icon: "🏠" },
  { id: "travel", name: "Travel Booking Agent", icon: "✈️" },
  { id: "crypto", name: "Crypto Notifier", icon: "₿" },
  { id: "nft", name: "NFT Assistant", icon: "🎨" },
  { id: "tech", name: "Tech Support Bot", icon: "🛠️" },
  { id: "ecommerce", name: "E-commerce Assistant", icon: "🛒" },
  { id: "legal", name: "Legal Processor", icon: "⚖️" },
  { id: "logistics", name: "Logistics Tracker", icon: "📦" },
  { id: "tutor", name: "Language Tutor", icon: "📚" },
  { id: "health", name: "Health Assistant", icon: "🏥" },
  { id: "finance", name: "Finance Generator", icon: "💰" },
  { id: "workflow", name: "Workflow Builder", icon: "🔧" },
];

// --- Component ---
const AutomationConstructor = () => {
  const [step, setStep] = useState(1);
  const [config, setConfig] = useState({
    platform: "",
    llm: "",
    taskDescription: "",
    role: "",
    integration: "",
    email: "",
    phone: "",
    telegram: "",
  });

  // navigation
  const handleNext = () => {
    if (step === 1 && !config.platform) return toast.error("Please select a platform");
    if (step === 2 && !config.llm) return toast.error("Please select an AI model");
    if (step === 3 && !config.taskDescription.trim()) return toast.error("Please describe your task");
    if (step === 4 && !config.role) return toast.error("Please select automation type");
    if (step < 6) setStep(step + 1);
  };
  const handleBack = () => step > 1 && setStep(step - 1);

  // submit
  const handleSubmit = async () => {
    if (!config.email && !config.phone && !config.telegram)
      return toast.error("Please enter at least one contact method.");

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          parse_mode: "Markdown",
          text: `🧠 *New AI Automation Request*\n\n📱 Platform: ${
            platforms.find((p) => p.id === config.platform)?.name
          }\n🤖 Model: ${
            llmModels.find((m) => m.id === config.llm)?.name
          }\n🪄 Automation: ${
            automationRoles.find((r) => r.id === config.role)?.name
          }\n💬 Task: ${config.taskDescription}\n🔗 Integration: ${
            config.integration || "N/A"
          }\n\n📧 Email: ${config.email || "-"}\n📞 Phone: ${
            config.phone || "-"
          }\n💬 Telegram: ${config.telegram || "-"}\n\n📅 ${new Date().toLocaleString()}`,
        }),
      });
      toast.success("✅ Request sent successfully! We will contact you soon.");
      setStep(1);
      setConfig({
        platform: "",
        llm: "",
        taskDescription: "",
        role: "",
        integration: "",
        email: "",
        phone: "",
        telegram: "",
      });
    } catch (e) {
      console.error(e);
      toast.error("Failed to send request. Try again later.");
    }
  };

  // --- UI ---
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4 gradient-text">
            Automation Constructor
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Design your custom AI automation in minutes — choose your platform,
            model, and role.
          </p>
        </div>

        {/* Progress */}
        <div className="flex justify-between items-center mb-12 max-w-4xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                  s <= step
                    ? "bg-gradient-primary text-white shadow-neon"
                    : "bg-card border text-muted-foreground"
                }`}
              >
                {s < step ? <Check className="w-5 h-5" /> : s}
              </div>
              {s < 6 && (
                <div
                  className={`h-1 flex-1 mx-2 ${
                    s < step ? "bg-gradient-primary" : "bg-border"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="glass-card p-8 mb-8 min-h-[500px] animate-fade-in rounded-xl overflow-y-auto max-h-[90vh]">

          {/* Step 1 */}
          {step === 1 && (
            <>
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <MessageSquare className="w-8 h-8 text-primary" />
                Select Platform
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {platforms.map((p) => (
                  <Card
                    key={p.id}
                    className={`p-6 text-center cursor-pointer transition-all ${
                      config.platform === p.id
                        ? "bg-gradient-primary text-white border-primary"
                        : "bg-card/50"
                    }`}
                    onClick={() => setConfig({ ...config, platform: p.id })}
                  >
                    <div className="text-4xl mb-2">{p.icon}</div>
                    <div className="text-sm font-medium">{p.name}</div>
                  </Card>
                ))}
              </div>
            </>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <>
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Cpu className="w-8 h-8 text-primary" />
                Choose AI Model
              </h3>
              <div className="grid gap-4">
                {llmModels.map((m) => (
                  <Card
                    key={m.id}
                    className={`p-6 cursor-pointer transition-all ${
                      config.llm === m.id
                        ? "bg-gradient-primary border-primary text-white"
                        : "bg-card/50"
                    }`}
                    onClick={() => setConfig({ ...config, llm: m.id })}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-xl font-bold mb-1">{m.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {m.description}
                        </p>
                      </div>
                      <Bot className="w-8 h-8 text-primary" />
                    </div>
                  </Card>
                ))}
              </div>
            </>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <>
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-primary" />
                Define Your Task
              </h3>
              <Textarea
                placeholder="Describe what your automation should do..."
                className="min-h-[200px]"
                value={config.taskDescription}
                onChange={(e) =>
                  setConfig({ ...config, taskDescription: e.target.value })
                }
              />
            </>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <>
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-primary" />
                Select Automation Type
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-h-[400px] overflow-y-auto">
                {automationRoles.map((r) => (
                  <Card
                    key={r.id}
                    className={`p-4 text-center cursor-pointer transition-all ${
                      config.role === r.id
                        ? "bg-gradient-primary border-primary text-white"
                        : "bg-card/50"
                    }`}
                    onClick={() => setConfig({ ...config, role: r.id })}
                  >
                    <div className="text-3xl mb-2">{r.icon}</div>
                    <div className="text-sm">{r.name}</div>
                  </Card>
                ))}
              </div>
            </>
          )}

          {/* Step 5 */}
          {step === 5 && (
            <div className="animate-fade-in space-y-8">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Database className="w-8 h-8 text-primary" />
                Integration Setup
              </h3>

              <p className="text-muted-foreground max-w-3xl mb-4">
                Choose how your AI automation connects with external systems —
                databases, APIs, or webhooks. If you’re unsure, you can skip this step.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    id: "webhook",
                    icon: "🔗",
                    title: "Webhook",
                    desc: "Send results directly to a URL endpoint.",
                  },
                  {
                    id: "fastapi",
                    icon: "⚡",
                    title: "FastAPI",
                    desc: "Python-based API for deeper integrations.",
                  },
                  {
                    id: "postgresql",
                    icon: "🐘",
                    title: "PostgreSQL",
                    desc: "Secure database for structured AI data.",
                  },
                  {
                    id: "mysql",
                    icon: "🗄️",
                    title: "MySQL",
                    desc: "Fast relational DB for automations.",
                  },
                ].map((i) => (
                  <Card
                    key={i.id}
                    className={`p-5 text-center cursor-pointer transition-all hover:scale-105 hover:shadow-neon ${
                      config.integration === i.id
                        ? "bg-gradient-primary border-primary text-white"
                        : "bg-card/50"
                    }`}
                    onClick={() => setConfig({ ...config, integration: i.id })}
                  >
                    <div className="text-3xl mb-2">{i.icon}</div>
                    <h4 className="font-semibold mb-1">{i.title}</h4>
                    <p className="text-sm text-muted-foreground leading-snug">
                      {i.desc}
                    </p>
                  </Card>
                ))}
              </div>

              <div className="text-center pt-4">
                <Button
                  variant="secondary"
                  className="mt-4 px-6 text-base"
                  onClick={() =>
                    toast.info(
                      "You can skip this step — our team will help you select the right integration later."
                    )
                  }
                >
                  💡 Not sure? Choose later
                </Button>
              </div>
            </div>
          )}

          {/* Step 6 */}
          {step === 6 && (
            <div className="animate-fade-in space-y-6">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <ShoppingCart className="w-8 h-8 text-primary" />
                Review & Submit
              </h3>

              <Card className="p-6 bg-card/50">
                <ul className="space-y-2 text-lg">
                  <li>📱 Platform: {platforms.find(p => p.id === config.platform)?.name}</li>
                  <li>🤖 Model: {llmModels.find(m => m.id === config.llm)?.name}</li>
                  <li>🪄 Type: {automationRoles.find(r => r.id === config.role)?.name}</li>
                  <li>🔗 Integration: {config.integration || "N/A"}</li>
                  <li>💬 Task: {config.taskDescription}</li>
                </ul>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-primary/20 to-purple-500/20 border-primary/50 border-2">
                <h4 className="text-xl font-bold mb-4 text-center">
                  Contact Information
                </h4>
                <p className="text-center text-muted-foreground mb-4">
                  Please enter at least one way to reach you:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <Input
                    placeholder="Email"
                    value={config.email}
                    onChange={(e) =>
                      setConfig({ ...config, email: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Phone"
                    value={config.phone}
                    onChange={(e) =>
                      setConfig({ ...config, phone: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Telegram username"
                    value={config.telegram}
                    onChange={(e) =>
                      setConfig({ ...config, telegram: e.target.value })
                    }
                  />
                </div>
              </Card>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <Button variant="outline" onClick={handleBack} disabled={step === 1}>
            Back
          </Button>
          {step < 6 ? (
            <Button onClick={handleNext} className="gap-2">
              Next <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} size="lg" className="gap-2 px-8 text-lg">
              <Check className="w-5 h-5" /> Submit Order
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default AutomationConstructor;
