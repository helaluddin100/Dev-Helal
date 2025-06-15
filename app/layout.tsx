import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingShapes from '@/components/ui/FloatingShapes';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Helal Uddin - Full Stack Web Developer',
  description: 'Full Stack Web Developer with 5+ years of experience in modern web technologies. Specializing in React, Next.js, Laravel, and innovative web solutions.',
  keywords: 'web developer, full stack developer, react developer, next.js, laravel, javascript, php, modern web development',
  authors: [{ name: 'Helal Uddin' }],
  creator: 'Helal Uddin',
  metadataBase: new URL('https://helaluddin.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://helaluddin.dev',
    title: 'Helal Uddin - Full Stack Web Developer',
    description: 'Full Stack Web Developer with 5+ years of experience in modern web technologies.',
    siteName: 'Helal Uddin Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Helal Uddin - Full Stack Web Developer',
    description: 'Full Stack Web Developer with 5+ years of experience in modern web technologies.',
    creator: '@helaluddin',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-inter`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 text-foreground relative overflow-x-hidden">
            <FloatingShapes />
            <Header />
            <main className="relative z-10">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}