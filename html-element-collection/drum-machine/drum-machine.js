const drumKit = document.getElementsByClassName('drum-kit__drum');
const sound = document.getElementsByTagName('audio');

for (let i = 0; i	< sound.length; i++) {
	drumKit[i].onclick = () => sound[i].play();
}