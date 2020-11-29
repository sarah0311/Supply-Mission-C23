class Block{
    constructor(x,y,width,height){
        this.width = width;
        this.height = height;

        var block_options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,block_options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        rectMode(CENTER);
        
        fill("red");
        stroke("red");
        
        rect(pos.x,pos.y,this.width,this.height);
        
    }
}