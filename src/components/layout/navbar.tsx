
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

  const observeSections = useCallback(() => {
    if (pathname !== '/') {
      if (observer.current) observer.current.disconnect();
      return;
    }

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
          setActiveHash(newHash);
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
  }, [pathname]);

  const handleNavLinkClick = useCallback((hrefTarget: string) => {
    // Questa funzione è chiamata solo se pathname === '/'
    setActiveHash(hrefTarget);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(hrefTarget.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      if (observer.current) {
        observer.current.disconnect();
      }
      setTimeout(() => {
        if (pathname === '/') observeSections();
      }, 1000); 
    }
  }, [pathname, observeSections]);

  useEffect(() => {
    if (pathname === '/') {
      const currentUrlHash = window.location.hash;
      if (currentUrlHash) {
        setActiveHash(currentUrlHash);
        // Scroll all'elemento se si arriva con un hash
        setTimeout(() => {
          const element = document.getElementById(currentUrlHash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'auto' }); // 'auto' per evitare conflitti iniziali
          }
        }, 50);
      } else if (window.scrollY < 200) {
        setActiveHash('#home');
      }
      observeSections();
    } else {
      setActiveHash(''); // Nessuna sezione attiva se non siamo sulla homepage
      if (observer.current) {
        observer.current.disconnect();
      }
    }

    const handleHashChangeOnHomepage = () => {
      if (pathname === '/') {
        setActiveHash(window.location.hash || '#home');
      }
    };

    window.addEventListener('hashchange', handleHashChangeOnHomepage);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
      window.removeEventListener('hashchange', handleHashChangeOnHomepage);
    };
  }, [pathname, observeSections]);


  const getDynamicHref = (targetHash: string) => {
    return pathname === '/' ? targetHash : `/${targetHash}`;
  };

  return (
    <header className="sticky top-0 z-50 mt-4 mx-24 rounded-full border border-border/40 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link 
          href={getDynamicHref('#home')} 
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              handleNavLinkClick('#home');
            } else {
              setIsMobileMenuOpen(false);
            }
          }}
          className="flex items-center space-x-2 hover:opacity-75 transition-all duration-300 hover:scale-105" 
          data-interactive
        >
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg text-foreground">Nicola's Portfolio</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-5">
            {mainNavItems.map((item) => (
              <Link
                key={item.label}
                href={getDynamicHref(item.href)}
                onClick={(e) => {
                  if (pathname === '/') {
                    e.preventDefault();
                    handleNavLinkClick(item.href);
                  } else {
                    setIsMobileMenuOpen(false);
                  }
                }}
                className={cn(
                  "text-sm font-medium transition-all duration-200 hover:text-primary hover:-translate-y-0.5",
                  activeHash === item.href
                    ? "text-primary"
                    : "text-foreground/70"
                )}
                data-interactive
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <Button asChild className="px-4 py-2 rounded-md text-sm font-medium" data-interactive>
            <Link 
              href={getDynamicHref('#contact')}
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault();
                  handleNavLinkClick('#contact');
                } else {
                  setIsMobileMenuOpen(false);
                }
              }}
            >
              Contattami
            </Link>
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
                  <Link 
                    href={getDynamicHref('#home')} 
                    onClick={(e) => {
                      if (pathname === '/') {
                        e.preventDefault();
                        handleNavLinkClick('#home');
                      } else {
                        setIsMobileMenuOpen(false);
                      }
                    }} 
                    className="flex items-center space-x-2" 
                    data-interactive
                  >
                    <Code2 className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">Nicola's Portfolio</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.label}
                    href={getDynamicHref(item.href)}
                    onClick={(e) => {
                      if (pathname === '/') {
                        e.preventDefault(); 
                        handleNavLinkClick(item.href);
                      } else {
                        setIsMobileMenuOpen(false);
                      }
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
                  </Link>
                ))}
                <Button asChild className="w-full mt-4 py-3 text-base" data-interactive>
                  <Link 
                    href={getDynamicHref('#contact')}
                    onClick={(e) => {
                      if (pathname === '/') {
                        e.preventDefault();
                        handleNavLinkClick('#contact');
                      } else {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                  >
                    Contattami
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

