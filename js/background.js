function Cloud(x,cimage){
    this.cx=x;
    this.y=40+(Math.random())*100;
    this.speed=speed;
    this.height=128;
    this.width=128;
    this.show=function(){
        image(cimage, this.cx,this.y, this.width,this.height);
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
    this.width=this.mimage.width+200;
    this.height=600;
    this.speed=speed/n;
    this.s=1
    this.show=function(){
        image(this.mimage,this.mx,this.y,this.width,this.height);
    }
    this.scaleback=function(){
        if(this.s>1)
        {this.s-=0.005;
        }
        
    }
    this.scaledown=function(){
       this.s+=0.1;
    }
    this.offscreen=function(){
        if(this.mx<-this.size-50){
            return true;
        }
        else return false;
    }
    this.update=function(){
        this.mx-=(this.speed);
        if(this.height>600 || this.width>this.mimage.width+200){
            this.height=600;
            this.width=this.mimage.width+200;
        }
        else
        {this.height=600/this.s;
        this.width=this.mimage.width+200/this.s;
        }
        // console.log(this.s);
    }
}