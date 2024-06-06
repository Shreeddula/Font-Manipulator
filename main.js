function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(200,250)

    canvas=createCanvas(550,550);
    canvas.position(1200,250);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Pose Net Initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        right_wrist_X=results[0].pose.rightWrist.x;
        left_wrist_X=results[0].pose.leftWrist.x;
        console.log("Right wrist x = " + right_wrist_X);
        console.log("Left wrist x = " + left_wrist_X);
        difference=floor(left_wrist_X-right_wrist_X);
        console.log(difference);
    }
}
right_wrist_X=0;
left_wrist_X=0;
difference=0;

function draw(){
    background("#fff700");
    textSize(difference);
    fill("green");
    text("Shreeddula",220,200);

}