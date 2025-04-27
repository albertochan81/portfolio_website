import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import ObstacleCourse from "./components/ObstacleCourse.jsx";
import HungerBox from "./components/HungerBox.jsx";
import React, { useEffect } from "react";
import ReactGA from "react-ga4";

export default function App() {
  useEffect(() => {
    ReactGA.initialize("G-XC21L6FTP3"); // Replace with your Measurement ID
    ReactGA.send("pageview");
  }, []);

  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
          <Route path="/projects/obstacleCourse" element={<ObstacleCourse />} /> 
          <Route path="/projects/hungerBox" element={<HungerBox />} /> 
         
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


