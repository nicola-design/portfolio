import { Button } from '@/components/ui/button';
import { Github, Mail, Linkedin } from 'lucide-react'; 

const socialLinks = [
  { icon: <Github size={32} />, label: "GitHub", href: "https://github.com" }, 
  { icon: <Mail size={32} />, label: "Email", href: "mailto:nicola@example.com" }, 
  { icon: <Linkedin size={32} />, label: "LinkedIn", href: "https://linkedin.com" }, 
];

export default function ContactSection() {
  return (
    <section 
      id="contact" 
      className="py-16 md:py-24 bg-background animate-in fade-in slide-in-from-bottom-20 duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Mettiamoci in <span className="text-primary">Contatto</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Hai un'idea brillante, un progetto interessante o vuoi semplicemente salutarmi? Non esitare a scrivermi!
        </p>
        <div className="flex justify-center space-x-6 mb-12">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-muted-foreground hover:text-primary transition-all duration-300 p-3 rounded-full hover:bg-primary/10 hover:scale-110"
              data-interactive
            >
              {social.icon}
            </a>
          ))}
        </div>
        <Button size="lg" asChild data-interactive>
          <a href="mailto:nicola@example.com">Scrivimi una Email</a>
        </Button>
      </div>
    </section>
  );
}
