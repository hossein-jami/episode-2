import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Nav } from "./Pages/Nav";
import { useState } from "react";
import { Profile } from "./Pages/Profile";
import { createContext } from "react";

import { Form } from "./Components/Form";
import { Fetchdata } from "./Components/Fetchdata";

export const ProfileContext = createContext();

function App() {
  const [userName, setUserName] = useState("hosein");

  const [showText, setShowText] = useState(true);
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <ProfileContext.Provider value={{ userName, setUserName }}>
        <Router className="Router">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<div>not found</div>} />
            <Route path="fetch" element={<Fetchdata />} />
            <Route path="form"  element={<Form />}/>
          </Routes>
          <br></br>
          {showText && (
            <div onClick={() => setShowText(!showText)}> this is footer </div>
          )}
        </Router>
      </ProfileContext.Provider>
    </div>
  );
}

export default App;
