function setup()
{
    canvas = createCanvas(450, 450);
    canvas.position(780, 100);

    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100,100);
}
function draw()
{
    background('aqua');
}