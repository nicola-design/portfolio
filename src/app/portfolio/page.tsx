
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Portfolio Personale - Nicola's Nook",
  description: "Dettagli sul progetto Portfolio Personale di Nicola, che mostra come è stato sviluppato il sito nicolasnook.com.",
};

export default function PortfolioDetailPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <article className="max-w-4xl mx-auto bg-card p-6 sm:p-10 rounded-xl shadow-2xl ring-1 ring-border/30">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-primary md:text-5xl lg:text-6xl tracking-tight">
            Portfolio Personale
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">Un'immersione nella creazione di Nicola's Nook.</p>
        </header>

        <div className="mb-12 overflow-hidden rounded-lg shadow-xl border border-border/20">
          <Image
            src="/portfolio-project.png"
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
            Come è stato creato questo Portfolio
          </h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Questo sito, "Nicola's Nook", rappresenta il mio portfolio personale digitale. È un progetto che ho concepito e sviluppato con grande entusiasmo e dedizione, con l'obiettivo primario di presentare in modo efficace le mie competenze, i miei progetti e la mia passione per il mondo della programmazione e del design digitale.
            </p>
            <p>
              L'idea era quella di creare non solo una vetrina, ma un vero e proprio spazio personale che riflettesse la mia identità di giovane sviluppatore in crescita.
            </p>
            
            <h3 className="text-2xl font-semibold text-primary/90 pt-4">Stack Tecnologico</h3>
            <p>
              Per la realizzazione di "Nicola's Nook", ho scelto di utilizzare un insieme di tecnologie moderne, performanti e ampiamente riconosciute nel settore dello sviluppo web:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Next.js:</strong> Ho adottato Next.js come framework React full-stack. Questa scelta è stata motivata dalla sua capacità di offrire un'esperienza utente estremamente veloce e fluida, grazie a funzionalità come il routing avanzato con l'App Router, il rendering lato server (SSR) per un caricamento iniziale rapido e la generazione di pagine statiche (SSG) dove più opportuno.
              </li>
              <li>
                <strong>React:</strong> Costituisce il nucleo dell'interfaccia utente. Ho sfruttato la sua architettura basata su componenti per creare UI interattive, modulari e riutilizzabili, che compongono ogni singola sezione e interazione del sito.
              </li>
              <li>
                <strong>TypeScript:</strong> Per garantire una maggiore robustezza, affidabilità e manutenibilità del codice, ho scelto di scrivere l'intero progetto in TypeScript. La tipizzazione statica mi ha aiutato a prevenire errori comuni e a migliorare la comprensibilità della codebase.
              </li>
              <li>
                <strong>Tailwind CSS:</strong> Per lo styling, ho optato per un approccio utility-first con Tailwind CSS. Questo mi ha permesso di costruire rapidamente un design moderno, pulito, altamente personalizzato e completamente responsive, adattabile a qualsiasi dimensione di schermo.
              </li>
              <li>
                <strong>ShadCN UI:</strong> Ho integrato diversi componenti UI pre-costruiti dalla libreria ShadCN UI. Questi componenti, noti per la loro accessibilità e facilità di personalizzazione (es. bottoni, card, dialogs), hanno accelerato significativamente il processo di sviluppo dell'interfaccia, permettendomi di concentrarmi sull'esperienza utente complessiva mantenendo un'alta qualità estetica e funzionale.
              </li>
            </ul>
            
            <h3 className="text-2xl font-semibold text-primary/90 pt-4">Obiettivi e Filosofia</h3>
            <p>
              L'obiettivo principale dietro la creazione di questo portfolio era duplice: da un lato, presentare in modo chiaro e professionale i miei progetti e le mie competenze tecniche; dall'altro, creare uno spazio digitale che riflettesse la mia crescita come sviluppatore e la mia innata passione per la creatività nell'ambito digitale.
            </p>
            <p>
              Ogni sezione è stata pensata ponendo l'utente al centro, con un focus sull'intuitività della navigazione, sull'accessibilità dei contenuti e su un'estetica generale piacevole e moderna. Ho cercato di bilanciare la funzionalità con un design che parlasse di me e del mio approccio allo sviluppo.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
