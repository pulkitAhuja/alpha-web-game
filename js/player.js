function Player(x,y){
    this.x=x;
    this.ogx=x;
    this.ogy=y;
    this.y=y;
    this.gravity=1.7;
    this.speed=0;
    this.lift=8.5;
    this.img=characterImageArray[0];
    this.rep=0;
    this.show= function(){
        fill(255);
        
        if(frameCount%7==0){
          this.rep++;
          this.img=characterImageArray[(this.rep%6)];
        
        }
        image(this.img,this.x,this.y,100,120);
    }
    this.update= function(){
        this.y+=this.speed;
        if(this.y<this.ogy){
            // console.log('called');
            this.speed+=this.gravity*0.2;
            this.y+=this.speed;
        }
        if(this.y>this.ogy){
            this.y=this.ogy;
            this.speed=0;
        }
        if(this.y<10){
            this.speed=0;
            this.y=10;
        }
        if(this.x>this.ogx){
            this.x-=(this.gravity/30);
        }
        if(this.x>width){
            this.x=x;
        }
        
    }
    this.jump=function(){
        this.speed-=this.lift;
        // this.x+=this.speed/1.5;
    }
}