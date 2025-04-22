// Menu burger pour mobile
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});
let currentProject = 0;
const projects = document.querySelectorAll('.projet-item');
const indicators = [];
const totalProjects = projects.length;

// Créer les indicateurs
const indicatorContainer = document.createElement('div');
indicatorContainer.classList.add('projet-indicator');
projects[0].parentNode.appendChild(indicatorContainer);

projects.forEach((project, index) => {
  const indicator = document.createElement('span');
  indicator.addEventListener('click', () => {
    currentProject = index;
    updateCarousel();
  });
  indicatorContainer.appendChild(indicator);
  indicators.push(indicator);
});

// Fonction pour afficher un projet
function showProject(index) {
  projects.forEach((project, i) => {
    project.style.display = 'none'; // Cacher tous les projets
    project.style.opacity = '0'; // Réinitialiser l'opacité
    indicators[i].classList.remove('active'); // Réinitialiser les indicateurs
  });
  
  projects[index].style.display = 'flex'; // Afficher le projet actuel
  projects[index].style.opacity = '1'; // Appliquer l'opacité à 1
  indicators[index].classList.add('active'); // Activer l'indicateur

  // Appliquer l'animation fade-in
  projects[index].style.animation = 'fadeIn 1s ease-in-out';
}

// Passer au projet suivant
function nextProject() {
  currentProject = (currentProject + 1) % totalProjects;
  updateCarousel();
}

// Mettre à jour le carrousel
function updateCarousel() {
  showProject(currentProject);
}

// Initialisation
showProject(currentProject);

// Changer de projet toutes les 3 secondes
setInterval(nextProject, 3000);
