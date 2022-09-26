//reset button declaration and event listener//
const resetButton = document.getElementById("reset");
resetButton.addEventListener('click', shake);


document.getElementById('sketchpad').addEventListener('mouseover', function(e) {
    e.target.classList.add('colorDiv'); //add class list to divs that are hovered - for styling//
})
//declare sketchpad// 
const sketchpad = document.getElementById('sketchpad');

// declare slider variables for Event Listener // 
let slider = document.getElementById("range");
let output = document.getElementById("value");

// add Event Listener and store info in variable for grid size //
slider.addEventListener('mouseup', function() {
    let gridSize = slider.value;
    console.log(gridSize);

    createGrid(gridSize); //initiate function on slider change// 

    function createGrid() {
        let rows = gridSize;
        let finalGridSize = rows ** 2; //determine grid size//
        for (let i = 0; i < finalGridSize; i++) {
            const gridItem = document.createElement('div'); //create the divs// 
            gridItem.className = 'sketchpad-div' //create a class for the newly created divs//
            sketchpad.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`; //sizing and styling of basic grid//
            sketchpad.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`; //sizing and styling of basic grid//
            sketchpad.append(gridItem); //add grid to sketchpad div//
        }
    }
})

function shake() {
    const gridItems = document.querySelectorAll('.sketchpad-div')
    gridItems.forEach((item) => {
        item.className = 'sketchpad-div'; //reset class name to reset sketchpad// 
    })
}