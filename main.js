function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    webcam = createCapture(VIDEO);
    webcam.hide();
}
function draw() {
    image(webcam, 230, 150, 220, 200);
    fill("#00FFFF");
    circle(50, 50, 80);
    circle(50, 410, 80);
    circle(590, 50, 80);
    circle(590, 410, 80);
    fill("yellow");
    rect(90, 40, 460, 20);
    rect(90, 400, 460, 20)
    rect(40, 90, 20, 280);
    rect(580, 90, 20, 280);
}

function take_snapshot() {
    save('filter.png');
}