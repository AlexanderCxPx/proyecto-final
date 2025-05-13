import productos from '../data/productos';
import { Link } from 'react-router-dom';

function Gorras() {
  const productosFiltrados = productos.filter(p => p.tipo === 'Gorra');

  return (
    <div className="container py-4">
      <div className="row">
        {productosFiltrados.map(producto => (
          <div key={producto.id} className="col-md-4 mb-4">
            <Link to={`/producto/${producto.id}`} className="text-decoration-none text-dark">
              <div className="card h-100 text-center border rounded">
                <div className="img-zoom-wrapper">
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="card-img-top img-fluid"
                    style={{ height: '300px', objectFit: 'contain' }}
                  />
                </div>
                <div className="card-body py-2 px-3">
                  <button className="btn btn-u w-100 mb-2" style={{ fontSize: '1.25rem' }}>
                    s/{producto.precio.toFixed(2)}
                  </button>
                  <h5 className="fw-bold mb-1">{producto.nombre}</h5>
                  <p className="text-muted mb-0" style={{ fontSize: '1rem' }}>
                    {producto.detalle}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gorras;
