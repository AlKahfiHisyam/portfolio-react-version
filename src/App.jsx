// Global styles load before the component modules so a module can refine a shared class.
import './App.css';
import { Header, Hero, Paths, Work, Process, Experience, About, Testimonials, Contact, Footer, FloatingWhatsApp } from './components';
import { useLanguage } from './i18n/LanguageContext';

function App() {
  const { lang } = useLanguage();

  return (
    <>
      <a href="#main" className="skip-link">{lang === 'id' ? 'Langsung ke konten' : 'Skip to content'}</a>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <Paths />
        <Process />
        <Experience />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
