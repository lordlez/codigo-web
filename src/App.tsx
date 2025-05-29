import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Clientes from "./components/Clientes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Clientes />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
