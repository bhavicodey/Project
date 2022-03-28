status = "";
value_from_input_box = "";
objects = [];
results = [];
synth = "";

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}

function draw()
{
    image(video,0,0,300,300);

    if(status != "")
    {
        r = random(255);
        g = random(255);
        b = random(255);
  
        objectDetector.detect(video,gotResult);

    for( i = 0; i< objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Objects Detected";

            fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%" ,  objects[i].x+15, objects[i].y+15);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            

      
        }
    }

}
function start()
{
    console.log('ml5 version:', ml5.version);
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Sgt2EXMa5/model.json',modelLoaded);
   
}
function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
}
function gotResult(error,results)
{
    if(error)
    {
        console.log(error);
    }
    if(results)
    {
        console.log(results);
        objects = results;  
    }
}