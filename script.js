function openWhatsApp() {
  fbq('track', 'Contact');
  fbq('track', 'Lead');

  const text = encodeURIComponent(
    "Olá, gostaria de conversar sobre um projeto de sistema sob medida."
  );

  window.open(
    "https://wa.me/5511963266825?text=" + text,
    "_blank"
  );
}
