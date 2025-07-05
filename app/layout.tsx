import type React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sena Engenharia - Soluções Sustentáveis',
  description:
    'Energia solar, climatização e engenharia civil com mais de 8 anos de experiência',
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR'>
      <body className='antialiased'>{children}</body>
    </html>
  );
}
