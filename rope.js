

class Rope{
	constructor(body1,body2,pointA,pointB)
	{
      this.pointA=pointA
      this.pointB=pointB

	  var options = {
		  bodyA:body1,
		  bodyB:body2,
		  pointB:{x:this.pointA,y:this.pointB}
	  }

	//create rope constraint here

	con = Matter.Constraint.create({
		pointA:{x:200,y:20},
		bodyB:ball,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	}


    //create display() here 
	display(){

		var pointA = this.bodyA.position;
		var pointB = this.bodyB.position;

        strokeWeight(2);
		line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
	}

}