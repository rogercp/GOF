

const onload = () => {
    populateMainCanvas();

  }

  const populateMainCanvas = () => {

    var canvas = document.getElementById("gridCanvas"),
    c = canvas.getContext("2d"),
    boxSize = 10,
    boxes = Math.floor(400 / boxSize);
    coordinates = [];
    frameCounter = 0;

    const mainLogic= ()=>{

        let mainCellArray = [];
        let programRunning = true;

        const grid = () => {
        c.beginPath();
        c.fillStyle = "white";
        c.lineWidth = .2;
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
        c.fillStyle = "lightblue";

        c.fillRect(Math.floor(e.offsetX / boxSize) * boxSize,
            Math.floor(e.offsetY / boxSize) * boxSize,
            boxSize, boxSize);
        }

        const clearGrid = () =>{
            c.beginPath();
            c.fillStyle = "white";
            c.lineWidth = .2;
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
                let startX = Math.floor(Math.random() * (boxSize*2) +4);
                let startY = Math.floor(Math.random() * (boxSize*2) +4);
                coordinates[startX][startY] = 1;
                let blockCount = 0;

                while(blockCount < numBlocks){
                let myx= Math.floor(Math.random() *8)+ (startX-4)
                let myy= Math.floor(Math.random() *8)+ (startY-4)
                coordinates[myx][myy] = 1
                blockCount ++
                }
                for (let i = 0 ; i<coordinates.length;i++){
                    innerArray = coordinates[i];
                        for(let j = 0 ; j<innerArray.length;j++){
                            if(innerArray[j] === 1){
                                c.beginPath();
                                c.fillStyle = "lightblue";
                                c.fillRect(i*boxSize, j*boxSize, boxSize, boxSize);
                                c.closePath();
                            }
                        }  
                }
            }
            // console.log(coordinates)
            return populateRandomly(20)
        }
    


        function eeeeee(){


            tempCoordinates = [];

              
               for(let i = 0 ; i<boxes;i++){
                tempCoordinates[i] = [];
                for(let j =0; j<boxes;j++){
                    tempCoordinates[i][j] = 0
                }
           }


            // console.log(tempCoordinates,"tempcoors")
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

                for (let i = 1 ; i<coordinates.length - 2 ;i++){

                    for(let j = 1 ; j<coordinates[i].length - 2;j++){


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
                            if(blocksAround >=3){
                                tempCoordinates[i][j] = 1
                            }
                        }
                        
                    }
            }
              
                console.log(coordinates,"coords")
                console.log(tempCoordinates,"tempcoords")

                clearGrid()
                

                coordinates = [...tempCoordinates]
            
                console.log(coordinates,"coordsafter concat")


                for (let i = 0 ; i<tempCoordinates.length;i++){   
                    innerArray = tempCoordinates[i];
                        for(let j = 0 ; j<innerArray.length;j++){
                                if(innerArray[j] === 1){
                                    c.beginPath();
                                    c.fillStyle = "lightblue";
                                    c.fillRect(i*boxSize, j*boxSize, boxSize, boxSize);
                                    c.closePath();
                                 }

                        }
                }
                
        }


           function startAnimation (){
                if(programRunning === false) return;
        
                if(++frameCounter % 100){
                    window.requestAnimationFrame(startAnimation)
                    return false;
                }

                console.log(coordinates,"first coords")

                eeeeee()
     

            
                animation = window.requestAnimationFrame(startAnimation)              
        }
        
        function start(){
            programRunning = true
            startAnimation()
        }
        
        
        const pauseSimulator =(e)=>{
            const pause = ()=>{
                programRunning = false
                 // window.cancelAnimationFrame(animation);
            }
            pause();
        }




        c.translate(0.5, 0.5);
        grid();
        document.getElementById("btnrandom").addEventListener('click', randomizer);
        document.getElementById("btnclear").addEventListener('click', clearer);
        runner = document.getElementById("btnrun").addEventListener('click', start)
        document.getElementById("btnpause").addEventListener('click', pauseSimulator);
        canvas.addEventListener('click', handleClick);
        

    }
    
        
    mainLogic()


    
}




   // let startX = Math.floor(Math.random() * (boxSize*2) +4);
                // let startY = Math.floor(Math.random() * (boxSize*2) +4);
                // coordinates[startX][startY] = 1;
                // let blockCount = 0;

                // while(blockCount < 20){
                // let myx= Math.floor(Math.random() *8)+ (startX-4)
                // let myy= Math.floor(Math.random() *8)+ (startY-4)
                // coordinates[myx][myy] = 1
                // blockCount ++
                // }
                // for (let i = 0 ; i<coordinates.length;i++){
                //     innerArray = coordinates[i];
                //         for(let j = 0 ; j<innerArray.length;j++){
                //             if(innerArray[j] === 1){
                //                 c.beginPath();
                //                 c.fillStyle = "lightblue";
                //                 c.fillRect(i*boxSize, j*boxSize, boxSize, boxSize);
                //                 c.closePath();
                //             }
                //         }
                // }



































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

