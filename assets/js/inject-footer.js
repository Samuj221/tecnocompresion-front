document.addEventListener("DOMContentLoaded", () => {
  const footerHTML = `
<footer class="site-footer">
  <div class="footer-container">

    <!-- COLUMNA 1 -->
    <div class="footer-col brand">
      <img src="/assets/img/logo.png" alt="Tecno Compresión SAS">
      <p>Soluciones industriales de alta precisión en sellado, mecanizado y reparación.</p>
    </div>

    <!-- COLUMNA 2 -->
    <div class="footer-col">
      <h4>Enlaces</h4>
      <a href="/index.html">Inicio</a>
      <a href="/nosotros.html">Nosotros</a>
      <a href="/productos.html">Productos</a>
      <a href="/servicios.html">Servicios</a>
      <a href="/contacto.html">Contacto</a>
    </div>

    <!-- COLUMNA 3 -->
    <div class="footer-col">
      <h4>Contacto</h4>
      <p>Bogotá D.C, Colombia</p>
      <p>Kra 112B #64-17</p>
      <p>contacto@tecnocompresion.com</p>
      <p>+57 320 000 0000</p>
    </div>

    <!-- MAPA -->
    <div class="footer-col map">
      <iframe
        src="https://www.google.com/maps?q=Kra%20112B%2064-17%20Bogota&output=embed"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>

  </div>

  <div class="footer-bottom">
    <span>© 2026 Tecno Compresión SAS · Todos los derechos reservados</span>
  </div>
</footer>
`;

  document.body.insertAdjacentHTML("beforeend", footerHTML);
});
