const container = document.querySelector('.canvas');
const gridBoxes = document.getElementsByClassName('grid-box');
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


}

//adds and removes the .hover class from grid boxes creating a shadow effect when cursor is hovering
function toggleHover() {
    this.classList.toggle('hover');
}

function paint() {
    this.style.background = currentColor;
}

//calls createGrid with size 16x16. 256 is the max
createGrid(4);

//adds event listeners to all grid boxes
for (const box of gridBoxes) {
    box.addEventListener('mouseenter', toggleHover, false);
    box.addEventListener('mouseleave', toggleHover, false);
    box.addEventListener('click', this.paint, false);
}


/*
var gridBoxes = document.getElementsByClassName('grid-box');
for (i in gridBoxes) {
    console.log(gridBoxes[i]);
    gridBoxes[i].addEventListener('mouseenter', toggleHover, false);
    gridBoxes[i].addEventListener('mouseleave', toggleHover, false);
    gridBoxes[i].addEventListener('click', toggleHover, false);
}
*/