'use client'

import Hero from '@/components/Hero/';
import HomeCallToAction from '@/components/HomeCallToAction';
import Main from '@/containers/Main';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Main />
      <HomeCallToAction />
    </>
  );
}