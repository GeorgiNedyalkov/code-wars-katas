function trianglePerimeter(triangle){
   let sideA = triangle.a; 
   let sideB = triangle.b; 
   let sideC = triangle.c; 

   console.log(sideA, sideB, sideC);
   
   let result = triangle.calculateTrianglePerimeter(sideA, sideB, sideC);

   return result.toFixed(6);
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = new Point(a.x, a.y);
        this.b = new Point(b.x, b.y);
        this.c = new Point(c.x, c.y);
    }
    
    
    calculateTrianglePerimeter(a, b, c) {
        let sum = 0;
        sum = (this.a.x) + (this.a.y) + (this.b.x) + (this.b.y) + (this.c.x + this.c.y);
        return sum;
    }    
}
console.log(trianglePerimeter(new Triangle(new Point(10, 10), new Point(40, 10), new Point(10, 50))));
console.log(trianglePerimeter(new Triangle(new Point(15, -10), new Point(40, 20), new Point(10, 50))));
