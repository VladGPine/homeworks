'use strict';

function showComments(list) {
	const commentsContainer = document.querySelector('.comments');
	const comments = list.forEach((data) => {
		commentsContainer.appendChild(createComment(data));
	});
}
function createEl(type, className, title, style) {
	let element = document.createElement(type);
	element.className = className;
	if (title) {
		element.title = title;
	}
	if (style) {
		element.style.cssText = style;
	}
	return element;
}

function createComment(comment) {
	let wrapper = createEl('div', 'comment-wrap')
	let photoDiv = createEl('div', 'photo', comment.author.name);
	let divAva = createEl('div', 'avatar', false, 'background-image: url(' + comment.author.pic + ')');
	photoDiv.appendChild(divAva);
	wrapper.appendChild(photoDiv);
	let commentBlock = createEl('div', 'comment-block');
	let commentText = createEl('p', 'comment-text')

	comment.text.split('\n').map((data) => {
		let tn = document.createTextNode(data);
		commentText.appendChild(tn);
		commentText.appendChild(document.createElement('br'));
	});
	commentBlock.appendChild(commentText);
	let bottomComment = createEl('div', 'bottom-comment');
	let commentDate = createEl('div', 'comment-date');
	commentDate.innerText = new Date(comment.date).toLocaleString('ru-Ru');
	bottomComment.appendChild(commentDate);
	let commentActions = createEl('ul', 'comment-actions');
	let liComplain = createEl('li', 'complain');
	liComplain.textContent = 'Пожаловаться';
	let liReply = createEl('li', 'reply');
	liReply.textContent = 'Ответить';
	commentActions.appendChild(liComplain);
	commentActions.appendChild(liReply);
	bottomComment.appendChild(commentActions);
	commentBlock.appendChild(bottomComment);
	wrapper.appendChild(commentBlock);
	return wrapper;
}


fetch('https://neto-api.herokuapp.com/comments')
	.then(res => res.json())
	.then(showComments);