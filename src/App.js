import './App.scss';
import Header from "./Components/Header/Header"
import Home from "./Sections/Home/Home"
function App() {
  return (
    <div className="app">
      <div className="container">

        <Header />
        <Home />

      </div>
    </div>
  );
}

export default App;
