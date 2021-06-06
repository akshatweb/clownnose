var nosex=0;
var nosey=0;

function preload(){
    
    clownnose=loadImage("https://i.postimg.cc/sxSqnYzv/clownnose-1.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);


    
}

function modelLoaded(){
    console.log("posenet started");
}
function gotPoses(result){
    if (result.length>0){
        console.log(result);
        console.log("nose x is"+result[0].pose.nose.x);
        console.log("nose y is"+result[0].pose.nose.y);
        nosex=result[0].pose.nose.x-30;
        nosey=result[0].pose.nose.y-30;



    }
}



function draw(){
image(video,0,0,300,300);
image(clownnose,nosex,nosey,50,50);

//circle(nosex,nosey,30);
//stroke("red");
//fill("red");
}


