import '@/styles/style.scss';

import { GlobalProvider } from '@/context/GlobalProvider';
import { ContainerLayout } from '@/layout/ContainerLayout';
import Loader from '@/components/loader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata = {
  title: 'Enchufe Virtual',
  description: 'Open Source Projects'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalProvider>
          <ScrollToTop />
          <ContainerLayout>
            <Loader />
            <Header />
            {children}
            <Footer />
          </ContainerLayout>
        </GlobalProvider>
      </body>
    </html>
  );
}
