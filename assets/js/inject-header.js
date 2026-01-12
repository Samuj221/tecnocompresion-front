document.addEventListener("DOMContentLoaded", () => {
  const headerHTML = `
<header class="site-header" id="mainHeader">
  <div class="header-container">

    <!-- LOGO -->
    <a href="/index.html" class="logo">
      <img src="/assets/img/logo.png" alt="Tecno Compresión SAS">
      <span class="logo-ring"></span>
    </a>

    <!-- NAV DESKTOP -->
    <nav class="nav-desktop">
      <a href="/index.html">Inicio</a>
      <a href="/nosotros.html">Nosotros</a>
      <a href="/productos.html">Productos</a>
      <a href="/servicios.html">Servicios</a>
      <a href="/proyectos.html">Proyectos</a>
      <a href="/contacto.html">Contacto</a>
    </nav>

    <!-- ACTIONS -->
    <div class="header-actions">
      <button id="themeToggle" aria-label="Cambiar tema">🌙</button>
      <button class="menu-btn" id="menuBtn" aria-label="Abrir menú">
        <span></span><span></span><span></span>
      </button>
    </div>

  </div>

  <!-- NAV MOBILE -->
  <nav class="nav-mobile" id="mobileMenu">
    <a href="/index.html">Inicio</a>
    <a href="/nosotros.html">Nosotros</a>
    <a href="/productos.html">Productos</a>
    <a href="/servicios.html">Servicios</a>
    <a href="/proyectos.html">Proyectos</a>
    <a href="/contacto.html">Contacto</a>
  </nav>
</header>
`;

  /* ===== INYECTAR HEADER ===== */
  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  /* ===== ELEMENTOS ===== */
  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("mobileMenu");
  const header = document.getElementById("mainHeader");
  const logo = document.querySelector(".logo");

  /* ===== MENÚ MOBILE ===== */
  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    menu.classList.toggle("active");
  });

  /* ===== SCROLL EFFECT HEADER ===== */
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Header sticky + blur
    if (scrollY > 60) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Micro movimiento del logo
    logo.style.transform = `translateY(${Math.min(scrollY / 25, 6)}px)`;
  });
  
});
