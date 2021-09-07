import './App.scss';
import Header from "./Components/Header/Header"
import About from "./Sections/About/About"
import Services from "./Sections/Services/Services"
import Skills from "./Sections/Skills/Skills"
import Experience from "./Sections/Experience/Experience"
import Projects from "./Sections/Projects/Projects"
import Contact from './Sections/Contact/Contact';
function App() {

  return (
    <div className="app">

        <Header />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Contact/>
    </div>
  );
}

export default App;
