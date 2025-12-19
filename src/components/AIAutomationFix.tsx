import { Button } from "@/components/ui/button";
import { 
  Bot, 
  Zap, 
  FileText, 
  Headphones, 
  BrainCircuit,
  Globe,
  CheckCircle,
  Clock,
  ArrowRight
} from "lucide-react";

const AIAutomationFix = () => {
  const useCases = [
    { icon: Bot, title: "AI Lead Handler", desc: "Intake, qualification, routing" },
    { icon: Zap, title: "AI Sales Assistant", desc: "Prospect qualification & support" },
    { icon: FileText, title: "AI Content Engine", desc: "Automated content workflows" },
    { icon: Headphones, title: "AI Support Agent", desc: "24/7 customer assistance" },
    { icon: BrainCircuit, title: "AI Owner Assistant", desc: "Internal summaries & insights" },
  ];

  const languages = [
    { flag: "🇬🇧", name: "English", native: "" },
    { flag: "🇩🇪", name: "German", native: "Deutsch" },
    { flag: "🇫🇷", name: "French", native: "Français" },
    { flag: "🇸🇦", name: "Arabic", native: "العربية", rtl: true },
  ];

  const benefits = [
    "Reduced manual workload",
    "Faster lead and customer response times",
    "Improved operational efficiency",
    "Scalable AI-driven processes",
  ];

  const pricing = [
    { service: "Automation Audit", price: "€97" },
    { service: "Implementation", price: "€300–€1,200" },
    { service: "Monthly Support", price: "€50–€150" },
  ];

  const howItWorks = [
    "Discovery call to understand your workflow",
    "Identification of the highest-impact automation",
    "Build and deployment using AI, APIs, and automation platforms",
    "Delivery, documentation, and optional support",
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="ai-automation-fix" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              AI Automation Fix
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI-Powered Business Automation for Global Companies
          </p>
        </div>

        {/* Main Description */}
        <div className="glass-card p-8 md:p-12 rounded-2xl mb-12 animate-fade-in">
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            AI ByteConsult Ltd is a global technology company specializing in AI-powered business automation, 
            intelligent systems, and advanced workflow automation for companies across enterprise, hospitality, 
            healthcare, and service industries.
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed">
            Our flagship solution, <strong className="text-primary">AI Automation Fix</strong>, is designed to 
            automate one core business process quickly and efficiently, delivering measurable results within 
            <strong className="text-secondary"> 1–3 business days</strong>.
          </p>
        </div>

        {/* What's Included & Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* What's Included */}
          <div className="glass-card p-8 rounded-2xl animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              What's Included
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span>Quick automation audit (20–30 minutes)</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span>Automation of one high-impact business process</span>
              </li>
              <li className="flex items-start gap-3">
                <BrainCircuit className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span>AI-powered workflows and system integrations</span>
              </li>
              <li className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span>Documentation and optional ongoing support</span>
              </li>
            </ul>
          </div>

          {/* Business Benefits */}
          <div className="glass-card p-8 rounded-2xl animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
              <Zap className="w-6 h-6" />
              Business Benefits
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing */}
        <div className="glass-card p-8 rounded-2xl mb-12 animate-fade-in">
          <h3 className="text-2xl font-bold mb-6 text-center text-primary">Example Pricing</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((item, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <p className="text-muted-foreground mb-2">{item.service}</p>
                <p className="text-3xl font-bold text-secondary">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-12 animate-fade-in">
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">Typical Automation Use Cases</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-all duration-300 group"
              >
                <useCase.icon className="w-10 h-10 mx-auto mb-3 text-primary group-hover:text-secondary transition-colors" />
                <h4 className="font-semibold text-sm mb-1">{useCase.title}</h4>
                <p className="text-xs text-muted-foreground">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="glass-card p-8 rounded-2xl mb-12 animate-fade-in">
          <h3 className="text-2xl font-bold mb-6 text-center text-primary">How It Works</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-center gap-4 md:flex-col md:text-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-sm text-foreground/90">{step}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Multilingual Availability */}
        <div className="glass-card p-8 md:p-12 rounded-2xl mb-12 animate-fade-in border-2 border-primary/30">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Globe className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold text-primary">🌍 Multilingual Availability</h3>
          </div>
          <p className="text-center text-lg text-foreground/90 mb-8 max-w-3xl mx-auto">
            All pages of this website and all services, including AI Automation Fix, are fully available 
            in multiple languages to support international clients worldwide.
          </p>
          <h4 className="text-center text-lg font-semibold mb-6 text-secondary">
            Supported Languages Across the Entire Website:
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((lang, index) => (
              <div 
                key={index}
                className={`px-6 py-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 transition-all duration-300 ${lang.rtl ? 'text-right' : ''}`}
                dir={lang.rtl ? 'rtl' : 'ltr'}
              >
                <span className="text-2xl mr-2">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
                {lang.native && (
                  <span className="text-muted-foreground ml-2">({lang.native})</span>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Language selection is available site-wide and applies to every page.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to automate your business with AI?
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Book an automation audit or contact our team to get started.
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 neon-glow transition-all duration-300"
          >
            Get Started Now
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIAutomationFix;
