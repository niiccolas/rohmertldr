/* global document */

// Helper function
function getRandomInt(max, min) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

// Populate footer with current year
document.querySelector('#currentYear').textContent = new Date().getFullYear();

// Random covers
(function randomizeCover() {
  const imgCollection = [
    'ami-mon-amie.jpg',
    'collectioneuse.png',
    'conte-ete.jpg',
    'genou-claire.jpg',
    'nuit-maud.jpg',
    'amour-apres-midi.jpg',
    'conte-automne.jpg',
    'femme-aviateur.jpg',
    'rayon-vert.jpg',
  ];
  const rand = getRandomInt(0, imgCollection.length);
  document.querySelector('.film').style.background = `url('./assets/img/${imgCollection[rand]}') no-repeat`;
  document.querySelector('.film').style.backgroundSize = 'cover';
}());
