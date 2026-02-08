function leadWhatsapp() {
  fbq('track', 'Contact');
  fbq('track', 'Lead');

  const msg = encodeURIComponent(
    "Olá, quero um sistema sob medida para minha empresa."
  );

  window.open(
    "https://wa.me/5511963266825?text=" + msg,
    "_blank"
  );
}
