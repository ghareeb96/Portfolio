import './App.scss';
import Header from "./Components/Header/Header"
import Home from "./Sections/Home/Home"
import About from "./Sections/About/About"
import Services from "./Sections/Services/Services"
import Skills from "./Sections/Skills/Skills"
function App() {

  return (
    <div className="app">
      <div className="container">

        <Header />
        <Home />
        <About />
        <Services />
        <Skills />
      </div>
    </div>
  );
}

export default App;
