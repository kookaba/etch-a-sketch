const container = document.querySelector('.canvas');
const gridColumns = document.getElementsByClassName('grid-column');
const gridBoxes = document.getElementsByClassName('grid-box');
const brushButton = document.getElementById('brush');
const currentColor = document.getElementById('brush-color');
const rainbowButton = document.getElementById('rainbow');
const eraserButton = document.getElementById('eraser');
const clearButton = document.getElementById('clear');
const sizeValue = document.getElementById('size');
const slider = document.getElementById('size-slider');
const sizeButton = document.getElementById('set-size');
const setBackgroundColor = 'white';
var clickStatus = false;
var size = 16;
var mode = 'brush';
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
        newCol.classList.add('grid-column');
        container.appendChild(newCol);
        for (y=1; y<size+1; y++) {
            var newBox = document.createElement('div')
            newBox.id = 'row'+x+'box'+y;
            newBox.classList.add('grid-box');
            newCol.appendChild(newBox);
        }
    }

    sizeValue.innerHTML = slider.value;

    //adds event listeners to all grid boxes
    for (const box of gridBoxes) {
        box.addEventListener('mouseenter', toggleHover, false);
        box.addEventListener('mouseleave', toggleHover, false);
        box.addEventListener('mousedown', mouseDown, false);
        box.addEventListener('mouseup', mouseUp, false);
        box.addEventListener('mousedown', this.paint, false);
        box.addEventListener('mouseenter', this.paint, false);
    }

}

//adds and removes the .hover class from grid boxes creating a shadow effect when cursor is hovering
function toggleHover() {
    this.classList.toggle('hover');
}

function paint() {
    switch(mode) {
        case 'brush':
            if (clickStatus === true) {
                this.style.background = currentColor.value;
            }
            break;
        case 'eraser':
            if (clickStatus === true) {
                this.style.removeProperty('background');
            }
            break;
    }

}

function mouseDown() {
    clickStatus = true;
}

function mouseUp() {
    clickStatus = false;
}

function selectBrush() {
    mode = 'brush';
    return mode;
}

function selectRainbow() {
    mode = 'rainbow';
    return mode;
}

function selectEraser() {
    mode = 'eraser';
    return mode;
}

function clearGrid() {
    for (const box of gridBoxes) {
        box.style.removeProperty('background');
    }
}

function showSize() {
    sizeValue.innerHTML = slider.value;
}

function selectSize() {
    var colChild = container.lastElementChild;
    while (colChild) {
        var boxChild = colChild.lastElementChild;
        while (boxChild) {
            colChild.removeChild(boxChild);
            boxChild = colChild.lastElementChild;
        }
        container.removeChild(colChild);
        colChild = container.lastElementChild;
    }
    createGrid(slider.value * 1);
    console.log('selection');
}

brushButton.addEventListener('click', selectBrush, false);
rainbowButton.addEventListener('click', selectRainbow, false);
eraserButton.addEventListener('click', selectEraser, false);
clearButton.addEventListener('click', clearGrid, false);
slider.addEventListener('mouseup', showSize, false);
sizeButton.addEventListener('click', selectSize, false);

createGrid(slider.value * 1);