const pushButton = document.getElementById("pushButton");
const createButton = document.getElementById("createButton");
const popButton = document.getElementById("popButton");
const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");
let stack = [];
let stackNodeValue = 0;
const nodeSize = 25;
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
let x = canvasWidth / 2;
let y = nodeSize + 10;
let nodeX = x;
let nodeY = canvasHeight-35;
let aux = y
canvasContext.font = "20px Roboto";

const drawNode = () => {
    // console.log("la x: "+x+" la y: "+y);
  canvasContext.clearRect(400, 0, canvasWidth, canvasHeight);
//   canvasContext.clearRect(400, 0, nodeSize, nodeSize);
  canvasContext.beginPath(); // crearemos un nodo
  canvasContext.fillStyle = "black";
 
  canvasContext.fillText(stackNodeValue, x - 18, y + 10);
  canvasContext.arc(x, y, nodeSize, 0, Math.PI * 2, false);
  canvasContext.stroke();
};

const drawStack = () => {

    if(stack.length < 2){
        console.log(stack.length);
        canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
        nodeY = canvasHeight-35;
        for (let stackNode of stack) {
          canvasContext.beginPath(); // crearemos un nodo
          canvasContext.fillStyle = "black";
          canvasContext.fillText(stackNode, nodeX - 18, nodeY + 10);
          canvasContext.arc(nodeX, nodeY, nodeSize, 0, Math.PI * 2, false);
          canvasContext.stroke();
          
          canvasContext.closePath(); 
      
          nodeY = nodeY - nodeSize*2;
          console.log("Nodey Despues "+nodeY);
        }
    }else{
        console.log(stack.length);
        canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
        nodeY = canvasHeight-35;
        for (let stackNode of stack) {
          canvasContext.beginPath(); // crearemos un nodo
          canvasContext.fillStyle = "black";
          canvasContext.fillText(stackNode, nodeX - 18, nodeY + 10);
          canvasContext.arc(nodeX, nodeY, nodeSize, 0, Math.PI * 2, false);
          canvasContext.stroke();
          canvasContext.moveTo(nodeX,nodeY+25)
          canvasContext.lineTo(nodeX,nodeY+50)
          canvasContext.lineTo(nodeX-10,nodeY+40)
          canvasContext.moveTo(nodeX,nodeY+50)
          canvasContext.lineTo(nodeX+10,nodeY+40)
          canvasContext.stroke();
          canvasContext.closePath(); 
          canvasContext.beginPath(); // crearemos un nodo
          canvasContext.strokeStyle = "white";

          canvasContext.moveTo(x,canvasHeight-10)
          canvasContext.lineTo(x,canvasHeight+15)
          canvasContext.lineTo(x-10,canvasHeight+5)
          canvasContext.moveTo(x,canvasHeight+15)
          canvasContext.lineTo(x+10,canvasHeight+5)
          canvasContext.stroke();
          canvasContext.closePath(); 
          canvasContext.strokeStyle = "black";


      
          nodeY = nodeY - nodeSize*2;
          console.log("Nodey Despues "+nodeY);
        }
    }


 
};

createButton.addEventListener("click", (e) => {
  e.preventDefault();
  stackNodeValue = document.getElementById("stackNodeValue").value; //obtenemos el valor del nodo
  //   console.log(stackNodeValue);

  console.log(stack.length);
  if(stack.length <1){
    canvasContext.beginPath(); // crearemos un nodo
    canvasContext.fillStyle = "black";
    canvasContext.fillText(stackNodeValue, x - 15, y + 8);
    canvasContext.arc(x, y, nodeSize, 0, Math.PI * 2, false);
    canvasContext.stroke();
    canvasContext.closePath(); 
    document.getElementById("stackNodeValue").value = "";
    //   createButton.disabled = false
    popButton.disabled = true;
    createButton.disabled = true
  }else{
    canvasContext.beginPath(); // crearemos un nodo
    canvasContext.fillStyle = "black";
    canvasContext.fillText(stackNodeValue, x - 15, y + 8);
    canvasContext.arc(x, y, nodeSize, 0, Math.PI * 2, false);
    canvasContext.stroke();
    canvasContext.moveTo(x,y+25)
    canvasContext.lineTo(x,y+50)
    canvasContext.lineTo(x-10,y+40)
    canvasContext.moveTo(x,y+50)
    canvasContext.lineTo(x+10,y+40)
    canvasContext.stroke();
    canvasContext.closePath(); 
    document.getElementById("stackNodeValue").value = "";
    //   createButton.disabled = false
    popButton.disabled = true;
    createButton.disabled = true
  }
 

});

pushButton.addEventListener("click", (e) => {
  e.preventDefault();
  let drawNodeFrame = window.requestAnimationFrame(drawNode);
  let drawNodeInterval = setInterval(() => {
    if (x != nodeX) x = x - 1;
    else if (y != nodeY) y = y + 1;
    if (x == nodeX && y == nodeY) {
      window.cancelAnimationFrame(drawNodeFrame);
    console.log("la y animada: "+y);

      x = canvasWidth / 2;
      y = nodeSize + 10;
      console.log("sin anima: "+ y);
      console.log(stack.length);
      drawStack();
    console.log("la y animada: "+y);

      clearInterval(drawNodeInterval);
    } else {
      drawNodeFrame = window.requestAnimationFrame(drawNode);
    }
  }, 2);
//   console.log("NodeY: "+nodeY);
//   console.log("y: "+y);
//   console.log("stack value: "+stackNodeValue);
  stack.push(stackNodeValue);
  createButton.disabled = false
});
