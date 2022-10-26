import './App.css';
import Home from './components/Home'
import About from './components/About'

function App() {
  let myName = "Tegar"

  return (
    // hanya bisa me-return 1 element
    <div className="container">
      <h1>ini adalah APP milik {myName}</h1>

      <Home />

      <About />

    </div>
  );
}

export default App;