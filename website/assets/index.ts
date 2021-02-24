import MediaPlayer from '@aguscorvo/platzimediaplayer';
import AutoPlay from '@aguscorvo/platzimediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@aguscorvo/platzimediaplayer/lib/plugins/AutoPause';
import Ads from '@aguscorvo/platzimediaplayer/lib/plugins/Ads';

const video = document.querySelector('video');
const buttonPlay: HTMLElement = document.querySelector('button');
const buttonMute: HTMLElement = document.getElementById('btnMute');

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  });
}
