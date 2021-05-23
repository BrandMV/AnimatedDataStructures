const pushButton = document.getElementById("pushButton");
const createButton = document.getElementById("createButton");
const popButton = document.getElementById("popButton");
const stackValue = document.getElementById("stackValue");
const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");
const stack = [];
const nodeSize = 25;
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const x = canvasWidth - nodeSize - 10;
const y = canvasHeight - nodeSize - 10;
const stackPositionX = 10;
const stackPositionY = y;
canvasContext.font = "30px Roboto";

canvasContext.beginPath(); // crearemos un nodo
canvasContext.strokeRect(canvasWidth - 180, canvasHeight - 180, 180, 180);
canvasContext.fillText("Nodos: ", canvasWidth - 180, canvasHeight - 150);

canvasContext.fillStyle = "white";
canvasContext.fillRect(canvasWidth - 200, canvasHeight - 65, 55, 55);

const drawNode = () => {
  canvasContext.beginPath(); // crearemos un nodo
  canvasContext.fillStyle = "black";
  canvasContext.fillText("50", x-18,y+10);
  canvasContext.arc(x, y, nodeSize, 0, Math.PI * 2, false);
  canvasContext.stroke();
};





createButton.addEventListener("click", (e) => {
  e.preventDefault();
  const stackNodeValue = document.getElementById("stackNodeValue").value //obtenemos el valor del nodo
//   console.log(stackNodeValue);
});

drawNode();
