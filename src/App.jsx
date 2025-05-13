import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Camisetas from './pages/Camisetas';
import Gorras from './pages/Gorras';
import Accesorios from './Pages/Accesorios';
import Mantenimiento from './Pages/Mantenimiento';
import ProductoDetalle from './Pages/ProductoDetalle';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/camisetas" element={<Camisetas />} />
          <Route path="/gorras" element={<Gorras />} />
          <Route path="/accesorios" element={<Accesorios />} />
          <Route path="/mantenimiento" element={<Mantenimiento />} />
          <Route path="/producto/:id" element={<ProductoDetalle />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;