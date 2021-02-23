import MediaPlayer from './mediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video');
const button = document.querySelector('button');
const buttonMute = document.getElementById('btnMute');

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

button.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();
