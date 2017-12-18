const contentForm = document.querySelector('.contentform');
const sendMsg = document.querySelector('.contentform .button-contact');
const outputMsg = document.getElementById('output');
const editMsg = document.querySelector('main .button-contact');
const inputs = Array.from(contentForm.getElementsByTagName('input'));
inputs.push(contentForm.getElementsByTagName('textarea')[0]);
const zip = document.querySelector('input[name=zip]');

contentForm.addEventListener('input', function validateFields() {
	let result = true;
	for (let item of inputs) {
		if (!item.value) {
			result = false;
			break;
		}
	}
	sendMsg.disabled = !result;
});

let postalCode;
zip.addEventListener('keyup', function onlyNumbers(eo) {
	postalCode = zip.value.split('');
	if (postalCode[postalCode.length - 1].match(/\D/ig)) {
		postalCode.pop();
		zip.value = postalCode.join('');
	};
});

sendMsg.addEventListener('click', function showMsg(eo) {
	eo.preventDefault();
	for (let item of inputs) {
		let outItem = outputMsg.querySelector(`#${item.name}`);
		if (outItem) {
			outItem.value = item.value;
		}
	}
	contentForm.classList.add('hidden');
	outputMsg.classList.remove('hidden');
});

editMsg.addEventListener('click', function showForm() {
	contentForm.classList.remove('hidden');
	outputMsg.classList.add('hidden');
});