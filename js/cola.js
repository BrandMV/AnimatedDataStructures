const enqueueButton = document.getElementById("enqueueButton");
const createButton = document.getElementById("createButton");
const dequeueButton = document.getElementById("dequeueButton");
const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");
const saveButton = document.getElementById("saveButton")
const loadButton = document.getElementById("loadButton")
const cCode = document.getElementById("cCode")
const newButton = document.getElementById("newButton")
let queue = [];
let queueNodeValue = 0;
const nodeSize = 25;
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
let x = canvasWidth / 2;
let y = nodeSize + 10;
let nodeX = x;
let nodeY = canvasHeight - 35;
let aux = y;
canvasContext.font = "20px Roboto";
let auxi=0;

canvasContext.fillStyle='white'
canvasContext.fill()

const drawNode = () => {
    // canvasContext.fillText("", nodeX - 18, nodeY + 10);


  if (queue.length < 2) {
    // console.log("la x: "+x+" la y: "+y);
    canvasContext.clearRect(400, y-nodeSize-6, canvasWidth, nodeSize*2+6);
    canvasContext.clearRect(x-nodeSize-1, y-nodeSize-6, nodeSize*2+5, nodeSize*2+6);
    canvasContext.beginPath(); // crearemos un nodo
    canvasContext.fillStyle = "black";

    canvasContext.fillText(queueNodeValue, x - 18, y + 10);
    canvasContext.arc(x, y, nodeSize, 0, Math.PI * 2, false);
    canvasContext.stroke();
  } else {
       // console.log("la x: "+x+" la y: "+y);
    canvasContext.clearRect(0, y-nodeSize+20, canvasWidth, nodeSize*2+6);
      canvasContext.clearRect(x-nodeSize-1, y-nodeSize-6, nodeSize*2+5, nodeSize*2+6);
      canvasContext.clearArc
    canvasContext.beginPath(); 
    canvasContext.fillStyle = "black";

    canvasContext.fillText(queueNodeValue, x - 18, y + 10);
    canvasContext.arc(x, y, nodeSize, 0, Math.PI * 2, false);
    canvasContext.stroke();
    canvasContext.moveTo(x, y + 25);
    canvasContext.lineTo(x, y + 50);
    canvasContext.lineTo(x - 10, y + 40);
    canvasContext.moveTo(x, y + 50);
    canvasContext.lineTo(x + 10, y + 40);
    canvasContext.stroke();

  }

};

const drawStack = (stack) => {
    
  if (queue.length < 2) {
    console.log(queue.length);
    canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
    nodeY = canvasHeight - 35;

    for (let queueNode of queue) {
      canvasContext.beginPath(); // crearemos un nodo
      canvasContext.fillStyle = "black";
      canvasContext.fillText(queueNode, nodeX - 18, nodeY + 10);
      canvasContext.arc(nodeX, nodeY, nodeSize, 0, Math.PI * 2, false);
      canvasContext.stroke();

      canvasContext.closePath();

      nodeY = nodeY - nodeSize * 2 -25;
      console.log("Nodey Despues " + nodeY);
    }
  } else {
    console.log(queue.length);
    canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
    nodeY = canvasHeight - 35;
    for (let queueNode of queue) {
      canvasContext.beginPath(); // crearemos un nodo
      canvasContext.fillStyle = "black";
      canvasContext.fillText(queueNode, nodeX - 18, nodeY + 10);
      canvasContext.arc(nodeX, nodeY, nodeSize, 0, Math.PI * 2, false);
      canvasContext.stroke();
      canvasContext.moveTo(nodeX, nodeY + 25);
      canvasContext.lineTo(nodeX, nodeY + 50);
      canvasContext.lineTo(nodeX - 10, nodeY + 40);
      canvasContext.moveTo(nodeX, nodeY + 50);
      canvasContext.lineTo(nodeX + 10, nodeY + 40);
      canvasContext.stroke();
      canvasContext.closePath();
      canvasContext.beginPath(); // crearemos un nodo
      canvasContext.strokeStyle = "white";

      canvasContext.moveTo(x, canvasHeight - 10);
      canvasContext.lineTo(x, canvasHeight + 15);
      canvasContext.lineTo(x - 10, canvasHeight + 5);
      canvasContext.moveTo(x, canvasHeight + 15);
      canvasContext.lineTo(x + 10, canvasHeight + 5);
      canvasContext.stroke();
      canvasContext.closePath();
      canvasContext.strokeStyle = "black";

      nodeY = nodeY - nodeSize * 2 - 25;
      console.log("Nodey Despues " + nodeY);
    }
  }
};

createButton.addEventListener("click", (e) => {
    if(queue.length > 8){
        alert("La pila esta llena, no puedes agregar más nodos")
        return
    }
  e.preventDefault();

  queueNodeValue = document.getElementById("queueNodeValue").value; //obtenemos el valor del nodo
  //   console.log(stackNodeValue);
  pushButton.className="btn"
  document.getElementById("queueNodeValue").className="hide"


  console.log(queue.length);
  if (queue.length < 1) {
    canvasContext.beginPath(); // crearemos un nodo
    canvasContext.fillStyle = "black";
    canvasContext.fillText(queueNodeValue, x - 15, y + 8);
    canvasContext.arc(x, y, nodeSize, 0, Math.PI * 2, false);
    canvasContext.stroke();
    canvasContext.closePath();
    document.getElementById("queueNodeValue").value = "";
    //   createButton.disabled = false
    popButton.disabled = true;
    createButton.disabled = true;
  } else {
    canvasContext.beginPath(); // crearemos un nodo
    canvasContext.fillStyle = "black";
    canvasContext.fillText(queueNodeValue, x - 15, y + 8);
    canvasContext.arc(x, y, nodeSize, 0, Math.PI * 2, false);
    canvasContext.stroke();
    canvasContext.moveTo(x, y + 25);
    canvasContext.lineTo(x, y + 50);
    canvasContext.lineTo(x - 10, y + 40);
    canvasContext.moveTo(x, y + 50);
    canvasContext.lineTo(x + 10, y + 40);
    canvasContext.stroke();
    canvasContext.closePath();
    document.getElementById("queueNodeValue").value = "";
    //   createButton.disabled = false
    dequeueButton.disabled = true;
    createButton.disabled = true;
    enqueueButton.disabled = false

  }
});

enqueueButton.addEventListener("click", (e) => {
  e.preventDefault();
//   let drawNodeFrame = window.requestAnimationFrame(drawNode);
  let drawNodeInterval = setInterval(() => {
    if (x != nodeX) x = x - 1;
    else if (y != nodeY) y = y + 1;
    if (x == nodeX && y == nodeY) {
      canvasContext.clearRect(600,0, canvasWidth, canvasHeight)
        
      window.cancelAnimationFrame(drawNodeFrame);

     drawStack(stack);
  
      clearInterval(drawNodeInterval);
      x = canvasWidth / 2;
      y = nodeSize + 10;
     

    } else {
      drawNodeFrame = window.requestAnimationFrame(drawNode);
     
    }
  }, 2);
  
  //   console.log("NodeY: "+nodeY);
  //   console.log("y: "+y);
  //   console.log("stack value: "+stackNodeValue);
  queue.push(queueNodeValue);
  createButton.disabled = false;
  enqueueButton.disabled = true
  dequeueButton.disabled = false
  document.getElementById("queueNodeValue").className=""
  enqueueButton.className="hide"
  
});

dequeueButton.addEventListener("click", (e) => {
    e.preventDefault()
    let queueAux = queue
    if(queueAux == 0 )
        alert("La pila esta vacía. No hay nada que sacar")
    else{
        queueAux.pop()
        // localStorage.setItem("Stack", stackAux)
        drawStack(queueAux)
    }

})



saveButton.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("Queue", JSON.stringify(queue))
})

loadButton.addEventListener("click", (e) => {
    e.preventDefault();
    if(localStorage.getItem("Queue")){
        queue = JSON.parse(localStorage.getItem("Queue"))
        drawStack(queue)
        saveButton.className="btn"
        createButton.className="btn"
        dequeueButton.className="btn"
        document.getElementById("queueNodeValue").className=""
  newButton.className="hide"
        
    }
})
newButton.addEventListener("click", (e) => {
  e.preventDefault()
  newButton.className="hide"
  loadButton.className="btn"
  dequeueButton.className="btn"
  createButton.className="btn"
  saveButton.className="btn"
  document.getElementById("queueNodeValue").className=""
})
