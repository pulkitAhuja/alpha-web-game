const height = window.innerHeight;
const width = window.innerWidth;
var play=false;
function playgame(){
    play=!play;
}
var hitt=0,obcount=0;
var clouds=[];
var mountains=[];
var mountains2=[];
var obs=[];
var speed=3;
var player;
var cloudImage=[];
var characterImageArray=[];
var mountainImageArray=[];

function preload(){
    characterImageArray[0]=loadImage("assets/c1.png");
    characterImageArray[1]=loadImage("assets/c2.png");
    characterImageArray[2]=loadImage('assets/c3.png');
    characterImageArray[3]=loadImage('assets/c4.png');
    characterImageArray[4]=loadImage('assets/c5.png');
    characterImageArray[5]=loadImage('assets/c6.png');
    cloudImage[0]=loadImage('assets/cloud.png');
    mountainImageArray[0]=loadImage('assets/dark-mount1.png');
    mountainImageArray[1]=loadImage('assets/dark-mount2.png');

    // console.log(characterImageArray);
}
function complexShape(){
    var x=0;
    var y=100;
    fill('#000');
    noStroke();
    rect(x,height-100,width,100);
    
}

function setup() {
    var score=document.getElementById("score");
    createCanvas(width, height);
    player= new Player(100,height-220);
    for(var i=0;i<3;i++){
        mountains[i]= new Mountain(790*i,mountainImageArray[0],7);
    }
    for(var i=0;i<3;i++){
        mountains2[i]= new Mountain(450*i,mountainImageArray[1],10);
    }
}

 function draw() {
    background('#ae80ff');
    if(play){
    mountains2.forEach(mountain=>{
        mountain.show();
        mountain.update();
        mountain.scaleback();
        mountain.update();
        
        if(mountain.offscreen()){
            mountain.mx=width;
        }
    })
    mountains.forEach(mountain=>{
        mountain.show();
        mountain.update();
        mountain.scaleback();
        mountain.update();

        if(mountain.offscreen()){
            mountain.mx=width;
        }
    })
    
    complexShape();
    if(frameCount%(speed*50)==0){
        clouds.push(new Cloud(width-140,cloudImage[0]));
        // console.log("clouds "+ clouds.length);
    }
    if(frameCount%(speed*40)==0){
        obs.push(new Obstacles(width));
        // console.log(obs[obs.length-1].oheight);
        // console.log("obs "+ obs.length);
    }
    player.show();
    player.update();
    obs.forEach(ob => {
        ob.show();
        ob.update();
        if(ob.hit(player)){
            hitt++;
            // console.log(score);
            // console.log("hit");
        }
        if(obs.length>5){
            if(ob.offscreen()){
                obs.splice(1,1);
                obcount++;
            }
        }
        // ob.bounce(player);
        
    });
    clouds.forEach(cloud => {
        cloud.show();
        cloud.update();
        if(clouds.length>5){
            if(cloud.offscreen()){
                clouds.shift();
            }
        }
        
    });
    if(frameCount%100==0){
        console.log(obcount-hitt);
        score.innerHTML=obcount-hitt;
    }
    
  }
}


function keyPressed() {
    if (keyCode === UP_ARROW && play==true)
        {  player.jump();
           mountains.forEach((m)=> m.scaledown());
           mountains2.forEach((m2)=> m2.scaledown());
        }
}
function touchStarted() {
    // if(play==true)
    // {player.jump();}
}


