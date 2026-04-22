import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Contact from "./components/Contact";
import PhoneAuth from "./components/PhoneAuth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <AboutUs />
              <Services />
              <Contact />
            </>
          } 
        />

        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<PhoneAuth />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;