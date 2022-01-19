import './App.css';
import Footer from './components/common/footer/Footer';
import Navbar from './components/common/navbar/Navbar';
import Gallery from './components/gallery/Gallery';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
