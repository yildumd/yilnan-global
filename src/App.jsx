import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Industries from './components/sections/Industries';
import Process from './components/sections/Process';
import Testimonials from './components/sections/Testimonials';
import CTA from './components/sections/CTA';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Industries />
        <Process />
        <Testimonials />
        <CTA />
        <Contact />   {/* ← Add this line */}
      </main>
      <Footer />
    </div>
  );
}

export default App;