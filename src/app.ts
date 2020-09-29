//import { ContextReplacementPlugin } from "webpack";

const mainCanvas = document.getElementById("maincanvas");

//console.log(mainCanvas);
const graph: HTMLCanvasElement = document.getElementById("maincanvas") as HTMLCanvasElement,
fline: CanvasRenderingContext2D = graph.getContext('2d');


//Contexts.strokeRect(70,20,200,100);

/*fline.beginPath();
fline.moveTo(0,0);
fline.lineTo(30,30);
fline.lineTo(0,30);
fline.lineTo(0,0);
fline.stroke();*/

fline.beginPath();
fline.moveTo(0,0);
//fline.lineTo(0,100);


graph.width = document.body.scrollWidth;
graph.height = window.innerHeight;

function drowLine(x0: number, y0: number, x1: number, y1: number, gr: CanvasRenderingContext2D): void{
    gr.beginPath();
    gr.moveTo(x0,y0);
    gr.lineTo(x1,y1);
    gr.stroke();
    gr.closePath();
}



drowLine(graph.width/2, 0, graph.width/2, graph.height, fline);
drowLine(0, graph.height/2, graph.width, graph.height/2,fline);

for(let i = graph.height/2; i < graph.height; i+= 10) {
    drowLine(graph.width/2-5,i,graph.width/2+5,i,fline);
}

for(let i = graph.height/2; i > 0; i-= 10) {
    drowLine(graph.width/2-5,i,graph.width/2+5,i,fline);
}

for(let i = graph.width/2; i < graph.width; i+= 10) {
    drowLine(i,graph.height/2-5,i,graph.height/2+5,fline);
}

for(let i = graph.width/2; i > 0; i-= 10) {
    drowLine(i,graph.height/2-5,i,graph.height/2+5,fline);
}

let h;
let maxw = 5;

//moveTo(graph.width/2, graph.height/2);


//for(let i = graph.height/2; i < graph.height; i+= 1) {
    //console.log(graph.width/2);
   // let x = Math.abs(graph.height/2 - i)
   // drowLine(graph.width/2,x+5,  graph.width/2+5,x+5,fline);
//}

//drowLine(graph.width/2+ 10, graph.height/2 + 20,graph.width/2, graph.height/2+ 10,fline)


function drowGraph(i: number){
    let x = (i - graph.width / 2) / 10;
    let y = graph.height / 2 - func(x);
    fline.lineTo(i, y);
    fline.stroke();
    
}

function func(x: number) {
    return x*x*x;
}


for (let i = graph.width / 2; i > 0; i -= 10) {
   drowGraph(i);
}
for (let i = graph.width / 2; i < graph.width; i +=10) {
    //wtf!!!!!!
   drowGraph(i);
}
//fline.beginPath();
//fline.moveTo(graph.width / 2, graph.height / 2);




//drawGraph(graph.width / 8)

//fline.beginPath();
//fline.moveTo(graph.width / 2, graph.height / 2);


//for (let k = graph.width / 2; k > 0; k = k - 10) {
//    drawGraph(k);
//}

//console.log(graph.width/2);