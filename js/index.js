

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });
  
  $(function(){ 
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
  });

const onload = () => {
    populateMainCanvas();

  }

  const populateMainCanvas = () => {

   

    screenWith = window.screen.width
    var canvas = document.getElementById("gridCanvas")
    if(screenWith < 400){
        canvas.setAttribute("width","300")
        canvas.setAttribute("height","300")
    }else{
        canvas.setAttribute("width","400")
        canvas.setAttribute("height","400")

    }

    c = canvas.getContext("2d"),
    boxSize = 10,
    boxes = null

    if(screenWith <= 400){
        boxes = Math.floor(300 / boxSize);

    }else{
        boxes = Math.floor(400 / boxSize);


    }
    
    coordinates = [];
    frameCounter = 0;
    boxColor = "#000000";
    speed = 20;

    const mainLogic= ()=>{

        let programRunning = true;

        const grid = () => {
        c.beginPath();
        c.fillStyle = "white";
        c.lineWidth = .1;
        c.strokeStyle = 'black';
        for (var row = 0; row < boxes; row++) {
            for (var column = 0; column < boxes; column++) {
            var x = column * boxSize;
            var y = row * boxSize;
            c.strokeRect(x, y, boxSize, boxSize);
            }
        }
        for(let i = 0 ; i<boxes;i++){
             coordinates[i] = [];
             for(let j =0; j<boxes;j++){
                coordinates[i][j] = 0
             }
        }
        c.closePath();
        }


        const handleClick = (e)=>{
        c.fillStyle = boxColor;

        c.fillRect(Math.floor(e.offsetX / boxSize) * boxSize,
            Math.floor(e.offsetY / boxSize) * boxSize,
            boxSize, boxSize);
        }

        const clearGrid = () =>{
            c.beginPath();
            c.fillStyle = "white";
            c.lineWidth = .1;
            c.strokeStyle = 'black';
            for (var row = 0; row < boxes; row++) {
                for (var column = 0; column < boxes; column++) {
                var x = column * boxSize;
                var y = row * boxSize;
                c.clearRect(x, y, boxSize, boxSize)
                c.strokeRect(x, y, boxSize, boxSize);
            }
            }
            for(let i = 0 ; i<boxes;i++){
                coordinates[i] = [];
                for(let j =0; j<boxes;j++){
                   coordinates[i][j] = 0
                }
           }
            
            c.closePath();
        }

        const clearer = (e) =>{
            clearGrid()

        }

        const randomizer = () =>{
         
       
            const  populateRandomly = (numBlocks) =>{
                clearGrid();

                let startX = Math.floor(Math.random() * (((boxes===300) ? 6: 10)) +(((boxes===300) ? 9: 13)) );
                let startY = Math.floor(Math.random() * (((boxes ===300) ? 6: 10)) +(((boxes===300) ? 9: 13)) );

                coordinates[startX][startY] = 1;
                let blockCount = 0;

                while(blockCount < numBlocks){
                let myx= Math.floor(Math.random() *5)+ (startX-2)
                let myy= Math.floor(Math.random() *5)+ (startY-2)

                coordinates[myx][myy] = 1
                
                blockCount ++
                }
                for (let i = 0 ; i<coordinates.length;i++){
                    innerArray = coordinates[i];
                        for(let j = 0 ; j<innerArray.length;j++){
                            if(innerArray[j] === 1){
                                c.beginPath();
                                c.fillStyle = boxColor;
                                c.fillRect(i*boxSize, j*boxSize, boxSize, boxSize);
                                c.closePath();
                            }
                        }  
                }
            }
            return populateRandomly(15)
        }


        const preSet1 = () =>{
         
            const  preSet1Fun = () =>{
                clearGrid();

                let startX = 8;
                let startY = 8;

                coordinates[startX][startY] = 1;


                for (let i = 0 ; i<coordinates.length;i++){
                    innerArray = coordinates[i];
                        for(let j = 0 ; j<innerArray.length;j++){
                            if(innerArray[j] === 1){
                                
                                coordinates[i-1][j] = 1
                                coordinates[i+1][j] = 1
                                coordinates[i][j-2] = 1
                                coordinates[i+1][j+1] = 1

                            }
                        }  
                }


                
                for (let i = 0 ; i<coordinates.length;i++){
                    innerArray = coordinates[i];
                        for(let j = 0 ; j<innerArray.length;j++){
                            if(innerArray[j] === 1){
                                c.beginPath();
                                c.fillStyle = boxColor;
                                c.fillRect(i*boxSize, j*boxSize, boxSize, boxSize);
                                c.closePath();
                            }
                        }  
                }
            }
            // console.log(coordinates)
            return preSet1Fun()
        }







        const changeColor =(e)=>{
            boxColor = `${e.target.value}`
        }

        const changeSpeed =(e)=>{
            speed =  e.target.value 
        }


        function live_or_die(){

            tempCoordinates = [];

               for(let i = 0 ; i<boxes;i++){
                tempCoordinates[i] = [];
                for(let j =0; j<boxes;j++){
                    tempCoordinates[i][j] = 0
                }
           }

                for (let i = 0 ; i<coordinates.length;i++){
                        for(let j = 0 ; j<coordinates[i].length;j++){

                            if(coordinates[i][j] === 1){

                                var blocksAround = 0 
                                // max is 8

                                // choosing to live or die
                                if( coordinates[i][j+1] === 1){         
                                    blocksAround++               
                                }
                                if( coordinates[i][j-1] === 1){
                                    blocksAround++
                                } 
                                if( coordinates[i+1][j-1] === 1){
                                    blocksAround++
                                } 
                                if( coordinates[i+1][j] === 1){
                                    blocksAround++
                                } 
                                if( coordinates[i+1][j+1] === 1){
                                   blocksAround++
                                } 
                                if( coordinates[i-1][j-1] === 1){
                                    blocksAround++
                                }
                                if( coordinates[i-1][j] === 1){
                                    blocksAround++
                                }
                                if( coordinates[i-1][j+1] === 1){
                                    blocksAround++
                                }
                                // live or die 
                                if(blocksAround <= 1){
                                    // death
                                    tempCoordinates[i][j] = 0
                                }
                                else if(blocksAround >=2 && blocksAround<=3){
                                    // lives on
                                    tempCoordinates[i][j] = 1
                                }
                                else if(blocksAround >=4){
                                        // death
                                    tempCoordinates[i][j] = 0
                                }
                                

                            }
                        }
                }

                for (let i = 1 ; i<coordinates.length - 1 ;i++){
                    for(let j = 1 ; j<coordinates[i].length - 1;j++){

                        if( coordinates[i][j]  === 0){

                            var blocksAround = 0 

                            if(coordinates[i][j+1] ===1){
                                blocksAround++
                            }
                            if( coordinates[i][j-1] ===1){
                                blocksAround++                               
                            }
                            if( coordinates[i + 1][j-1] ===1){
                                blocksAround++
                            }
                            if( coordinates[i+1][j]===1){
                                blocksAround++
                            }
                            if( coordinates[i+1][j+1]===1){
                                blocksAround++
                            }
                            if(coordinates[i-1][j-1]===1 ){
                                blocksAround++          
                            }
                            if( coordinates[i-1][j]===1){
                                blocksAround++
                            }
                            if( coordinates[i-1][j+1]===1){
                                blocksAround++
                            }
                            if(blocksAround === 3){
                                tempCoordinates[i][j] = 1
                            }
                        }
                        
                    }
            }
              
                clearGrid()   
                           
                coordinates = [...tempCoordinates]
    
                 for (let i = 0 ; i<tempCoordinates.length;i++){   
                    innerArray = tempCoordinates[i];
                        for(let j = 0 ; j<innerArray.length;j++){
                                if(innerArray[j] === 1){
                                    c.beginPath();
                                    c.fillStyle = boxColor;
                                    c.fillRect(i*boxSize, j*boxSize, boxSize, boxSize);
                                    c.closePath();
                                 }

                        }
                }
                
        }


           function startAnimation (){
                if(programRunning === false) return;
        
                if(++frameCounter % speed){
                    window.requestAnimationFrame(startAnimation)
                    return false;
                }

                live_or_die()
                animation = window.requestAnimationFrame(startAnimation)              
        }
        
        function start(){
            programRunning = true
            startAnimation()
        }
        
        const pauseSimulator =(e)=>{
            const pause = ()=>{
                programRunning = false
            }
            pause();
        }


        c.translate(0.5, 0.5);
        grid();
        document.getElementById("btnrandom").addEventListener('click', randomizer);
        document.getElementById("btnclear").addEventListener('click', clearer);
        runner = document.getElementById("btnrun").addEventListener('click', start)
        document.getElementById("btnpause").addEventListener('click', pauseSimulator);
        colorpicker = document.querySelector('.js-bg-color-picker');
        colorpicker.addEventListener("change",changeColor)
        document.getElementById("myRange").addEventListener('change', changeSpeed);
        document.getElementById("preSet1").addEventListener('click', preSet1);

        
        canvas.addEventListener('click', handleClick);
        

    }
     
    mainLogic()
 
}



const populatePresetCanvas = () =>{


   


}

