
"use client";

import Link from 'next/link';
import { Code2, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';

const mainNavItems = [
  { label: 'Home', href: '#home' },
  { label: 'Chi sono', href: '#about' },
  { label: 'Progetti', href: '#projects' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const sectionRefs = useRef<Map<string, HTMLElement | null>>(new Map());

  const handleNavLinkClick = useCallback((href: string) => {
    setActiveHash(href);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      if (observer.current) {
        observer.current.disconnect();
      }
      setTimeout(() => {
        observeSections(); 
      }, 1000); 
    }
  }, []);

  const handleLogoClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    handleNavLinkClick('#home');
  }, [handleNavLinkClick]);

  const observeSections = useCallback(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver(
      (entries) => {
        let currentBestMatch: IntersectionObserverEntry | null = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!currentBestMatch || entry.boundingClientRect.top < currentBestMatch.boundingClientRect.top) {
              currentBestMatch = entry;
            }
          }
        });
        if (currentBestMatch) {
          const newHash = `#${currentBestMatch.target.id}`;
          if (activeHash !== newHash) {
             setActiveHash(newHash);
          }
        } else if (window.scrollY < 200 && pathname ==='/') { 
            setActiveHash('#home');
        }
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0.1 } 
    );

    mainNavItems.forEach((item) => {
      const id = item.href.substring(1);
      const element = document.getElementById(id);
      sectionRefs.current.set(id, element);
      if (element && observer.current) {
        observer.current.observe(element);
      }
    });
  }, [activeHash, pathname]);

  useEffect(() => {
    const currentHash = window.location.hash;
    if (currentHash) {
      setActiveHash(currentHash);
    } else if (pathname === '/') {
      setActiveHash('#home');
    }

    observeSections();

    const handleScroll = () => {
        if (window.scrollY < 100 && pathname === '/' && !window.location.hash) {
            setActiveHash('#home');
        }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', () => {
        setActiveHash(window.location.hash || (pathname === '/' ? '#home' : ''));
    });


    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', () => {
        setActiveHash(window.location.hash || (pathname === '/' ? '#home' : ''));
      });
    };
  }, [pathname, observeSections]);

  return (
    <header className="sticky top-0 z-50 mt-4 mx-24 rounded-full border border-border/40 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" onClick={handleLogoClick} className="flex items-center space-x-2 hover:opacity-75 transition-opacity duration-200" data-interactive>
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg text-foreground">Nicola's Portfolio</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-5">
            {mainNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick(item.href);
                }}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  activeHash === item.href
                    ? "text-primary"
                    : "text-foreground/70"
                )}
                data-interactive
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <Button asChild className="px-4 py-2 rounded-md text-sm font-medium" data-interactive>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavLinkClick('#contact'); }}>Contattami</a>
          </Button>
        </div>
        
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" data-interactive>
                <Menu className="h-6 w-6 text-foreground" />
                <span className="sr-only">Apri menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-background">
              <SheetHeader className="mb-6">
                <SheetTitle>
                  <a href="#home" onClick={(e) => { e.preventDefault(); handleLogoClick(e); }} className="flex items-center space-x-2" data-interactive>
                    <Code2 className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">Nicola's Portfolio</span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4">
                {mainNavItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault(); 
                      handleNavLinkClick(item.href);
                    }}
                    className={cn(
                      "text-base font-medium transition-colors hover:text-primary py-2",
                      activeHash === item.href
                        ? "text-primary"
                        : "text-foreground/80"
                    )}
                    data-interactive
                  >
                    {item.label}
                  </a>
                ))}
                <Button asChild className="w-full mt-4 py-3 text-base" data-interactive>
                  <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavLinkClick('#contact'); }}>Contattami</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
