import { PureComponent } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Country from "./components/Country";
import "./styles.css";
import Footer from "./components/Footer";

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/country/:country/:state" element={<Country />} />
          <Route path="/*" element={<h1>404</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}
export default App;
