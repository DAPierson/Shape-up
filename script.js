let iContainer = document.getElementById("inputContainer");

let sContainer = document.getElementById("shapeContainer");

let cSquare = document.getElementById("square");

let cRectangle = document.getElementById("rectangle");

let cCircle = document.getElementById("circle");

let cTriangle = document.getElementById("triangle");

let sLength = document.getElementById("squareLength");

let rHeight = document.getElementById("rectangleHeight");

let rWidth = document.getElementById("rectangleWidth");

let cDiameter = document.getElementById("circleDiameter");

let tHeight = document.getElementById("triangleHeight");

let nValue = document.getElementById('shapeName');

let hValue = document.getElementById('height');

let wValue = document.getElementById('width');

let rValue = document.getElementById('radius');

let pValue = document.getElementById('perimeter');

let aValue = document.getElementById('area');



function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


class Shape {
    constructor(width, height, perimeter, area, name, radius) {

        this.shape = document.createElement('div');
        sContainer.appendChild(this.shape);
        this.shape.classList.add('shape');
        this.shape.addEventListener('click', () => {
            this.values();
        })
        this.location();
        this.width = width;
        this.height = height;
        this.radius = radius;
        this.area = area;
        this.perimeter = perimeter;
        this.name = name;




    }


    location() {
        let xVal = randomVal(0, 550);
        let yVal = randomVal(0, 550);
        this.shape.style.left = `${xVal}px`;
        this.shape.style.top = `${yVal}px`;
    }

    values() {
        nValue.innerText = `Shape Name: ${this.name}`;
        hValue.innerText = `Height: ${this.height}`;
        wValue.innerText = `Width: ${this.width}`;
        rValue.innerText = `Radius: ${this.radius}`;
        pValue.innerText = `Perimeter: ${this.perimeter}`;
        aValue.innerText = `Area: ${this.area}`;


    }



}


class Square extends Shape {
    constructor(width, height, perimeter, area, name) {
        super(width, height, perimeter, area, name);
        this.shape.style.width = `${width}px`;
        this.shape.style.height = `${height}px`;
    }
}

class Rectangle extends Shape {
    constructor(width, height, perimeter, area, name) {
        super(width, height, perimeter, area, name);
        this.shape.style.width = `${width}px`;
        this.shape.style.height = `${height}px`;
    }
}

class Circle extends Shape {
    constructor(width, height, perimeter, area, name, radius) {
        super(width, height, perimeter, area, name, radius);
        this.shape.style.width = `${width}px`;
        this.shape.style.height = `${height}px`;
        this.shape.classList.add('circle');
    }
}

class Triangle extends Shape {
    constructor(width, height, perimeter, area, name) {
        super(width, height, perimeter, area, name);
        this.shape.style.borderBottom = `${width}px solid blue`;
       // this.shape.style.borderLeft = `${height / 2}px solid transparent`;
        this.shape.style.borderRight = `${height}px solid transparent`;
        this.shape.classList.add('triangle');
       
        
    }
}
cSquare.addEventListener('click', function () {
    let width = sLength.value;
    let height = sLength.value;
    let perimeter = width * 4;
    let area = width * height;
    let name = 'Square';

    new Square(width, height, perimeter, area, name);

})

cRectangle.addEventListener('click', function () {
    let width = rWidth.value;
    let height = rHeight.value;
    let perimeter = (height * 2) + (width * 2);
    let area = width * height;
    let name = 'Rectangle';

    new Rectangle(width, height, perimeter, area, name);

})

cCircle.addEventListener('click', function () {
    let diameter = cDiameter.value;
    let width = cDiameter.value;
    let height = cDiameter.value;
    let radius = diameter / 2;
    let perimeter = diameter * Math.PI;
    let area = Math.PI * radius * radius;
    let name = 'Circle';
    new Circle(width, height, perimeter, area, name, radius)
})

cTriangle.addEventListener('click', function () {
    let height = tHeight.value;
    let width = tHeight.value;
    let perimeter = height * 2 + (height* Math.sqrt(2));
    let area = height * width / 2;
    let name = 'Triangle';
    new Triangle(width, height, perimeter, area, name)
})