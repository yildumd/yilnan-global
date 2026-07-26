import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Ventures from './components/sections/Ventures';
import ClientWork from './components/sections/ClientWork';
import Services from './components/sections/Services';
import Industries from './components/sections/Industries';
import YilnanBuilds from './components/sections/YilnanBuilds';
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
        <Ventures />
        <ClientWork />
        <Services />
        <Industries />
        <YilnanBuilds />
        <Process />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;