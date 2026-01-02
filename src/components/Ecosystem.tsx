import { Bot, Globe, Hexagon, Users, UtensilsCrossed, Mountain, Heart, PawPrint } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ecosystems = [
  {
    icon: Bot,
    title: "NICS AI Ecosystem",
    description:
      "NICS AI Ecosystem is a unified artificial intelligence and blockchain infrastructure designed to connect industries, automate workflows, and enable cross-platform data synchronization. It combines decentralized logic, neural APIs, and tokenized access to deliver secure, scalable, and intelligent solutions for businesses, developers, and global communities.",
  },
  {
    icon: UtensilsCrossed,
    title: "NICS AI HoReCa",
    description:
      "NICS AI HoReCa is an advanced AI automation platform for restaurants, bars, and cafés. It provides White Label solutions with voice-driven interaction, smart analytics, order automation, and adaptive AI agents. Integrated with POS, CRM, and payment systems, it streamlines hospitality operations and enhances customer experience through intelligent automation.",
  },
  {
    icon: Mountain,
    title: "NICS AI Geologist",
    description:
      "NICS AI Geologist is an analytical platform connecting geology, mining, and genealogy through intelligent data fusion. It processes exploration data, geological layers, and historical archives to identify resource potential and ancestral land correlations. The system supports sustainable exploration and digital heritage mapping with AI-powered insight.",
  },
  {
    icon: Globe,
    title: "AquaTerra World (Metaverse)",
    description:
      "AquaTerra World is an immersive AI-driven metaverse that unites virtual collaboration, entertainment, and business innovation. Within this 3D environment, users interact, learn, and trade using digital assets powered by AI and blockchain, creating a seamless connection between virtual experience and real-world economy.",
  },
  {
    icon: Hexagon,
    title: "Pantheon of Eternals",
    description:
      "Pantheon of Eternals AI is a revolutionary collection of interactive iNFT entities inspired by ancient mythology. Each Eternal—whether Zeus, Ra, or Odin—is reborn as an AI avatar with personality, dialogue, and adaptive learning. Merging divine archetypes with artificial intelligence, the Pantheon bridges storytelling, identity, and digital evolution.",
  },
  {
    icon: Users,
    title: "PRIDE Social Network",
    description:
      "PRIDE Social Network is a decentralized Web3 community platform that rewards creativity and engagement with native tokens. It empowers users to share ideas, art, and experiences while earning from their social activity, building an inclusive and self-sustaining digital ecosystem for expression and collaboration.",
  },
  {
    icon: Heart,
    title: "PRIDE Foundation",
    description:
      "PRIDE Foundation is a humanitarian initiative dedicated to supporting vulnerable communities and promoting social equity. Through blockchain-verified donations and transparent fund allocation, the foundation provides educational programs, healthcare assistance, and crisis relief. Every contribution is tracked on-chain, ensuring accountability and maximizing impact for those in need.",
  },
  {
    icon: PawPrint,
    title: "Animals Foundation",
    description:
      "Animals Foundation is a global animal welfare organization leveraging AI and blockchain for wildlife conservation and pet rescue operations. The foundation operates rescue shelters, funds veterinary care, and uses AI-powered tracking for endangered species protection. NFT-based adoption certificates and tokenized donations create a sustainable model for animal care worldwide.",
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
            A comprehensive suite of AI-powered solutions for the modern digital economy
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
