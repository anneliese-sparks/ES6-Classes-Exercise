class Room {
  constructor (name, length, width, capacity = 15)  {
      this.name = name;
      this.length = length;
      this.width = width;
      this.capacity = capacity;
  }

  available = true;

  getArea() {
      return this.length * this.width;
  }

  getPerimeter() {
      return (this.length * 2) + (this.width * 2);
  }
}

let room1 = new Room("Sun", 30, 20);
let room2 = new Room("Green", 15, 20);
room2.available = false;

console.log(room1);
console.log(room2);
console.log(room1.getArea());
console.log(room1.getPerimeter());
console.log(room2.getArea());
console.log(room2.getPerimeter());
console.log(room1.available);
console.log(room2.available);
console.log(room2.capacity = 18);
console.log(room1.capacity);