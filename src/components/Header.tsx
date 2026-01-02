import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, Globe, Sparkles } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const languages: { code: Language; flag: string; name: string }[] = [
  { code: "en", flag: "🇬🇧", name: "English" },
  { code: "de", flag: "🇩🇪", name: "Deutsch" },
  { code: "fr", flag: "🇫🇷", name: "Français" },
  { code: "ar", flag: "🇸🇦", name: "العربية" },
  { code: "zh", flag: "🇨🇳", name: "中文" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();

  const currentLang = languages.find((l) => l.code === language);

  const navLinks = [
    { href: "#", label: t("nav.home") },
    { href: "#ecosystem", label: t("nav.ecosystem") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#ai-automation-fix", label: t("nav.automation") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50 overflow-hidden">
      {/* New Year Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Snowflakes */}
          <span className="absolute top-2 left-[5%] text-lg opacity-60 animate-pulse">❄️</span>
          <span className="absolute top-1 left-[15%] text-sm opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }}>✨</span>
          <span className="absolute top-3 left-[25%] text-xs opacity-50 animate-pulse" style={{ animationDelay: '1s' }}>❄️</span>
          <span className="absolute top-1 left-[35%] text-lg opacity-30 animate-pulse" style={{ animationDelay: '0.3s' }}>🎄</span>
          <span className="absolute top-2 left-[85%] text-sm opacity-50 animate-pulse" style={{ animationDelay: '0.7s' }}>❄️</span>
          <span className="absolute top-1 left-[75%] text-lg opacity-40 animate-pulse" style={{ animationDelay: '1.2s' }}>✨</span>
          <span className="absolute top-3 left-[95%] text-xs opacity-60 animate-pulse" style={{ animationDelay: '0.2s' }}>🎉</span>
          <span className="absolute top-2 right-[5%] text-sm opacity-50 animate-pulse" style={{ animationDelay: '0.9s' }}>🎊</span>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo with New Year badge */}
          <a href="#" className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            AI Byte Consult
            <span className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-background px-2 py-0.5 rounded-full font-semibold animate-pulse">
              2026
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="w-4 h-4" />
                  <span className="text-lg">{currentLang?.flag}</span>
                  <span className="hidden lg:inline">{currentLang?.name}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align={isRTL ? "start" : "end"}>
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`gap-2 cursor-pointer ${language === lang.code ? "bg-primary/10" : ""}`}
                    dir={lang.code === "ar" ? "rtl" : "ltr"}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <span className="text-xl">{currentLang?.flag}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align={isRTL ? "start" : "end"}>
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`gap-2 cursor-pointer ${language === lang.code ? "bg-primary/10" : ""}`}
                    dir={lang.code === "ar" ? "rtl" : "ltr"}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
