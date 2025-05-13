import 'bootstrap-icons/font/bootstrap-icons.css';

function Footer() {
  return (
    <footer className="bg-black text-white text-center py-5 w-100">
      <div className="px-4">
        <h5 className="fw-bold mb-4">CLUB UNIVERSITARIO DE DEPORTES</h5>
        <p className="mx-auto" style={{ maxWidth: '900px' }}>
          El Club Universitario de Deportes, conocido popularmente como Universitario o la «U», es una institución deportiva ubicada en el distrito de Ate, en la ciudad de Lima, capital del Perú. Fue fundado el 7 de agosto de 1924, bajo el nombre de «Federación Universitaria de Fútbol», por un grupo de jóvenes estudiantes de la Universidad Nacional Mayor de San Marcos. Su actividad principal es el fútbol y, actualmente, participa en la Primera División del Perú, donde ha militado desde la tercera edición organizada en 1928 por la Federación Peruana de Fútbol, convirtiéndose así en el equipo más antiguo que ha permanecido de manera ininterrumpida en la máxima categoría del fútbol peruano. Además, es uno de los veinticuatro clubes sudamericanos que nunca descendieron de categoría.
        </p>

        <div className="my-4">
          <img
            src="/logo-u.png"
            alt="Universitario"
            width="60"
            height="60"
          />
        </div>

        <div className="d-flex justify-content-center gap-4 fs-4">
          <a
            href="https://www.facebook.com/Universitario/?locale=es_LA"
            className="footer-link"
            title="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/universitario1924/?hl=es"
            className="footer-link"
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/@UniversitarioTVU"
            className="footer-link"
            title="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-youtube"></i>
          </a>
          <a
            href="https://www.tiktok.com/@universitario1924?lang=es"
            className="footer-link"
            title="TikTok"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-tiktok"></i>
          </a>
          <a
            href="https://www.whatsapp.com/channel/0029Va9QYcvEVccCC5MJw00c"
            className="footer-link"
            title="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
