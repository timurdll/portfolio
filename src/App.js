import About from "./Components/about/About";
import Advertisement from "./Components/advertisement/Advertisement";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Portfolio from "./Components/portfolio/Portfolio";
import "./index.css";
import "normalize.css";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <About />
      <Advertisement />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
