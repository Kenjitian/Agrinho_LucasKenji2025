function mostrarFrase() {
  const frases = [
    "Educar é semear com sabedoria e colher com paciência.",
    "Cada atitude consciente é um passo para um planeta melhor.",
    "Cidadania se aprende praticando todos os dias.",
    "Conhecimento transforma vidas e constrói futuros.",
    "Educação é o alicerce da liberdade."
  ];

  const index = Math.floor(Math.random() * frases.length);
  const frase = frases[index];

  const display = document.getElementById("frase");
  display.textContent = frase;
  display.style.color = "#2e7d32";
  display.style.fontWeight = "bold";
}
