/**
 * Created by Sam on 13.02.2017.
 * decorate game field & start button
 */

// декорирование полей ячейки

let decorate = () => {
	FIELD.querySelector('table').style.width = '100%';
	FIELD.querySelector('table').style.height = '520px';

	let sells = FIELD.querySelectorAll('td');
	sells.forEach((item) => {
		item.style.border = '1px solid #000';
		item.style.backgroundColor = '#e5e5e5';
		item.style.textAlign = 'center';
		item.style.fontSize = '110px';
		item.style.width = '33%';
		item.style.height = '33%';
	});

	statusBtn('RESTART','btn btn-lg new-game btn-danger');
};

// устаналиваем разные статусы на кнопку

let statusBtn = (text, classes) => {
	NEW_GAME.innerText = text;
	NEW_GAME.className = classes;
};