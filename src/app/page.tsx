'use client';

import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import Experience from '@/components/sections/Experience';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <About />
      <Contact />
    </Layout>
  );
}
