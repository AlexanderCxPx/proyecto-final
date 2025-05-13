import { useParams, useNavigate } from 'react-router-dom';
import productos from '../data/productos';

function ProductoDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const producto = productos.find(p => p.id === parseInt(id));

  if (!producto) {
    return <div className="text-center py-5">Producto no encontrado</div>;
  }

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="img-fluid"
            style={{ maxHeight: '500px', objectFit: 'contain' }}
          />
        </div>
        <div className="col-md-6">
          <h2>{producto.nombre}</h2>
          <p className="text-muted">{producto.tipo}</p>
          <p>{producto.detalle}</p>
          <h4 className="text-danger fw-bold">s/{producto.precio.toFixed(2)}</h4>
          <button
            className="btn btn-u mt-3"
            onClick={() => navigate('/mantenimiento')}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductoDetalle;
