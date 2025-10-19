import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { 
  MessageSquare, Bot, Cpu, Zap, Database, Webhook, 
  ShoppingCart, Check, ArrowRight, Sparkles
} from "lucide-react";
import { toast } from "sonner";
import PaymentModal from "./PaymentModal";

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
  { id: "marketing", name: "Marketing Content Generator", icon: "📢" },
  { id: "hr", name: "HR Assistant", icon: "👥" },
  { id: "realestate", name: "Real Estate Lead Bot", icon: "🏠" },
  { id: "travel", name: "Travel Booking Agent", icon: "✈️" },
  { id: "crypto", name: "Crypto Wallet Notifier", icon: "₿" },
  { id: "nft", name: "NFT Minting Assistant", icon: "🎨" },
  { id: "tech", name: "Technical Support Bot", icon: "🛠️" },
  { id: "ecommerce", name: "E-commerce Sales Assistant", icon: "🛒" },
  { id: "legal", name: "Legal Form Processor", icon: "⚖️" },
  { id: "logistics", name: "Logistics Tracker", icon: "📦" },
  { id: "tutor", name: "Language Tutor", icon: "📚" },
  { id: "health", name: "Health Appointment Bot", icon: "🏥" },
  { id: "finance", name: "Financial Report Generator", icon: "💰" },
  { id: "workflow", name: "Custom Workflow Builder", icon: "🔧" },
];

const complexityLevels = [
  { value: 1, label: "Basic", price: 500, description: "Simple automation" },
  { value: 2, label: "Standard", price: 1500, description: "Multi-step workflows" },
  { value: 3, label: "Advanced", price: 3500, description: "Complex integrations" },
  { value: 4, label: "Enterprise", price: 7500, description: "Full-scale solution" },
];

const integrations = [
  { id: "webhook", name: "Webhook", icon: "🔗" },
  { id: "fastapi", name: "FastAPI", icon: "⚡" },
  { id: "postgresql", name: "PostgreSQL", icon: "🐘" },
  { id: "mysql", name: "MySQL", icon: "🗄️" },
];

const AutomationConstructor = () => {
  const [step, setStep] = useState(1);
  const [config, setConfig] = useState({
    platform: "",
    llm: "",
    taskDescription: "",
    role: "",
    complexity: 2,
    integration: "",
  });
  const [showPayment, setShowPayment] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const currentComplexity = complexityLevels[config.complexity - 1];

  const handleNext = () => {
    if (step === 1 && !config.platform) {
      toast.error("Please select a platform");
      return;
    }
    if (step === 2 && !config.llm) {
      toast.error("Please select an LLM model");
      return;
    }
    if (step === 3 && !config.taskDescription.trim()) {
      toast.error("Please describe your automation task");
      return;
    }
    if (step === 4 && !config.role) {
      toast.error("Please select an automation role");
      return;
    }
    if (step < 6) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleOrder = () => {
    setShowPayment(true);
  };

  const handlePaymentSuccess = () => {
    setShowPayment(false);
    setOrderConfirmed(true);
    
    // In a real implementation, this would send data to your backend/Telegram
    console.log("Order placed:", config);
    toast.success("Order received! We'll contact you soon.");
  };

  if (orderConfirmed) {
    return (
      <section className="py-20 px-6 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-4 gradient-text">Thank You!</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Your automation request has been received. Our team will contact you soon via Telegram.
          </p>
          <Button
            onClick={() => {
              setOrderConfirmed(false);
              setStep(1);
              setConfig({
                platform: "",
                llm: "",
                taskDescription: "",
                role: "",
                complexity: 2,
                integration: "",
              });
            }}
            className="gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Create Another Automation
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4 gradient-text">
            Automation Constructor
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Design your custom AI automation in minutes. Choose your platform, AI model, and functionality.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between items-center mb-12 max-w-4xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                  s <= step
                    ? "bg-gradient-primary text-white shadow-neon"
                    : "bg-card border-2 border-border text-muted-foreground"
                }`}
              >
                {s < step ? <Check className="w-5 h-5" /> : s}
              </div>
              {s < 6 && (
                <div
                  className={`h-1 flex-1 mx-2 transition-all duration-300 ${
                    s < step ? "bg-gradient-primary" : "bg-border"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="glass-card p-8 mb-8 min-h-[500px] animate-fade-in">
          {/* Step 1: Platform Selection */}
          {step === 1 && (
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <MessageSquare className="w-8 h-8 text-primary" />
                Select Platform
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {platforms.map((platform) => (
                  <Card
                    key={platform.id}
                    className={`p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-neon text-center ${
                      config.platform === platform.id
                        ? "bg-gradient-primary border-2 border-primary"
                        : "bg-card/50"
                    }`}
                    onClick={() => setConfig({ ...config, platform: platform.id })}
                  >
                    <div className="text-4xl mb-2">{platform.icon}</div>
                    <div className="text-sm font-medium">{platform.name}</div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: LLM Model */}
          {step === 2 && (
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Cpu className="w-8 h-8 text-primary" />
                Choose AI Model
              </h3>
              <div className="grid gap-4">
                {llmModels.map((model) => (
                  <Card
                    key={model.id}
                    className={`p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-neon ${
                      config.llm === model.id
                        ? "bg-gradient-primary border-2 border-primary"
                        : "bg-card/50"
                    }`}
                    onClick={() => setConfig({ ...config, llm: model.id })}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xl font-bold mb-1">{model.name}</h4>
                        <p className="text-sm text-muted-foreground">{model.description}</p>
                      </div>
                      <Bot className="w-8 h-8 text-primary" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Task Description */}
          {step === 3 && (
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-primary" />
                Define Your Task
              </h3>
              <p className="text-muted-foreground mb-6">
                Describe what you want your automation to do. Be as specific as possible.
              </p>
              <Textarea
                placeholder="E.g., 'Manage restaurant orders via WhatsApp, handle customer questions, send order confirmations, and track delivery status...'"
                className="min-h-[300px] text-lg"
                value={config.taskDescription}
                onChange={(e) =>
                  setConfig({ ...config, taskDescription: e.target.value })
                }
              />
              <p className="text-sm text-muted-foreground mt-2">
                {config.taskDescription.length} characters
              </p>
            </div>
          )}

          {/* Step 4: Automation Role */}
          {step === 4 && (
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-primary" />
                Select Automation Type
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-h-[400px] overflow-y-auto pr-2">
                {automationRoles.map((role) => (
                  <Card
                    key={role.id}
                    className={`p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-neon text-center ${
                      config.role === role.id
                        ? "bg-gradient-primary border-2 border-primary"
                        : "bg-card/50"
                    }`}
                    onClick={() => setConfig({ ...config, role: role.id })}
                  >
                    <div className="text-3xl mb-2">{role.icon}</div>
                    <div className="text-sm font-medium">{role.name}</div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Complexity & Integration */}
          {step === 5 && (
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Database className="w-8 h-8 text-primary" />
                Workflow Configuration
              </h3>
              
              <div className="mb-10">
                <h4 className="text-xl font-bold mb-4">Complexity Level</h4>
                <div className="mb-6">
                  <Slider
                    value={[config.complexity]}
                    onValueChange={(value) =>
                      setConfig({ ...config, complexity: value[0] })
                    }
                    min={1}
                    max={4}
                    step={1}
                    className="mb-4"
                  />
                </div>
                <Card className="p-6 bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/30">
                  <div className="flex justify-between items-center">
                    <div>
                      <h5 className="text-2xl font-bold gradient-text">
                        {currentComplexity.label}
                      </h5>
                      <p className="text-muted-foreground">
                        {currentComplexity.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold gradient-text">
                        ${currentComplexity.price}
                      </div>
                      <p className="text-sm text-muted-foreground">Estimated cost</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Webhook className="w-6 h-6 text-primary" />
                  Integration Type
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {integrations.map((integration) => (
                    <Card
                      key={integration.id}
                      className={`p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-neon text-center ${
                        config.integration === integration.id
                          ? "bg-gradient-primary border-2 border-primary"
                          : "bg-card/50"
                      }`}
                      onClick={() =>
                        setConfig({ ...config, integration: integration.id })
                      }
                    >
                      <div className="text-3xl mb-2">{integration.icon}</div>
                      <div className="text-sm font-medium">{integration.name}</div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 6: Preview & Order */}
          {step === 6 && (
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <ShoppingCart className="w-8 h-8 text-primary" />
                Review Your Configuration
              </h3>
              
              <div className="space-y-4 mb-8">
                <Card className="p-6 bg-card/50">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-bold text-muted-foreground mb-2">
                        Platform
                      </h4>
                      <p className="text-lg">
                        {platforms.find((p) => p.id === config.platform)?.name}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-muted-foreground mb-2">
                        AI Model
                      </h4>
                      <p className="text-lg">
                        {llmModels.find((m) => m.id === config.llm)?.name}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-muted-foreground mb-2">
                        Role
                      </h4>
                      <p className="text-lg">
                        {automationRoles.find((r) => r.id === config.role)?.name}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-muted-foreground mb-2">
                        Complexity
                      </h4>
                      <p className="text-lg">{currentComplexity.label}</p>
                    </div>
                    {config.integration && (
                      <div>
                        <h4 className="text-sm font-bold text-muted-foreground mb-2">
                          Integration
                        </h4>
                        <p className="text-lg">
                          {integrations.find((i) => i.id === config.integration)?.name}
                        </p>
                      </div>
                    )}
                  </div>
                </Card>

                <Card className="p-6 bg-card/50">
                  <h4 className="text-sm font-bold text-muted-foreground mb-2">
                    Task Description
                  </h4>
                  <p className="text-base leading-relaxed">{config.taskDescription}</p>
                </Card>

                <Card className="p-8 bg-gradient-to-r from-primary/20 to-purple-500/20 border-2 border-primary/50">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-2xl font-bold mb-2">Total Investment</h4>
                      <p className="text-muted-foreground">
                        Estimated delivery: 7-14 business days
                      </p>
                    </div>
                    <div className="text-5xl font-bold gradient-text">
                      ${currentComplexity.price}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={step === 1}
            className="gap-2"
          >
            Back
          </Button>

          {step < 6 ? (
            <Button onClick={handleNext} className="gap-2">
              Next
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button onClick={handleOrder} size="lg" className="gap-2 text-lg px-8">
              <ShoppingCart className="w-5 h-5" />
              Order Now
            </Button>
          )}
        </div>
      </div>

      <PaymentModal
        open={showPayment}
        onClose={() => setShowPayment(false)}
        onSuccess={handlePaymentSuccess}
        amount={currentComplexity.price}
      />
    </section>
  );
};

export default AutomationConstructor;
