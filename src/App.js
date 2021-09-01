import './App.scss';
import Header from "./Components/Header/Header"
import About from "./Sections/About/About"
import Services from "./Sections/Services/Services"
import Skills from "./Sections/Skills/Skills"
import Experience from "./Sections/Experience/Experience"
import Projects from "./Sections/Projects/Projects"
function App() {

  return (
    <div className="app">
      <div className="container">

        <Header />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

export default App;
