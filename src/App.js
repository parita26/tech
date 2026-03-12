import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app">
     <button
className="topBtn"
onClick={() => window.scrollTo({top:0, behavior:"smooth"})}
>
↑
</button>
      <Header />

      <Home />
      <About />
      <Services />
      <Contact />

      <Footer />

    </div>
  );
}

export default App;