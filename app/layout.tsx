import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import ModalOverlay from './components/Modals/ModalOverlay/ModalOverlay';
import RegistrationForm from './components/Modals/RegistrationForm/RegistrationForm';
import LoginForm from './components/Modals/LoginForm/LoginForm';
import BookingModal from './components/Modals/BookingModal/BookingModal';
import ToastNotification from './components/ToastNotification/ToastNotification';

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
        <ModalOverlay>
          {/* <RegistrationForm /> */}
          {/* <LoginForm /> */}
          {/* <BookingModal
            id="test-123"
            name="Dr. Sarah Miller"
            avatar_url="/images/heroImage.avif"
          /> */}
          <ToastNotification />
        </ModalOverlay>
      </body>
    </html>
  );
}
