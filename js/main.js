var items = [document.getElementById("item1-1").style, document.getElementById("item2-1").style, document.getElementById("item3-1").style, document.getElementById("item4-1").style, document.getElementById("item5-1").style, document.getElementById("item7-1").style, document.getElementById("item8-1").style, document.getElementById("item10-1").style, document.getElementById("item11-1").style, document.getElementById("item12-1").style, document.getElementById("item13-1").style, document.getElementById("item14-1").style];
var positions = [];
var posX = 0;
var posY = 0;
scatter();

function getScreenSize() {
    var width = screen.width - 370;
    var height = screen.height - 200;
    return [width, height];
}
function getRandomCoords() {
    return [Math.ceil((Math.random() * (getScreenSize()[0] - 0)) / 10) * 10, Math.ceil((Math.random() * (getScreenSize()[1] - 0)) / 10) * 10]
}

function scatter() {
    for (var i = 0; i < items.length; i++) {
        posX = getRandomCoords()[0];
        posY = getRandomCoords()[1];
        positions[i] = [posX, posY];
        items[i].left = posX + "px";
        items[i].top = posY + "px";
    }
}

function animate() {
    animateX();
    animateY();
}

const timer = ms => new Promise(res => setTimeout(res, ms)) //creates a function to delay each iteration of the movements
async function animateX() {
    for (let i = 0; i < positions.length; i++) { //loops though each letter
        var temp = positions[i][0]; //stores the x value of each letter
        var scale = temp / 100; //
        for (let a = 1; a < 100; a++) {
            temp -= scale;
            items[i].left = temp + "px";
            if (a == 99) {items[i].left = "0px";}
            await timer(8);
        }
    }
}
async function animateY() {
    for (let i = 0; i < positions.length; i++) { //loops though each letter
        var temp = positions[i][1]; //stores the x value of each letter
        var scale = temp / 100; //
        for (let a = 1; a < 100; a++) {
            temp -= scale;
            items[i].top = temp + "px";
            if (a == 99) {items[i].top = "0px";}
            await timer(8);
        }
    }
}