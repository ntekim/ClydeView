// src/app/layout.tsx
import './globals.css';
import { Providers } from '../providers';
import { Lato, Poppins } from 'next/font/google';
import { ColorModeProvider } from '@/lib/color-mode';
import { Header } from '@/components/layout/Header' // Using the @ alias we set up
import { Footer } from '@/components/layout/Footer';
import { Box } from '@chakra-ui/react';

// Configure the fonts
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // The weights we'll use
  variable: '--font-poppins', // A CSS variable for our heading font
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato', // A CSS variable for our body font
});

export const metadata = {
  title: 'Clydeview Academy',
  description: 'Nurturing Curiosity, Fostering Excellence',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${lato.variable}`}>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ColorModeProvider>
          <Providers>
            <Header />
            <Box as="main" flex="1" color="body_text">
              {children}
            </Box>
            <Footer />
          </Providers>
        </ColorModeProvider>
      </body>
    </html>
  );
}