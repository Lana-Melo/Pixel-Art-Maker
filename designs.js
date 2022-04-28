// set global variables that will be used in both event listeners
const submitButton = document.querySelector("input[type='submit']");
const canvas = document.querySelector("#pixelCanvas");


// listen to the 'click' event on the 'submit' input to create a new grid
submitButton.addEventListener("click", function makeGrid(event) {
	// prevent to refresh the page after clicking on the 'submit' input
	event.preventDefault();
	// if the page already has a grid, then remove all canvas cells before
	// creating a new grid based on the size the user set
	while (canvas.firstChild) {
		canvas.removeChild(canvas.firstChild);
	}
	const heightInput = document.querySelector("#inputHeight");
	const widthInput = document.querySelector("#inputWidth");
	const rows = heightInput.value;
	const columns = widthInput.value;
	// create white rows and columns according to the values the user set
	for (let row = 1; row <= rows; row++) {
		const newRow = document.createElement('tr');
		canvas.appendChild(newRow);
		newRow.style.backgroundColor = "white";
		for (let column = 1; column <= columns; column++) {
			const newColumn = document.createElement('td');
			newRow.appendChild(newColumn);
			newColumn.style.backgroundColor = "white";
		}
	}
});


// listen to the 'click' event on the 'canvas' element and change the
// cell background-color to the chosen color from the colorPicker input
canvas.addEventListener("click", function paintCell(event) {
	const colorPicker = document.querySelector("#colorPicker");
	const color = colorPicker.value;
	event.target.style.backgroundColor = color;
});