import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import ToastNotification from './components/ToastNotification/ToastNotification';
import ModalManager from './components/Modals/ModalManager/ModalManager';

const manrope = Manrope({
  variable: '--font-family',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'PsyConnect',
  description: 'The platform for finding a psychologist',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <Header />
        {children}
        <Footer />
        <ModalManager />
        <ToastNotification />
      </body>
    </html>
  );
}
