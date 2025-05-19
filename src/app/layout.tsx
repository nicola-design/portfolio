import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { cn } from '@/lib/utils';
import CustomCursor from '@/components/ui/custom-cursor';
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Nicola's Portfolio",
  description: "Nicola's personal portfolio.",
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚫️</text></svg>',
  },
  openGraph: {
    title: "Nicola's Portfolio",
    description: "Nicola's personal portfolio.",
    images: ["/me.png"], // ← cambia questo URL con il tuo
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="dark scroll-smooth">
      <body
        className={cn(
          'font-sans antialiased min-h-screen flex flex-col',
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <CustomCursor />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
