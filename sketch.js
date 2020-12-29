var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(480, 580);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/7, 10, divisionHeight));
   }


    for (var j = 40; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,55));
    }

    for (var j = 65; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,135));
    }

     for (var j = 40; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,215));
    }

     for (var j = 65; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,295));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}