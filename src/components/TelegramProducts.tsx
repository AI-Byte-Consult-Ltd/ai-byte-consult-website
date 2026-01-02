import { MessageCircle, Bot, BrainCircuit, Sparkles, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TelegramProducts = () => {
  const { t } = useLanguage();

  const products = [
    {
      icon: MessageCircle,
      title: t("products.card.title"),
      subtitle: t("products.card.subtitle"),
      price: "€20",
      description: t("products.card.description"),
      features: [
        t("products.card.feature1"),
        t("products.card.feature2"),
        t("products.card.feature3"),
        t("products.card.feature4"),
      ],
      link: "https://revolut.me/your-link-1",
      gradient: "from-cyan-500 via-blue-500 to-purple-500",
      glowColor: "shadow-cyan-500/50",
    },
    {
      icon: Bot,
      title: t("products.bot.title"),
      subtitle: t("products.bot.subtitle"),
      price: "€50",
      description: t("products.bot.description"),
      features: [
        t("products.bot.feature1"),
        t("products.bot.feature2"),
        t("products.bot.feature3"),
        t("products.bot.feature4"),
      ],
      link: "https://revolut.me/your-link-2",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      glowColor: "shadow-purple-500/50",
    },
    {
      icon: BrainCircuit,
      title: t("products.ai.title"),
      subtitle: t("products.ai.subtitle"),
      price: "€100",
      description: t("products.ai.description"),
      features: [
        t("products.ai.feature1"),
        t("products.ai.feature2"),
        t("products.ai.feature3"),
        t("products.ai.feature4"),
      ],
      link: "https://revolut.me/your-link-3",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      glowColor: "shadow-emerald-500/50",
    },
  ];

  return (
    <section id="telegram-products" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t("products.badge")}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              {t("products.title")}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("products.subtitle")}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div className="relative h-full glass-card rounded-3xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} p-[1px] mb-6`}>
                  <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                    <product.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-1 text-foreground">{product.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{product.subtitle}</p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <span className={`text-4xl font-bold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                      {product.price}
                    </span>
                    <span className="text-muted-foreground ml-2">{t("products.oneTime")}</span>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3 text-sm text-foreground/70">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient} mt-2 flex-shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      group/btn relative w-full flex items-center justify-center gap-2 
                      px-6 py-4 rounded-xl font-semibold text-lg
                      bg-gradient-to-r ${product.gradient} 
                      text-white shadow-lg ${product.glowColor}
                      hover:shadow-xl hover:scale-[1.02] 
                      active:scale-[0.98]
                      transition-all duration-300
                    `}
                  >
                    {t("products.buyNow")}
                    <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground">
            {t("products.note")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TelegramProducts;
