document.addEventListener("submit", e => {
  if (e.target.matches(".contact-form")) {
    e.preventDefault();
    alert("Formulario enviado correctamente");
    e.target.reset();
  }
});
