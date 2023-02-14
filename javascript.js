const container = document.querySelector('.canvas');
const gridBoxes = document.getElementsByClassName('grid-box');
const brushButton = document.getElementById('brush');
const eraserButton = document.getElementById('eraser');
const clearButton = document.getElementById('clear');
const sizeButton = document.getElementById('set-size');
const setBackgroundColor = 'white';
var mode = 'brush';
var currentColor = 'black';
var currentColor = 'black'
container.style.display = 'flex';
container.style.flexDirection = 'row';
container.style.border = '1px solid black';


console.log(gridBoxes);

function createGrid(size) {

    for (x=1; x<size+1; x++) {
        var newCol = document.createElement('div')
        newCol.style.display = 'flex';
        newCol.style.flexDirection = 'column';
        newCol.style.flex = '1 1 auto';
        newCol.id = 'column'+x;
        container.appendChild(newCol);
        for (y=1; y<size+1; y++) {
            var newBox = document.createElement('div')
            newBox.id = 'row'+x+'box'+y;
            newBox.class = 'grid-box';
            newBox.classList.add('grid-box');
            newCol.appendChild(newBox);
        }
    }
    //adds event listeners to all grid boxes
    for (const box of gridBoxes) {
        box.addEventListener('mouseenter', toggleHover, false);
        box.addEventListener('mouseleave', toggleHover, false);
        box.addEventListener('click', this.paint, false);
    }

}

//adds and removes the .hover class from grid boxes creating a shadow effect when cursor is hovering
function toggleHover() {
    this.classList.toggle('hover');
    console.log('hover');
}

function paint() {
    switch(mode) {
        case 'brush':
            console.log('brush brush brush');
            this.style.background = currentColor;
            break;
        case 'eraser':
            console.log('erase erase erase');
            this.style.removeProperty('background');
            break;
    }

    for (const box of gridBoxes) {
        box.addEventListener('mouseenter', toggleHover, false);
        box.addEventListener('mouseleave', toggleHover, false);
        box.addEventListener('click', this.paint, false);
    }
}

function selectBrush() {
    mode = 'brush';
    console.log('Brush Selected');
    return mode;
}

function selectEraser() {
    mode = 'eraser';
    console.log('Eraser Selected');
    return mode;
}

function clearGrid() {
    for (const box of gridBoxes) {
        box.style.removeProperty('background');
    }
    console.log('Grid Cleared');
}

function selectSize() {
    console.log('Size Selection');
}

brushButton.addEventListener('click', selectBrush, false);
eraserButton.addEventListener('click', selectEraser, false);
clearButton.addEventListener('click', clearGrid, false);
sizeButton.addEventListener('click', selectSize, false);

createGrid(16);


