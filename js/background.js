function Cloud(x){
    this.cx=x;
    this.y=40+(Math.random())*100;
    this.speed=speed;
    this.show=function(){
        fill('#fff');
        ellipse(this.cx,this.y,60,40);
        noStroke();
    }
    this.offscreen=function(){
         if(this.cx==0)
            return true;
         else return false;
    }
    this.update=function(){
        this.cx-=this.speed;
    }
    
}
function Mountain(x,mimage,n){
    this.mx=x;
    this.y=150;
    this.mimage=mimage;
    this.size=this.mimage.width;
    this.speed=speed/n;
    this.show=function(){
        image(this.mimage,this.mx,this.y,this.size,500);
    }
    this.offscreen=function(){
        if(this.mx<-this.size-50){
            return true;
        }
        else return false;
    }
    this.update=function(){
        this.mx-=(this.speed);
    }
}