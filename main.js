song="";
song1="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload() {
    
    song=loadSound("music.mp3");
    song1=loadSound("music2.mp3");
}

function setup() {
    


    canvas=createCanvas(500,400);
    canvas.position(400);

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded() {
  console.log('posenet is started');
}






function gotPoses(results) {
  if(results.length>0){
  console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristX=results[0].pose.leftWrist.y;
    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("rightwristX ="+rightWristX+"rightwristY"+rightWristY);
  }
}





function draw() {
  image(video,0,0,600,500)  
}