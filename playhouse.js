img = "";
status = "";

function preload() {
    img_play = loadImage('playhouse.jpg');
}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_play").innerHTML = "detecting objects";
}

function modelLoaded() {
    console.log("the model is loaded");
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult() {
    if(error){
        console.error(error);
    }
    console.log(results);
}