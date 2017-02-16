/**
 * Created by Tocet on 13.02.2017.
 * New DOM elements;
 * New Matrix array
 */

// функция создания поля

let create = () => {
	let tableRows = creationField(TABLE, FIELD);
	for(let i = 0; i < TABLE_STR.td; i++) creationField(TABLE_STR, tableRows);

	creationMatrix();
};


// функция установки елементов в DOM дерево

let creationField = (obj, par) =>  {
	let parent = par;

	for(let k in obj) {
		for(let i = 0; i < obj[k]; i++) {
			let elem = document.createElement(k);
			parent.appendChild(elem);
		}

		parent = parent.lastChild;
	}

	return parent
};

// функция создания матрицы для записи и подщёта результатов

let creationMatrix = () => {
	matrix = new Array(TABLE_STR.td);
	for(let i = 0; i < TABLE_STR.td; i++) {
		matrix[i] = new Array(TABLE_STR.td);

		for(let k = 0; k < TABLE_STR.td; k++) {
			matrix[i][k] = EMPETY;

		}
	}
};