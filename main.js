function preload(){
}

function setup()
{
    canvas = CreateCanvas(640, 480);
    canvas.position(110, 250);
    Video = createCapture(VIDEO);
    video.hide();

    tint_color  ="";
}

function draw()
{
    image(video, 0, 0, 640, 480);
}

function take_snapshot()
{
    save('student_name.png')
}