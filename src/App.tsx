import { useLenis } from '@/hooks/useLenis';
import { Preloader } from '@/components/Preloader';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Cursor } from '@/components/Cursor';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Timeline } from '@/components/Timeline';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  useLenis();

  return (
    <>
      <a href="#hero" className="skip-link">
        Skip to content
      </a>

      <div className="grain-overlay" aria-hidden="true" />

      <Preloader />
      <ScrollProgress />
      <Cursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
