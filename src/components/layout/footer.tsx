
'use client';

import React from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = React.useState<number | null>(null);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Mostra "..." finché l'anno non è caricato per evitare hydration mismatch.
  const yearText = currentYear === null ? '...' : currentYear.toString();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          &copy; {yearText} Realizzato con ❤️ da Nicola.
        </p>
      </div>
    </footer>
  );
}
