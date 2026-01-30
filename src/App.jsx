import { Navbar, Hero, About, Skills, Experience, FeaturedProjects, GitHubProjects, Education, Contact, Footer, LoadingRocket, FloatingWA } from './components';
import './App.css';

function App() {
  return (
    <div className="app">
      <LoadingRocket />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <GitHubProjects username="AlKahfiHisyam" />
      <Education />
      <Contact />
      <Footer />
      <FloatingWA />
      <div className="particles">
        {[...Array(5)].map((_, i) => <div key={i} className="particle"></div>)}
      </div>
    </div>
  );
}

export default App;
