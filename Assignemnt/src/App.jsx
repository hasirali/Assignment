import "./App.css";
import './assets/javascripts/main.js'
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Client from "./Components/Client";
import Footer from "./Components/Footer";
import About from "./Components/About";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Client/>
      <Footer/>
  
    </>
  );
}

export default App;
