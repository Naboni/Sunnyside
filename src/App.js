import './App.css';
import Footer from './components/common/footer/Footer';
import Navbar from './components/common/navbar/Navbar';
import Gallery from './components/gallery/Gallery';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Testimonials from './components/testimonials/Testimonials';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
