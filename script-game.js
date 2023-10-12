let engine = Matter.Engine.create();


window.addEventListener("resize", function(){
    // console.log(document.getElementById("game").offsetWidth);
    // console.log(document.getElementById("game").offsetHeight);
    let gameW = document.getElementById("game").offsetWidth;
   let gameH = document.getElementById("game").offsetHeight;
 });
 

let render = Matter.Render.create({
    element: document.getElementById("game"),
    engine:engine,
    options: {
        width: document.getElementById("game").offsetWidth,
        height: document.getElementById("game").offsetHeight,
        wireframes: false,
        background: 'tomato'
    }
});


let ground = Matter.Bodies.rectangle(document.getElementById("game").offsetWidth/2, document.getElementById("game").offsetHeight, 920, 1, {
    isStatic: true
});
let boxA = Matter.Bodies.rectangle(400, 200, 80, 80, {
    render: {
        fillStyle: 'red',
    }
});
let boxB = Matter.Bodies.rectangle(500, 50, 80, 80, {
    render: {
        fillStyle: 'orange'
    }
});

let ball = function (mouseX,mouseY) {
    return Matter.Bodies.rectangle(mouseX, mouseY, 80, 80, {
        render: {
            fillStyle: getRandomRgb()
        }
    });
}

Matter.World.add(engine.world,[boxA, boxB, ground]);
Matter.Engine.run(engine);
Matter.Render.run(render);


function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }


$("#game").on('click', function (event) {
    let x = event.clientX;
    let y = event.clientY;
    Matter.World.add(engine.world, ball(x, y));
});