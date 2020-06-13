
function onload() {
    populateMainCanvas();
    populatePresetCanvas();
  
  }

  const populateMainCanvas = () => {

    var canvas = document.getElementById("gridCanvas"),
    c = canvas.getContext("2d"),
    boxSize = 40,
    boxes = Math.floor(600 / boxSize);
    // canvas.addEventListener('click', handleClick);

    function grid() {
    c.beginPath();
    c.fillStyle = "white";
    c.lineWidth = 1;
    c.strokeStyle = 'black';
    for (var row = 0; row < boxes; row++) {
        for (var column = 0; column < boxes; column++) {
        var x = column * boxSize;
        var y = row * boxSize;
        c.strokeRect(x, y, boxSize, boxSize);
        }
    }
    c.closePath();
    }

    // function handleClick(e) {
    // c.fillStyle = "black";

    // c.fillRect(Math.floor(e.offsetX / boxSize) * boxSize,
    //     Math.floor(e.offsetY / boxSize) * boxSize,
    //     boxSize, boxSize);
    // }

    function fill() {
        c.beginPath();
        c.clearRect(2*40, 2*40, boxSize, boxSize)
        c.fillStyle = "red";
        c.fillRect(2*40,2*40,40,40);
        c.closePath();
        }



    fill()
    grid();
}


const populatePresetCanvas = () =>{

    // var canvas = document.getElementById("presetCanvas1"),
    // c = canvas.getContext("2d"),
    // boxSize = 20,
    // boxes = Math.floor(100 / boxSize);
    // canvas.addEventListener('click', handleClick);

    // function grid() {
    // c.beginPath();
    // c.fillStyle = "white";
    // c.lineWidth = 1;
    // c.strokeStyle = 'black';
    // for (var row = 0; row < boxes; row++) {
    //     for (var column = 0; column < boxes; column++) {
    //     var x = column * boxSize;
    //     var y = row * boxSize;
    //     c.rect(x, y, boxSize, boxSize);
    //     c.fill();
    //     c.stroke();
    //     }
    // }
    // c.closePath();
    // }

    // function handleClick(e) {
    // c.fillStyle = "black";

    // c.fillRect(Math.floor(e.offsetX / boxSize) * boxSize,
    //     Math.floor(e.offsetY / boxSize) * boxSize,
    //     boxSize, boxSize);
    // }

    // grid();
    
   


}
