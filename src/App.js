import { HashRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Servise from './Pages/Servise/Servise';
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer/Footer';
import NotFound from './Pages/Notfound/NotFound';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/servise' element={<Servise />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='signup' element={<SignUp />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
