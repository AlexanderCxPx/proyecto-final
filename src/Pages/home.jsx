import productos from '../data/productos';
import { Link } from 'react-router-dom';

function Home() {
  const camisetaDestacada = productos.find(p => p.tipo === 'Camiseta');
  const gorraDestacada = productos.find(p => p.tipo === 'Gorra');
  const accesorioDestacado = productos.find(p => p.tipo === 'Accesorio');

  const destacados = [camisetaDestacada, gorraDestacada, accesorioDestacado];

  return (
    <>
      <div className="row g-0 w-100 mx-0">
        <div className="col-md-4 p-0">
          <div className="destacada-wrapper">
            <img src="/imagenes/camiseta1.jpg" alt="Jugador 1" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-4 p-0">
          <div className="destacada-wrapper">
            <img src="/imagenes/camiseta2.jpg" alt="Jugador 2" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-4 p-0">
          <div className="destacada-wrapper">
            <img src="/imagenes/camiseta3.jpg" alt="Jugador 3" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="w-100 bg-productos-destacados py-3">
        <div className="container">
          <div className="row">
            {destacados.map(producto => (
              <div key={producto.id} className="col-md-4 mb-3">
                <Link to={`/producto/${producto.id}`} className="text-decoration-none text-dark">
                  <div className="card h-100 text-center border rounded">
                    <div className="img-zoom-wrapper">
                      <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="card-img-top img-fluid img-home-producto"
                      />
                    </div>
                    <div className="card-body py-2 px-3">
                      <button
                        className="btn btn-u w-100 mb-2"
                        style={{ fontSize: '1.25rem' }}
                      >
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
      </div>

      <div className="row g-0 w-100 mx-0">
        <div className="col-md-6 p-0">
          <a
            href="https://www.ticketmaster.pe/event/universitario-vs-barcelona-guayaquil-f5-grupo-b-home-32424542"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <div className="visita position-relative">
              <img
                src="/imagenes/partidos.jpg"
                alt="Partidos"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
              <div className="visita-overlay"></div>
              <div className="visita-texto">
                Asiste a los encuentros
                <div className="visita-subtexto">(Presiona aquí para vivir la experiencia)</div>
              </div>
            </div>
          </a>
        </div>

        <div className="col-md-6 p-0">
          <a
            href="https://www.ticketmaster.pe/event/museo-monumental-venta-general-25-02-24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <div className="visita position-relative">
              <img
                src="/imagenes/museo.jpg"
                alt="Museo"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
              <div className="visita-overlay"></div>
              <div className="visita-texto">
                Visita el museo
                <div className="visita-subtexto">(Presiona aquí para vivir la experiencia)</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
