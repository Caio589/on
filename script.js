function openWhatsApp() {
  // Eventos de conversão
  fbq('track', 'Contact');
  fbq('track', 'Lead');

  const mensagem = encodeURIComponent(
    "Olá, gostaria de conversar sobre um projeto de sistema sob medida."
  );

  window.open(
    "https://wa.me/5511963266825?text=" + mensagem,
    "_blank"
  );
}
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

reveals.forEach(section => {
  observer.observe(section);
});
