import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FeedForward',
  description:
    'Memanfaatkan Teknologi Digital untuk Menjembatani Kesenjangan Antara Surplus Pangan dan Kerawanan Pangan'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={montserrat.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
