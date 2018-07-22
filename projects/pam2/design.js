const colorPicker = document.getElementById('#color-picker'),
canvas = document.getElementById('#canvas'),
submit = document.getElementById('#submit');


//Make the Grid
const makeGrid = () => {
  canvas.empty();

  let rows = document.getElementById('#inputX').val();
  let columns = document.getElementById('#inputY').val();

  let grid = [];

  for(let r = 0; r < rows; r++) {
    grid.push('<tr>');
      for(let c = 0; c < columns; c++) {
        grid.push('<td></td>');
      }
      grid.push('</tr>');
  }
  canvas.append(grid);
}

const runGrid = () => {
  makeGrid();

  submit.click(function (e) {
    e.preventDefault();
    makeGrid();
  });
};