song="";
song2="";
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;

function preload(){
song=loadSound("The_Kid_Laroi_-_Without_You.mp3");
song2=loadSound("Stay(PagalWorld).mp3");
}

function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}
function draw(){
image(video,0,0,600,500);
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded(){
    console.log('posenet is initialized');
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    leftwristx=results[0].pose.leftWrist.x;
    leftwristy=results[0].pose.leftWrist.y;
    console.log('leftwrist x =',+ leftwristx,+ 'leftwrist y =',+ leftwristy);
    rightwristx=results[0].pose.rightWrist.x;
    rightwristy=results[0].pose.rightWrist.y;
    console.log('rightwristx=',+rightwristx,+'rightwristy=' + rightwristy);
    
}
}