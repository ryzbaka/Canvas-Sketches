const canvasSketch = require('canvas-sketch');
const { lerp } = require('canvas-sketch-util/math')
const random = require('canvas-sketch-util/random')
const palettes=require('nice-color-palettes')

//random.setSeed(666)//setting the random seed to get reproducible results
const settings = {
  dimensions:[210,297],//'a4',//[ 2048, 2048 ]
  pixelsPerInch:300,
  units:'mm',
  orientation:'portrait'
};

const sketch = () => {
  const palette=random.shuffle(random.pick(palettes)).slice(0,4)
  console.log(palette)
  const createGrid=()=>{
      const points=[];
      const count=50;
      for(let i=0;i<count;i++){
        for(let j=0;j<count;j++){
          const v=count <=1?0.5:j/(count - 1);
          const u=count <=1?0.5:i/(count - 1); // THIS IS SO THAT WE REACH COORDINATE [1,1]
          //mapping everything between 0 and 1
          points.push({
            radius:Math.abs(random.gaussian()),//random.value(),
            position: [ u, v ]
          })
        }
      }
      return points
  };
  //const points=createGrid().filter((value)=>Math.random()>0.5)
  const points=createGrid().filter(()=>random.value()>0.5)
  const margin=10;
  /*FILTER FUNCTIONS
  const arr=[20,100,20,30]
  undefined
  arr.filter((val)=>val>=50)
  [100]
 */

  return ({ context, width, height }) => {
    context.fillStyle=palette[3]
    context.fillRect(0,0,width,height)

    points.forEach((data)=>{ //destructuring
      const { radius, position } = data
      const [ u, v ]= position
      const x=lerp(margin, width-margin, u); //min = margin max= width-margin u is a value between 0 and 1 that will become a value between min and max
      const y=lerp(margin,height-margin,v);
      //mapping the scaled coordinates to canvas dimensions

      context.beginPath();
      context.arc(x,y,width/100*radius,0,Math.PI*2)
      context.fillStyle=random.pick(palette.slice(0,3));
      context.fill();
      //context.lineWidth=5;
      //context.strokeStyle='black'//random.value()>0.5?'darkred':'darkred'
      //context.stroke()
    })
  };
};

canvasSketch(sketch, settings);
