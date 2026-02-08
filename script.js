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
