const lastButton = document.getElementById("lastButton");
const createNodeButton = document.getElementById("createNodeButton")
const createButton = document.getElementById("createButton");
const dropButton = document.getElementById("dropButton");
const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");
const saveButton = document.getElementById("saveButton");
const loadButton = document.getElementById("loadButton");
const cCode = document.getElementById("cCode");
const newButton = document.getElementById("newButton");
let list = [];
let listNodeValue = 0;
const nodeSize =25
const nodewidth=65
const nodeHeight=25
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
let x = canvasWidth - nodewidth-10;
let y = nodeHeight + 10;
let nodeX = 25;
let nodeY = canvasHeight / 2;
let aux = y;
canvasContext.font = "20px Roboto";
let auxi = 0;

canvasContext.fillStyle = "white";
canvasContext.fill();

const drawNode = () => {
  // canvasContext.fillText("", nodeX - 18, nodeY + 10);

  // console.log("la x: "+x+" la y: "+y);
  canvasContext.clearRect(
    list.length * nodeSize*3  + 25,
    0,
    canvasWidth,
    canvasHeight
  );
  canvasContext.clearRect(x-nodeSize-2, y-nodeSize-6, nodeSize*3+10, nodeSize*2+8);

  canvasContext.beginPath(); // crearemos un nodo
  canvasContext.fillStyle = "black";
  canvasContext.fillText(listNodeValue, x - 15, y + 8);
  canvasContext.arc(x, y, nodeSize, 0, Math.PI * 2, false);
  canvasContext.stroke();
  canvasContext.closePath();

  canvasContext.beginPath(); // crearemos un nodo

  canvasContext.moveTo(x + 25, y);
  canvasContext.lineTo(x + 50, y);
  canvasContext.lineTo(x + 40, y - 10);
  canvasContext.moveTo(x + 50, y);
  canvasContext.lineTo(x + 40, y + 10);
  canvasContext.stroke();
  canvasContext.closePath();
};

const drawStack = (list) => {
  console.log(list.length);
  canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
  nodeY = canvasHeight / 2;
  nodeX = 25;

  for (let listNode of list) {
    canvasContext.beginPath(); // crearemos un nodo
    canvasContext.fillStyle = "black";
    canvasContext.fillText(listNode, nodeX - 15, nodeY + 8);
    canvasContext.arc(nodeX, nodeY, nodeSize, 0, Math.PI * 2, false);
    canvasContext.stroke();
    canvasContext.closePath();

    canvasContext.beginPath(); // crearemos un nodo
    canvasContext.strokeStyle = "black";

    canvasContext.moveTo(nodeX + 25, nodeY);
    canvasContext.lineTo(nodeX + 50, nodeY);
    canvasContext.lineTo(nodeX + 40, nodeY - 10);
    canvasContext.moveTo(nodeX + 50, nodeY);
    canvasContext.lineTo(nodeX + 40, nodeY + 10);
    canvasContext.stroke();
    canvasContext.closePath();
    nodeX = nodeX + nodeSize * 2 + 25;

    console.log("Nodey Despues " + nodeY);
  }
};

createButton.addEventListener("click", (e) => {
 
  e.preventDefault();

  listNodeValue = document.getElementById("listNodeValue").value; //obtenemos el valor del nodo
  //   console.log(stackNodeValue);
  lastButton.className = "btn";
  document.getElementById("listNodeValue").className = "hide";

    canvasContext.beginPath(); // crearemos un nodo
    canvasContext.fillStyle = "black";
    canvasContext.fillText(listNodeValue, x+4 , y+20);
    canvasContext.rect(x, y, nodewidth, nodeHeight);
    canvasContext.stroke();
    canvasContext.moveTo(x+nodewidth-15,y)
    canvasContext.lineTo(x+nodewidth-15,y+nodeHeight)
    canvasContext.stroke();

    canvasContext.closePath();
    document.getElementById("listNodeValue").value = "";
    //   createButton.disabled = false
    dropButton.disabled = true;
    createButton.disabled = true;
    lastButton.disabled = false;
    createButton.className = "hide"
  
});

lastButton.addEventListener("click", (e) => {
  e.preventDefault();
  //   let drawNodeFrame = window.requestAnimationFrame(drawNode);
  let drawNodeInterval = setInterval(() => {
    if (x != nodeX) x = x - 1;
    else if (y != nodeY) y = y + 1;
    if (x == nodeX && y == nodeY) {
      //   canvasContext.clearRect(600,0, canvasWidth, canvasHeight)
      window.cancelAnimationFrame(drawNodeFrame);
      drawStack(list);
      clearInterval(drawNodeInterval);
      x = canvasWidth - nodeSize * 2;
      y = nodeSize + 10;
    } else {
      drawNodeFrame = window.requestAnimationFrame(drawNode);
    }
  }, 0.1);

  //   console.log("NodeY: "+nodeY);
  //   console.log("y: "+y);
  //   console.log("stack value: "+stackNodeValue);
  list.push(listNodeValue);
  createButton.disabled = false;
  lastButton.disabled = true;
  dropButton.disabled = false;
  document.getElementById("listNodeValue").className = "hide";
  lastButton.className = "hide";
  createNodeButton.disabled = false


});

dropButton.addEventListener("click", (e) => {
  e.preventDefault();
  let listAux = list;
  if (listAux.length == 0) alert("La cola esta vacía. No hay nada que sacar");
  else {
    listAux.shift();
    // localStorage.setItem("Stack", stackAux)
    drawStack(listAux);
  }
});

saveButton.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("List", JSON.stringify(ist));
});

loadButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (localStorage.getItem("List")) {
    list = JSON.parse(localStorage.getItem("List"));
    drawStack(list);
    saveButton.className = "btn";
    createButton.className = "hide";
    dropButton.className = "btn";
    createNodeButton.className = "btn"
    document.getElementById("listNodeValue").className = "hide";
    newButton.className = "hide";
    dropButton.disabled = false
  }
});
newButton.addEventListener("click", (e) => {
  e.preventDefault();
  newButton.className = "hide";
  loadButton.className = "btn";
  dropButton.className = "btn";
  createButton.className = "hide";
  saveButton.className = "btn";
  dropButton.disabled = true
  createNodeButton.className = "btn"
  document.getElementById("listNodeValue").className = "hide";
});
createNodeButton.addEventListener("click", (e) => {
    e.preventDefault()
    canvasContext.clearRect(canvasWidth-nodeSize*3, 0, canvasWidth, nodeSize*3)
    if (list.length > 7) {
        alert("La pila esta llena, no puedes agregar más nodos");
        return;
      }
  document.getElementById("listNodeValue").className = "";
  lastButton.className = "btn"
  createNodeButton.disabled = true
  createButton.className = "btn"
  lastButton.className = "hide"
  dropButton.disable = true
    
})
