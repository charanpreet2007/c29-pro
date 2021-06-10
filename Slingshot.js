class Slingshot {
    constructer(bodyA,pointB){
        var options = {
            bodyA: bodyA , 
            pointB: pointB,
            stiffness: 0.04,
            lenght: 10
        } 
    
        this.bodyA=bodyA
        this.pointB=body
        this.sling=Constraint.create(options)
        world.add(world,this.sling)
    
    
    }

    attach(body){
        this.sling.bodyA=body
    }
    fly()
    {
        this.sling.bodyA=null
    }

    display(){

        if(this.sling.BodyA)
        {
            var pointA=this.bodyA.position;
            var pointB=this.pointB

            strokeweight(2)
            strokeWeight(pointA.x,pointA.y,pointB.x,pointB.y)
        }

    }

}