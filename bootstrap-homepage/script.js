(() => {
  'use strict';

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (!form || !status) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.classList.add('d-none');

    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add('was-validated');
      return;
    }

    form.classList.add('was-validated');
    status.classList.remove('d-none');
  });
})();
