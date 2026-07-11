import "./styles/global.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Divider from "./components/Divider";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Divider />
        <Services />
        <Gallery />
        <Divider />
        <About />
        <Divider />
        <Reviews />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
