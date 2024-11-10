import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Nav from "./components/Nav.jsx";


export default function App() {
  return (
    <BrowserRouter>
    {/* <Nav/> */}
      <Routes>
        <Route path="/" element={<Home />}>
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


