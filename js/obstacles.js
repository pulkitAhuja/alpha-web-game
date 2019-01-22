function Obstacles(x){
    this.ox=x;
    this.oheight=(Math.floor(Math.random() * (8 - 6) ) + 6)*10;
    this.y=height-100-this.oheight;
   
    this.speed=speed;
    this.fill='#fff'
    this.show=function(){
        fill(this.fill);
        noStroke();
        rect(this.ox,this.y,40,this.oheight);
        
    }
    this.hit=function(player){
        var dist= (player.x-this.ox)*(player.x-this.ox) + (player.y-this.y)*(player.y-this.y);
        dist=Math.sqrt(dist);
        // console.log(dist);
        if(dist<70){
            // console.log(dist);
            this.fill="red";
            return true;
        }
        else return false;
    }
    this.bounce=function(player){
        
        if ((player.y+40)<=this.y && (player.y+40)>=(this.y-10) ){
            // console.log("called0");
            if(player.x>=this.ox-80 && player.x<=this.ox+40){
               
                player.jump();
            }
        }
    }
    this.offscreen= function(){
         if(this.ox<0)
            {return true;}
         else return false;
    }
    this.update=function(){
        this.ox-=this.speed;
    }
    
}