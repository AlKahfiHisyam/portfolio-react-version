import { Header, Hero, Proof, Paths, Work, Process, Experience, About, Testimonials, Contact, Footer, FloatingWhatsApp } from './components';
import { useLanguage } from './i18n/LanguageContext';
import './App.css';

function App() {
  const { lang } = useLanguage();

  return (
    <>
      <a href="#main" className="skip-link">{lang === 'id' ? 'Langsung ke konten' : 'Skip to content'}</a>
      <Header />
      <main id="main">
        <Hero />
        <Proof />
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
