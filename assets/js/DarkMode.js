const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Changer la source de l'image en fonction du thème actif
  if (body.classList.contains('dark-mode')) {
    themeToggle.src = 'assets/img/iconMode/soleil.png'; // Changer vers l'image sombre
  } else {
    themeToggle.src = 'assets/img/iconMode/lune.png'; // Changer vers l'image claire
  }
});