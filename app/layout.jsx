import '@/styles/style.scss';

import { GlobalProvider } from '@/context/GlobalProvider';
import { ContainerLayout } from '@/layout/ContainerLayout';
import Loader from '@/components/loader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import ScrollToTop from '@/components/ScrollToTop';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata = {
  title: 'Enchufe Virtual',
  description: 'Open Source Projects',
  icons: {
    icon: '/assets/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <GlobalProvider>
          <ScrollToTop />
          <SmoothScroll />
          <ContainerLayout>
            <Loader />
            <Header />
            <ScrollProgress />
            {children}
            <Footer />
          </ContainerLayout>
        </GlobalProvider>
      </body>
    </html>
  );
}
