// Dados do negócio — atualizar com os valores reais.
const CONFIG = {
  whatsappDigits: "351912345678", // indicativo + número, sem espaços nem "+"
};

document.getElementById("year").textContent = new Date().getFullYear();

// Menu mobile
const navToggle = document.getElementById("nav-toggle");
const siteNav = document.getElementById("site-nav");

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Formulário de agendamento -> WhatsApp
const bookingForm = document.getElementById("booking-form");

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = bookingForm.nome.value.trim();
  const telefone = bookingForm.telefone.value.trim();
  const morada = bookingForm.morada.value.trim();
  const data = bookingForm.data.value;
  const hora = bookingForm.hora.value;
  const notas = bookingForm.notas.value.trim();

  const linhas = [
    "Olá! Gostaria de agendar uma recolha.",
    `Nome: ${nome}`,
    `Telefone: ${telefone}`,
    `Morada de recolha: ${morada}`,
  ];
  if (data) linhas.push(`Data preferida: ${data}`);
  if (hora) linhas.push(`Hora preferida: ${hora}`);
  if (notas) linhas.push(`Observações: ${notas}`);

  const mensagem = encodeURIComponent(linhas.join("\n"));
  const url = `https://wa.me/${CONFIG.whatsappDigits}?text=${mensagem}`;
  window.open(url, "_blank", "noopener");
});
