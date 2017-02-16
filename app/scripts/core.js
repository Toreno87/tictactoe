/**
 * Created by Tocet on 13.02.2017.
 * checkWinner
 * clickCell
 * compTurn
 */

// получаем доступ к ячейке

let getCell = (x, y) => {
	let row = FIELD.querySelector('tbody').childNodes[x];

	return row.childNodes[y];
};

// устанавливаем новое значение в ячейке

let setCell = (x, y, value) => matrix[x][y] = value;

// получаем случайное число для функции хода комп.

let random = (min, max) => {
	let rand = min + Math.random() * (max + 1 - min);
	rand = Math.floor(rand);
	return rand;
};

// обрабатываем событие клика по полю

let clickCell = (event) => {

	let rowIndex = event.toElement.parentNode.rowIndex;
	let cellIndex = event.toElement.cellIndex;
	let matrixCell = matrix[rowIndex][cellIndex];

	// установка крестика на поле

	if(matrixCell == EMPETY) {
		event.toElement.innerHTML = X;
		let valCell = event.toElement.textContent;

		setCell(rowIndex, cellIndex, valCell);

		// проверка победы и если нет переход к ходу комп.
		checkWin(X, 'YOU WIN');

		if(win == X) return false;
		else if (endGame() != false) compTurn();

	}
	else {
		return false
	}

};

// ход компьютера

let compTurn = () => {

	// бесконечно ходим по циклу пока не найдём пустую ячейку для установки 0

	while(true) {
		let rowRand = random(0,2);
		let cellRand = random(0,2);
		let cell = getCell(rowRand, cellRand);

		if(cell.textContent == EMPETY) {
			cell.innerHTML = O;
			setCell(rowRand, cellRand, O);
			break
		}
	}

	checkWin(O, 'YOU LOSE');
};

// проверка на наличие пустых ячеек, если все заполненны то передаём false

let endGame = () => {
	for(let i = 0; i < TABLE_STR.td; i++) {
		for(let k = 0; k < TABLE_STR.td; k++) {
			if(matrix[i][k] == EMPETY) return true;
		}
	}

	statusBtn('AGAIN?','btn btn-lg new-game btn-warning');
	return false
};


// функция проверки условий победы

let checkWin = (g, value) => {
	let cell1;
	let cell2;
	let cell3;

	for(let i = 0; i < TABLE_STR.td; i++) {
		cell1 = matrix[i][0];
		cell2 = matrix[i][1];
		cell3 = matrix[i][2];

		winer(g, value, cell1,cell2,cell3);

		cell1 = matrix[0][i];
		cell2 = matrix[1][i];
		cell3 = matrix[2][i];

		winer(g, value, cell1,cell2,cell3);
	}

	cell1 = matrix[0][0];
	cell2 = matrix[1][1];
	cell3 = matrix[2][2];

	winer(g, value, cell1,cell2,cell3);

	cell1 = matrix[2][0];
	cell2 = matrix[1][1];
	cell3 = matrix[0][2];

	winer(g, value, cell1,cell2,cell3);
};

// вспомогательная функция для прощёта

let winer = (gamer, value, c1, c2, c3) => {
	if(c1 == gamer && c2 == gamer && c3 == gamer) {
		win = gamer;
		statusBtn(value,'btn btn-lg new-game btn-warning');
	}
};


