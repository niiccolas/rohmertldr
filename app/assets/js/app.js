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

// Random covers
(function randomVideo() {
  const imgCollection = [
    'pauline-plage0.mp4',
    'pauline-plage1.mp4',
    'pauline-plage2.mp4',
  ];
  const rand = getRandomInt(imgCollection.length - 1, 0);
  document.getElementById('fullscreenVideo').src = `assets/video/${imgCollection[rand]}`;
}());
