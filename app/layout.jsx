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
  metadataBase: new URL('https://enchufevirtual.com'),
  title: {
    default: 'Desarrollo web y proyectos digitales | Enchufe Virtual',
    template: '%s | Enchufe Virtual',
  },
  description: 'Enchufe Virtual crea sitios web, experiencias digitales y proyectos de código abierto. Conoce nuestro portafolio y hablemos de tu próximo proyecto.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Desarrollo web y proyectos digitales | Enchufe Virtual',
    description: 'Sitios web, experiencias digitales y proyectos de código abierto.',
    url: 'https://enchufevirtual.com/',
    siteName: 'Enchufe Virtual',
    locale: 'es_EC',
    type: 'website',
    images: [
      {
        url: '/assets/Hero-ev.png',
        alt: 'Enchufe Virtual: desarrollo web y proyectos digitales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desarrollo web y proyectos digitales | Enchufe Virtual',
    description: 'Sitios web, experiencias digitales y proyectos de código abierto.',
    images: ['/assets/Hero-ev.png'],
  },
  icons: {
    icon: '/assets/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
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
