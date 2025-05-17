import { User, MapPin, Rocket, Gamepad2, Cpu } from 'lucide-react';

export default function AboutSection() {
  const interests = [
    { icon: <Cpu size={24} className="text-primary" />, text: "Programmazione" },
    { icon: <Gamepad2 size={24} className="text-primary" />, text: "Videogiochi" },
    { icon: <Rocket size={24} className="text-primary" />, text: "Tecnologia" },
  ];

  return (
    <section 
      id="about" 
      className="py-16 md:py-24 bg-background animate-in fade-in slide-in-from-bottom-12 duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-primary">Chi</span> sono
        </h2>
        <div className="max-w-3xl mx-auto text-center md:text-lg text-foreground/90 space-y-6">
          <p>
            Ciao! Sono Nicola, un ragazzo di 14 anni che vive nella bellissima città di Verona, Italia.
          </p>
          <p>
            Sono appassionato di tutto ciò che è digitale. Mi piace esplorare nuove idee e trasformarle in realtà,
            che si tratti di scrivere codice, scoprire le ultime novità tecnologiche o immergermi in mondi virtuali.
            Ogni giorno è una nuova opportunità per imparare e creare qualcosa di fantastico!
          </p>
          <div className="pt-6">
            <h3 className="text-2xl font-semibold mb-6 text-primary">I miei Interessi</h3>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {interests.map((interest, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center space-y-3 p-4 bg-card rounded-lg shadow-md hover:shadow-primary/20 transition-all duration-300 min-w-[140px] md:min-w-[160px] hover:scale-105 hover:-translate-y-1"
                  data-interactive
                >
                  <div className="p-3 bg-primary/10 rounded-full">
                    {interest.icon}
                  </div>
                  <span className="text-sm font-medium pt-1">{interest.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 pt-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <User size={20} />
              <span>14 anni</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={20} />
              <span>Verona, Italia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
