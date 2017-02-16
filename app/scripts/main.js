const NEW_GAME = document.querySelector('.new-game');
const FIELD = document.querySelector('.field');

// матрицы для циклов создания поля

const TABLE = {
	table: 1,
	tbody: 1
};

const TABLE_STR = {
	tr: 1,
	td: 3
};

const X = 'X';
const O = 'O';
const EMPETY = 0;

// тут будет записанно значение победителя, если EMPETY то победителя нет
let win = EMPETY;

// главный массив для обработки результатов
let matrix;

// вешаем обработчики событий на кнопки

let init = () => {
	NEW_GAME.addEventListener('click', () => newGame());
	FIELD.addEventListener('click',(event)=> {
		if(FIELD.querySelector('tbody') != null) {
			clickCell(event)
		}
	});
};

// очистка старого поля

let clear = () => {
	let oldGame = FIELD.firstChild;

	FIELD.removeChild(oldGame);

	matrix = new Array(TABLE_STR.td);
	win = EMPETY;
};

// Запускаем новую игру

let newGame = () => {
	if(FIELD.firstChild != null) {
		clear();
	}

	create();
	decorate();
};

// _____initialization_____

init();
