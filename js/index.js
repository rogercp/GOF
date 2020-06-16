
 data={

    preset1:{
        block1:{
            x: 5,
            y: 15,
        },
        block2:{
            x: 6,
            y: 16,
    
        },
        block3:{
            x: 6,
            y: 17,
        },
        block4:{
    
            x: 7,
            y: 14,
        },
        block5:{
            x: 4,
            y: 15,
        },
        block6:{
    
            x: 5,
            y: 17,
        },
        block7:{
            x: 5,
            y: 16,
        },
        block8:{
    
            x: 7,
            y: 19,
        }
    },
    preset2:{
        x:1,
        y:2,
    
    },
    
    preset3:{
        x:1,
        y:2,
        
    },
    
    preset4:{
        x:1,
        y:2,
        
    
    },
    
    }



const onload = () => {
    populateMainCanvas();

  }

  const populateMainCanvas = () => {

    var canvas = document.getElementById("gridCanvas"),
    c = canvas.getContext("2d"),
    boxSize = 10,
    boxes = Math.floor(400 / boxSize);

    const mainLogic= ()=>{
        let mainCellArray = [];
        let programRunning = false;

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
            c.closePath();
        }

        const clearer = (e) =>{
            clearGrid()

        }

        const randomizer = (e) =>{
            clearGrid()
            const  populateRandomly = (numBlocks) =>{
                let myblockarray=[];
                let startX = Math.floor(Math.random() * (boxSize*3) +4);
                let startY = Math.floor(Math.random() * (boxSize*3) +4);
            
                myblockarray.push(startX);
                myblockarray.push(startY);
    
                let blockCount = 0;
                while(blockCount < numBlocks/2){
                let myx= Math.floor(Math.random() *8)+ (startX -4)
                let myy= Math.floor(Math.random() *8)+ (startY-4)
                    myblockarray.push(myx);
                    myblockarray.push(myy);
                    blockCount ++
                }
        
                for (let i =0 ; i< myblockarray.length-2;i+=2){
                    c.beginPath();
                    c.fillStyle = "lightblue";
                    c.fillRect(myblockarray[i]*boxSize, myblockarray[i+1]*boxSize, boxSize, boxSize);
                    c.closePath();
                }
                mainCellArray.length = 0;
                mainCellArray=[...myblockarray];
                return mainCellArray;
            }
            return populateRandomly(50)
        }
    
        const pauseSimulator =(e)=>{

            console.log(programRunning,"prgramruunning")

            const pause = ()=>{
                window.cancelAnimationFrame(animation);
                programRunning = false
                console.log(programRunning,"prgramruunning")

            }
            
            pause();
        }

        const runSimulator = async (e) =>{


            let count = 0

            console.log(programRunning,"running")

            programRunning = true



                console.log(programRunning,"prgramruunning")

                const run = (mainCellArray) =>{
                   
        
                }

                console.log(count)

                run(mainCellArray)
           
        

        
             animation = window.requestAnimationFrame(runSimulator)
        }




        c.translate(0.5, 0.5);
        document.getElementById("btnrandom").addEventListener('click', randomizer);
        document.getElementById("btnclear").addEventListener('click', clearer);
        runner = document.getElementById("btnrun").addEventListener('click', runSimulator)
        document.getElementById("btnpause").addEventListener('click', pauseSimulator);
        canvas.addEventListener('click', handleClick);
        grid();

    }
        
    mainLogic()


    
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

