// Helper functions
const getRandomInt = (max, min) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const toggleSound = () => {
  document.getElementById('fullscreenVideo').muted = !document.getElementById('fullscreenVideo').muted; // toggle state of <video>'s muted property
  return document.getElementById('mute').children[0].textContent === 'volume_up' ? document.getElementById('mute').children[0].textContent = 'volume_off' : document.getElementById('mute').children[0].textContent = 'volume_up'; // toggle reference of material icons
};

// Smooth top scrolling function
// https://stackoverflow.com/questions/21474678/scrolltop-animation-without-jquery#24559613
function scrollToTop(scrollDuration) {
  const scrollHeight = window.scrollY;
  const scrollStep = Math.PI / ( scrollDuration / 15 );
  const cosParameter = scrollHeight / 2;
  let scrollCount = 0;
  let scrollMargin;
  let scrollInterval = setInterval(function () {
    if (window.scrollY != 0) {
      scrollCount = scrollCount + 1;
      scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
      window.scrollTo(0, (scrollHeight - scrollMargin));
    }
    else clearInterval(scrollInterval);
  }, 15);
}

// Populate footer with current year
document.querySelector('#currentYear').textContent = new Date().getFullYear();

function loadVideoToDOM(vid) {
  const clips = [
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
  const rand = getRandomInt(clips.length - 1, 0);
  let videoClip;

  vid ? videoClip = vid : videoClip = clips[rand]; // if no argument is passed to the function, pick a random clip

  document.getElementById('webm').src = `assets/video/${videoClip}.webm`;
  document.getElementById('mp4').src = `assets/video/${videoClip}.mp4`;
  document.getElementById('noHtml5Fallback').href = `assets/video/${videoClip}.mp4`;
  document.getElementById('fullscreenVideo').poster = `/app/assets/video/${videoClip}-poster.jpg`;
  document.getElementById('fullscreenVideo').load();
}

const thumbnails = document.querySelectorAll('img')
const getThumbFilename = function(e) {
  const filename = e.target.src.match(/[^/]+$/)[0].slice(0,-4); // get the filename from the src url
  loadVideoToDOM(filename);
  scrollToTop(300);
};
thumbnails.forEach(x => x.addEventListener('click', getThumbFilename));

window.onload = loadVideoToDOM(); // run a random MUTED video as the page loads
