let  changeBtn = document.getElementById("change_button");
let  resetBtn = document.getElementById("Reset");

function resetGrid() {
  let items = document.querySelectorAll("#grid-container div");
  items.forEach(item => {
    item.style.backgroundColor = "transparent";
  });
}

changeBtn.addEventListener("click", function () {
  let blockId = document.getElementById("block_id").value;
  let color = document.getElementById("colour_id").value;

  resetGrid();

  let block = document.getElementById(blockId);
  if (block) {
    block.style.backgroundColor = color;
  }
});

resetBtn.addEventListener("click", function () {
  resetGrid();
});