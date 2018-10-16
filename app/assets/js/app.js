// Helper functions
const getRandomInt = (max, min) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const toggleSound = () => {
  document.getElementById('fullscreenVideo').muted = !document.getElementById('fullscreenVideo').muted; // toggle state of <video>'s muted property
  return document.getElementById('mute').children[0].textContent === 'volume_up' ? document.getElementById('mute').children[0].textContent = 'volume_off' : document.getElementById('mute').children[0].textContent = 'volume_up'; // toggle reference of material icons
};

// Populate footer with current year
document.querySelector('#currentYear').textContent = new Date().getFullYear();

(function randomVideo() {
  const films = [
    'ami-mon-amie',
    'amour-apres-midi',
    'collectioneuse',
    'conte-automne',
    'conte-ete',
    'femme-aviateur',
    'genou-claire',
    'pauline-plage',
    'nuit-maud',
    'rayon-vert',
  ];
  const rand = getRandomInt(films.length - 1, 0);
  const randImg = films[rand];

  document.getElementById('webm').src = `assets/video/${randImg}.webm`;
  document.getElementById('mp4').src = `assets/video/${randImg}.mp4`;
  document.getElementById('noHtml5Fallback').href = `assets/video/${randImg}.mp4`;
  document.getElementById('fullscreenVideo').poster = `/app/assets/video/${randImg}-poster.jpg`;
  document.getElementById('fullscreenVideo').load();
}()); // run a random video as the page loads
