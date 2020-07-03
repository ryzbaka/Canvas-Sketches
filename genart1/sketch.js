const canvasSketch = require('canvas-sketch'); //importing canvas-sketch library

const settings = {
  dimensions: 'a4',//[ 2048, 2048 ] //canvas dimensions can be set a3 a4 letter postcard etc
  //pixelsPerInch:300 common pixel density for print artwork
  //units:'in' inches 'ft' for feet and so on
  //orientation: 'landscape' or 'portrait'
};

const sketch = () => { //this is the main sketch function
  return ({ context, width, height }) => {
    context.fillStyle = 'orange'; //context is a canvas context CanvasRenderingContext2D
    context.fillRect(0, 0, width, height); //width and height correspond to the width and height of the canvas defined in the settings above
    context.beginPath();
    context.arc(width/2,height/2,200,0,Math.PI*2)// make a circle at the center of the canvas
    context.fillStyle="red"; //setting the fill color
    context.fill();
    context.lineWidth=20;
    context.strokeStyle='black'
    context.stroke()
    context.beginPath();
    context.arc(width/4,height/4,100,0,Math.PI*2)
    context.fillStyle="white"
    context.fill()
    context.lineWidth=20
    context.strokeStyle="black"
    context.stroke()
    context.beginPath();
    context.arc((width/2)+(width/4),height/4,100,0,Math.PI*2)
    context.fillStyle="white"
    context.fill()
    context.lineWidth=20
    context.strokeStyle="black"
    context.stroke()
    context.beginPath();
    context.arc((width/2)+(width/4),height/4,50,0,Math.PI*2)
    context.fillStyle="black"
    context.fill()
    context.lineWidth=20
    context.strokeStyle="black"
    context.stroke()
    context.beginPath();
    context.arc(width/4,height/4,50,0,Math.PI*2)
    context.fillStyle="black"
    context.fill()
    context.lineWidth=20
    context.strokeStyle="black"
    context.stroke()
    context.beginPath();
    context.arc(width/2,height-(height/6),50,0,Math.PI*2)
    context.fillStyle="black"
    context.fill()
    context.lineWidth=20
    context.strokeStyle="black"
    context.stroke()
  };//returns the render function
};

canvasSketch(sketch, settings); //finally we pass in the sketch function and settings to render everything
