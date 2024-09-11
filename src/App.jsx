
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dentist/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
            <Route
              path="*"
              element={<h1>Error 404 - Page not Found</h1>}
            />
          </Routes>
          <Footer/>
        </BrowserRouter> 
        {/* capas debemos sacarlo a main.jsx */}
      </div>
  );
}

export default App;
