import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Briefcase } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background min-h-[calc(100vh-4rem)] flex items-center overflow-hidden"
    >
      {/* Il div della griglia è stato rimosso */}

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <Image
            src="/nicola-selfie.png"
            alt="Nicola - Immagine Profilo"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-8 shadow-lg border-4 border-primary w-[150px] h-[150px] object-cover object-[center_30%]"
            style={{ objectFit: 'cover' }}
            priority
            data-interactive="true"
          />
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-top-8 duration-1000 delay-200">
            Nicola
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
            Mente creativa, aspirante sviluppatore. Esplorando il mondo digitale, un byte alla volta.
          </p>
          <div className="space-x-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
            <Button size="lg" asChild data-interactive="true">
              <Link href="#projects">
                <Briefcase className="mr-2 h-5 w-5" />
                I miei Progetti
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild data-interactive="true">
              <Link href="#contact">Contattami</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
