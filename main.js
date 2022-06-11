Song1 ="";
Song2 ="";

Song1_Status ="";
Song2_Status ="";

Score_Right_Wrist = 0;
Score_Left_Wrist = 0;

Left_WristX = 0;
Left_WristY = 0;

Right_WristX = 0;
Right_wristY = 0;

function preload(){
    Song1 = loadSound("Peter_pan.mp3");
    Song2 = loadSound("harry_potter.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}