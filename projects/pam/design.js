// Cache DOM lookups
const colorpick = $("#color-picker"),
columns = $("#input-height"),
rows = $("#input-width"),
canvas = $("#pixel-canvas");

//Mouse Events
$(canvas).on("mousedown mouseover", "td", function(event) {
    let color = colorpick.val();
    event.preventDefault();

    if(event.buttons == 1) {
        $(this).css('background-color', color);
    } 
});

//Make Grid 
function makeGrid() {
    //clear the grid
    canvas.empty(); 

    //pick up row and column values
    let rows = $("#input-height").val();
    let columns = $("#input-width").val(); 

    //create empty array for new grid
    let grid = []; 
    
    //create grid for array
    for (let r = 0; r < rows; r++) {
        grid.push("<tr>"); //start a row in the array
            for (let c = 0; c < columns; c++) {
                grid.push("<td></td>"); //add cells to the row
            }
        grid.push("</tr>"); //close the row
        }
    canvas.append(grid); //add grid to the table
    } 


// clear grid
$("#reset-button").on('click', function() {
    canvas.empty();
});

//Input Limiter
$('input[type=number]').on('input', function () {
    
    var value = $(this).val();
    
    if ((value !== '') && (value.indexOf('.') === -1)) {
        
        $(this).val(Math.max(Math.min(value, 75), 1));
    }
});

// run makeGrid
$(function() {
    makeGrid();
    
    $("#submit-button").click(function(event){
        event.preventDefault();
        makeGrid();
    });
});

