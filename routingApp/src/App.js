import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";


function App() {
  return (
    <Router>
      <nav className="bg-gray-100 flex item-center justify-between gap-5 p-4">
        <div>
          <Link to="/" className="font-bold text-sky-500 text-xl" title="Home_Page">ROUTING</Link>
        </div>
        <div className="flex gap-3">
          <Link to="/" className="font-bold text-sky-500" title="Home_Page">Home</Link>
          <Link to="/About" className="font-bold text-sky-500" title="About">About</Link>
          <Link to="/Contact" className="font-bold text-sky-500" title="Contact_Page">Contact</Link>
        </div>
      </nav>
      <div className="bg-white min-h-screen flex items-center justify-center p-6">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="*" element={<PageNotFound/>} />          
          </Routes>
      </div>
    </Router>
  );
}

export default App;
