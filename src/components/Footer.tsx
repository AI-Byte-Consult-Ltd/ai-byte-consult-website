import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 border-t border-border/50">
      <div className="container mx-auto px-4">
        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI Byte Consult Ltd.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Intelligent Automation, Blockchain & Web3 Solutions — building the future of business technology within the NICS AI Ecosystem.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#ecosystem" className="text-muted-foreground hover:text-primary transition-colors">Ecosystem</a></li>
              <li><a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal + Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
            <div className="pt-4">
              <a
                href="mailto:info@aibyteconsult.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@aibyteconsult.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground">
            © 2011–{currentYear} AI Byte Consult Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
