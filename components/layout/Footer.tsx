'use client';

import { Github, Linkedin, Globe, Mail, Heart } from 'lucide-react';
import { socialLinksData } from '@/lib/data/personal-info';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  website: Globe,
  email: Mail,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-3">Alperen Erdem</h3>
            <p className="text-sm text-muted-foreground">
              Full-Stack Developer & .NET Specialist
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-3">Hızlı Bağlantılar</h3>
            <nav className="flex flex-col gap-2">
              <a
                href="#about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Hakkımda
              </a>
              <a
                href="#experience"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Deneyim
              </a>
              <a
                href="#projects"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Projeler
              </a>
              <a
                href="#contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                İletişim
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold mb-3">Sosyal Medya</h3>
            <div className="flex gap-3 justify-center md:justify-end">
              {socialLinksData.map((link) => {
                const IconComponent = iconMap[link.platform];
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    aria-label={link.platform}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} Alperen Erdem. Tüm hakları saklıdır. Made with{' '}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
