// Select size input
const createGridBtn = $('#create-grid');
// Select Reset button
const resetBtn = $('#reset');
// Select Clear Grid button
const clearBtn = $('#clear-grid')
// Select height and width input
const inputRows = $('#input-rows');
const inputColumns = $('#input-columns');
// Select color input
const colorInput = $('#color-picker');
// Select table
const pixelCanvas = $('#pixel-canvas');
// Rows and columns
const row = '<tr></tr>';
const column = '<td></td>';

// RESET page
function reset(){
    removeGrid();
    colorInput.val('#4286f4');
    selectedColor = colorInput.val();
    inputRows.val(10);
    inputColumns.val(10);
    currentGridRows = 0;
    inputRows.css('color', '');
    inputColumns.css('color', '');
}

resetBtn.click(reset);


// When size is submitted by the user, call makeGrid()

function makeGrid() {

    // Your code goes here!
    
    }
    


