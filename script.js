const copyToClipboard = (str) => {
	const el = document.createElement('textarea');
	el.value = str;
	el.setAttribute('readonly', '');
	el.style.position = 'absolute';
	el.style.left = '-9999px';
	document.body.appendChild(el);
	const selected =
		document.getSelection().rangeCount > 0
			? document.getSelection().getRangeAt(0)
			: false;
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
	if (selected) {
		document.getSelection().removeAllRanges();
		document.getSelection().addRange(selected);
	}
};

let buttonLn = document.querySelector('#button-ln');
let buttonBlog = document.querySelector('#button-blog');
let buttonHabr = document.querySelector('#button-habr');
let buttonMedium = document.querySelector('#button-medium');
let buttonGithub = document.querySelector('#button-github');

buttonLn.addEventListener('click', () => copyToClipboard('https://www.linkedin.com/in/arslan-abayev-addtvb/'));
buttonBlog.addEventListener('click', () => copyToClipboard('https://addtvb-code-notes.netlify.app/'));
buttonHabr.addEventListener('click', () => copyToClipboard('https://career.habr.com/arslan-abaev'));
buttonMedium.addEventListener('click', () => copyToClipboard('https://abayew-arslan.medium.com/'));
buttonGithub.addEventListener('click', () => copyToClipboard('https://github.com/addTvb'));
