import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import productos from '../data/productos';

function Navbar() {
  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);
  const navigate = useNavigate();

  const manejarCambio = (e) => {
    const texto = e.target.value;
    setBusqueda(texto);

    if (texto.length > 1) {
      const filtrados = productos.filter(p =>
        p.nombre.toLowerCase().includes(texto.toLowerCase())
      );
      setResultados(filtrados.slice(0, 5));
    } else {
      setResultados([]);
    }
  };

  const manejarSeleccion = (id) => {
    setBusqueda('');
    setResultados([]);
    navigate(`/producto/${id}`);
  };

  return (
    <>
        {/* Barra superior */}
        <a
        href="https://socioadherente.universitario.pe/login"
        className="barra-superior text-white text-center py-1 w-100 d-block text-decoration-none"
        target="_blank"
        rel="noopener noreferrer" >
        <strong>🏆 ¡HÁZTE SOCIO, BICAMPEÓN! 🏆</strong>
        </a>

      {/* Navbar principal */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm w-100 sticky-top">
        <div className="d-flex justify-content-between align-items-center w-100 px-4">
          {/* Parte izquierda */}
          <div className="d-flex align-items-center gap-4 mx-auto">
            <NavLink className="navbar-brand" to="/">
              <img src="/logo-u.png" alt="Universitario" width="40" height="40" />
            </NavLink>
            <ul className="navbar-nav flex-row gap-4">
              <li className="nav-item">
                <NavLink to="/camisetas" className={({ isActive }) => `nav-link ${isActive ? 'activo-u' : ''}`}>
                  Camisetas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/gorras" className={({ isActive }) => `nav-link ${isActive ? 'activo-u' : ''}`}>
                  Gorras
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/accesorios" className={({ isActive }) => `nav-link ${isActive ? 'activo-u' : ''}`}>
                  Accesorios
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Buscador + Iconos */}
          <div className="d-flex align-items-center gap-3 ms-auto position-relative">
            <div className="position-relative w-100" style={{ minWidth: '200px' }}>
              <input
                className="form-control buscador-navbar"
                type="search"
                placeholder="Buscar..."
                value={busqueda}
                onChange={manejarCambio}
              />
              {resultados.length > 0 && (
                <ul className="list-group position-absolute w-100 mt-1 z-3">
                  {resultados.map(producto => (
                    <li
                      key={producto.id}
                      className="list-group-item sugerencia-producto text-decoration-none"
                      style={{ cursor: 'pointer' }}
                      onClick={() => manejarSeleccion(producto.id)}
                    >
                      {producto.nombre}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <NavLink to="/mantenimiento"><i className="bi bi-person fs-5 nav-icon"></i></NavLink>
            <NavLink to="/mantenimiento"><i className="bi bi-heart fs-5 nav-icon"></i></NavLink>
            <NavLink to="/mantenimiento"><i className="bi bi-cart fs-5 nav-icon"></i></NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
