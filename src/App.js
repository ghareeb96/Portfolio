import './App.scss';
import Header from "./Components/Header/Header"
import Home from "./Sections/Home/Home"
import About from "./Sections/About/About"
function App() {
  return (
    <div className="app">
      <div className="container">

        <Header />
        <Home />
        <About />

      </div>
    </div>
  );
}

export default App;
