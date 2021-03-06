const rohmerTldr = {
  clips: [
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
  ],

  toggleSound () {
    document.getElementById('fullscreenVideo').muted = !document.getElementById('fullscreenVideo').muted; // toggle state of <video>'s muted property
    return document.getElementById('mute').children[0].textContent === 'volume_up' ? document.getElementById('mute').children[0].textContent = 'volume_off' : document.getElementById('mute').children[0].textContent = 'volume_up'; // toggle reference of material icons
  },

  loadVideoToDOM(vid) {
    const rand = this.getRandomInt(this.clips.length - 1, 0);
    let videoClip;
    // if no argument is passed to the function, pick a random video clip
    vid ? videoClip = vid : videoClip = this.clips[rand];
    // populate DOM with corresponding video clip
    document.getElementById('webm').src = `assets/video/${videoClip}.webm`;
    document.getElementById('mp4').src = `assets/video/${videoClip}.mp4`;
    document.getElementById('noHtml5Fallback').href = `assets/video/${videoClip}.mp4`;
    document.getElementById('fullscreenVideo').poster = `/app/assets/video/${videoClip}-poster.jpg`;
    document.getElementById('fullscreenVideo').load();
  },

  setPlayerHeight() {
    let headerHeight = document.querySelector('.header').clientHeight;
    let viewportHeight = window.innerHeight;
    document.querySelector('#video-container').style.height = (viewportHeight - headerHeight) + 'px';

    document.querySelector('#video-container').style.opacity = 1; //  fade-in video clip on load
  },

  setListener() {
    const thumbnails = document.querySelectorAll('img');
    thumbnails.forEach(x => x.addEventListener('click', this.getThumbFilename.bind(this)));
  },

  getThumbFilename(e) {
    const filename = e.target.src.match(/[^/]+$/)[0].slice(0, -4); // get the filename from the src url
    this.loadVideoToDOM(filename);
    this.scrollToTop(300);
  },

  setYear() { // Populate footer with current year
    document.querySelector('#currentYear').textContent = `- ${new Date().getFullYear()}`;
  },

  scrollToTop(scrollDuration) { // https://stackoverflow.com/questions/21474678/scrolltop-animation-without-jquery#24559613
    const scrollHeight = window.scrollY;
    const scrollStep = Math.PI / ( scrollDuration / 15 );
    const cosParameter = scrollHeight / 2;
    let scrollCount = 0;
    let scrollMargin;
    let scrollInterval = setInterval(() => {
      if (window.scrollY != 0) {
        scrollCount = scrollCount + 1;
        scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
        window.scrollTo(0, (scrollHeight - scrollMargin));
      }
      else clearInterval(scrollInterval);
    }, 15);
  },

  getRandomInt (max, min) { // Helper function
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
  },

  loadApp() {
    this.loadVideoToDOM(); // run a random MUTED video as the page loads
    this.setPlayerHeight(); // adapt video player's height to viewport height
    this.setListener(); // listen for clicks on clip thumbnails
    this.setYear();
  },
};

window.onload = rohmerTldr.loadApp.bind(rohmerTldr); // bind the object method to the object
window.addEventListener('resize', rohmerTldr.setPlayerHeight);
