const colorPicker = document.getElementById('#color-picker').value;

//Make the Grid
const makeGrid = () => {
  canvas.empty();

  let rows = $('#inputX').val();
  let columns = $('#inputY').val();

  let grid = [];

  for(let r =0; r < rows; r++) {
    grid.push('<tr');
      for(let c = 0; c < columns; c++) {
        grid.push('<td></td>');
      }
      grid.push('</tr>');
  }
  canvas.append(grid);
}