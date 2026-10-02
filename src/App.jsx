import "./styles/global.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Fleet from "./components/Fleet";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import MobileBar from "./components/MobileBar";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Divider />
        <Services />
        <Divider />
        <Fleet />
        <Divider />
        <Reviews />
        <Divider />
        <Process />
        <Divider />
        <Gallery />
        <Divider />
        <About />
        <Divider />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}

export default App;
