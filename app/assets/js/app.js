// Helper functions
const getRandomInt = (max, min) => {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

const toggleSound = () => {
  document.getElementById('fullscreenVideo').muted = !document.getElementById('fullscreenVideo').muted;
  return document.getElementById('mute').children[0].textContent === "volume_up" ? document.getElementById('mute').children[0].textContent = "volume_off" : document.getElementById('mute').children[0].textContent = "volume_up";
}

// Populate footer with current year
document.querySelector('#currentYear').textContent = new Date().getFullYear();

(function randomVideo() {
  const imgCollection = [
    'pauline-plage',
    'conte-ete',
    'amour-apres-midi',
    'nuit-maud',
    'rayon-vert'
  ];
  const rand = getRandomInt(imgCollection.length - 1, 0);
  const randImg = imgCollection[rand];

  console.log(randImg);
  // document.getElementById('fullscreenVideo').src = `assets/video/${imgCollection[rand]}`;
  document.getElementById('webm').src = `assets/video/${randImg}.webm`;
  document.getElementById('mp4').src = `assets/video/${randImg}.mp4`;
  document.getElementById('noHtml5Fallback').href = `assets/video/${randImg}.mp4`;
  document.getElementById('fullscreenVideo').poster = `/app/assets/video/${randImg}-poster.jpg`;
  document.getElementById('fullscreenVideo').load();
}());
