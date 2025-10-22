import { Bot, Globe, Hexagon, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ecosystems = [
  {
    icon: Bot,
    title: "NICS AI Ecosystem",
    description: "Multi-channel AI automations across Telegram, WhatsApp, and email. Streamline communication and boost efficiency.",
  },
  {
    icon: Globe,
    title: "AquaTerra World (Metaverse)",
    description: "Immersive 3D AI-driven environments for virtual collaboration and next-gen business experiences.",
  },
  {
    icon: Hexagon,
    title: "Pantheon of Eternals",
    description: "Intelligent NFT avatars with 33-trait metadata and speech capabilities. Blockchain meets artificial intelligence.",
  },
  {
    icon: Users,
    title: "PRIDE Social Network",
    description: "Web3-based social platform rewarding engagement with tokens. The future of decentralized community.",
  },
];

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive suite of AI-powered solutions for the modern business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {ecosystems.map((ecosystem, index) => {
            const Icon = ecosystem.icon;
            return (
              <Card 
                key={index}
                className="glass-card group hover:scale-105 transition-all duration-300 cursor-pointer border-primary/20 hover:border-primary/50"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:animate-float">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {ecosystem.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {ecosystem.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;