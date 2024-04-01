import './App.css';
import {BrowserRouter as Router , Routes , Route ,Link } from "react-router-dom"
import { Home } from './Pages/Home'
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Nav } from './Pages/Nav';
function App() {
  return (
    <div className="App">
      <Router>
        <div>HosseinCoding</div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>not found</div>} />
        </Routes>
        <div>this is footer</div>
      </Router>
    </div>
  );
}

export default App;
