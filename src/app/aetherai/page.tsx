
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Portfolio Personale",
  description: "Dettagli sul progetto Portfolio Personale di Nicola",
};

export default function PortfolioDetailPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <article className="max-w-4xl mx-auto bg-card p-6 sm:p-10 rounded-xl shadow-2xl ring-1 ring-border/30">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-primary md:text-5xl lg:text-6xl tracking-tight">
            AetherAI
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">Semplice wrapper di un'AI Google.</p>
        </header>

        <div className="mb-12 overflow-hidden rounded-lg shadow-xl border border-border/20">
          <Image
            src="/aetherai-project.png"
            alt="Immagine rappresentativa del progetto Portfolio Personale"
            width={700}
            height={400}
            className="w-full h-auto object-cover"
            data-ai-hint="portfolio website"
            priority
          />
        </div>

        <section className="text-foreground/90 space-y-8">
          <h2 className="text-3xl font-semibold text-primary border-b border-border/50 pb-3 mb-6">
            Cos'è
          </h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Vi presento AetherAI, un progetto innovativo che mira a ridefinire l'interazione uomo-macchina attraverso un'esperienza di chat intelligente e intuitiva. Costruito su fondamenta tecnologiche moderne, AetherAI sfrutta la potenza di Next.js e React per un frontend reattivo e performante, arricchito dall'eleganza dei componenti ShadCN UI e dalla flessibilità di Tailwind CSS per uno stile impeccabile.
            </p>
            <p>
              Il cuore pulsante di AetherAI è la sua capacità di conversazione, alimentata da Genkit, che permette agli utenti di dialogare con un assistente AI avanzato. Che si tratti di ottenere risposte, esplorare idee o semplicemente conversare, AetherAI è progettato per essere un compagno digitale perspicace e amichevole.
            </p>
            <p>
              Il progetto presenta una landing page accattivante che introduce AetherAI e una pagina dedicata all'interfaccia di chat, dove l'utente può immergersi direttamente nell'esperienza conversazionale. L'obiettivo è offrire un'applicazione pulita, moderna e focalizzata sulla fornitura di interazioni AI significative.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
