
class Shape {
    constructor(
        sides = []
    ){
        this.sides = sides
    }

    perimeter(){
        return (this.sides.length) ? this.sides.reduce((acc, cur) => acc + cur) : 0
    }


}
/*
console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0
*/

class Rectangle extends Shape {
    constructor(
        length = 0,
        width = 0
    ){
        super([length, width, length, width])
        this.length = length
        this.width = width
    }
    area() {
        return this.length * this.width
    }
}

/*
console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0
*/

class Triangle extends Shape{
    constructor(
        sideA = 0,
        sideB = 0,
        sideC = 0
    ){
        super([sideA, sideB, sideC])
        this.sideA = sideA
        this.sideB = sideB
        this.sideC = sideC
    }
    area(){
        let s = ((this.sideA + this.sideB + this.sideC)/2)
        return Math.sqrt(s*(s - this.sideA)*(s - this.sideB)*(s - this.sideC))
    }
}

/*
console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0
*/

{
// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];

for (const sides of data){
    let s = ((sides[0]+sides[1]+sides[2])/2)
    let a = Math.sqrt(s*(s - sides[0])*(s - sides[1])*(s - sides[2]))
switch (sides.length) {
    case 2:
      if(sides[0] === sides[1]){
    console.log(`Square with sides ${sides.toString()} has a perimeter of ${2*(sides[0])+2*(sides[1])} and an area of ${sides[0] * sides[1]}`)
      }else {
    console.log(`Rectangle with sides ${sides.toString()} has a perimeter of ${2*(sides[0])+2*(sides[1])} and an area of ${sides[0] * sides[1]}`)
      }
      break;
    case 3:
      console.log(`Triangle with sides ${sides.toString()} has a perimeter of ${sides[0]+sides[1]+sides[2]} and an area of ${a}`)
      break;
      default:
      console.log(`Shape with ${sides.length} is unsupported`)
      break;
    }
}
}