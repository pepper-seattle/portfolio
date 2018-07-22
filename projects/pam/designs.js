// Cache DOM lookups
let pixelCanvas = document.getElementById('pixelCanvas');
let reset = document.getElementById('resetButton');
let submit = document.getElementById('submitButton');

//Empty canvas function
const emptyCanvas = () => {
    while(pixelCanvas.rows.length>0) {
        pixelCanvas.deleteRow(0);
    }
};

//Make Grid 
const makeGrid = () => {
    pixelCanvas.innerHTML = "";
    emptyCanvas();

    let rows = document.getElementById('inputWidth').value;
    let columns = document.getElementById('inputHeight').value;
    
    for (let r = 0; r < rows; r++) {
        const row = pixelCanvas.insertRow(r);
        for (let c = 0; c < columns; c++) {
            const cell = row.insertCell(c);
        }
    }
};

//Create grid on page load
document.addEventListener('DOMContentLoaded', function() {
    makeGrid();
});

//Reset or Submit
reset.addEventListener("click", function() {
    emptyCanvas();
});

submit.addEventListener("click", function(event) {
    event.preventDefault();
    emptyCanvas();
    makeGrid();
});

//Mouse Events
$(pixelCanvas).on("mousedown mouseover", "td", function(event) {
    event.preventDefault();
    let color = document.getElementById('colorPicker').value;

    if(event.buttons == 1) {
        $(this).css('background-color', color);
    } 
});

//Input Limiter
$('input[type=number]').on('input', function () {
    
    var value = $(this).val();
    
    if ((value !== '') && (value.indexOf('.') === -1)) {
        
        $(this).val(Math.max(Math.min(value, 75), 1));
    }
});