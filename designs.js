// Select color input
var colorInput = $("#color-picker");
let selectedColor = colorInput.val();

// Select size input
var createGridBtn = $("#create-grid");
// Select Reset button
var resetBtn = ("#reset");
var clearBtn = $("#clear-grid");
// Select height and width input
 var inputRows = $("#input-rows");
 var inputColumns = $("#input-columns");
 // Table
 var row = '<tr></tr>';
 var column = '<td></td>';
 var pixelCanvas = $('#pixel-canvas');

 //Reset page
 function reset(){
     removeGrid();
     colorInput.val('#4286f4');
     selectedColor =  colorInput.val();
     inputRows.val(10);
     inputColumns.val(10);
     currentGridRows = 0;
     inputRows.css('color','');
     inputColumns.css('color','');
 }
// Event listener Reset page
 resetBtn.click(reset);

 //clear grid
  function clearGrid(){
      pixelCanvas.children().remove();
  }
 

// When size is submitted by the user, call makeGrid()

function makeGrid() {
 clearGrid();
 var gridWidth = inputWidth.val();
 var gridHeight = inputHeight.val();
 //append to table by creating row
 for(var i= 1; i <= gridHeight; i++)
    pixelCanvas.append(rows);
}
// create columns
for(var j = 1; j <= gridWidth; j++){
    pixelCanvas.children().append(column);
}
// Size value
 var gridRows = inputRows.val();
 var gridColumns = inputColumns.val();
 // Append to table if input is 150 or less
if (gridRows <= 150 && gridColumns <= 150){
// Create rows
for(var i = 1; i <= gridRows; i++){
    pixelCanvas.append(row);
}
// Create columns
for(let j = 1; j <= gridColumns; j++){
     pixelCanvas.children().append(column);
 }
}
