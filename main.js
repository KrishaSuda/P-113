function preload(){
}   

function setup() {
    canvas = createCanvas(700, 400);
    canvas.position(112.5,225)
    video = createCapture(VIDEO);
    video.hide()    
}

function take_snapshot(){
    save('student_name.png');
}

function draw(){
    image(video, 100, 50, 500, 300)
    color = document.getElementById('color_input').value;
    fill(color);
    stroke(color);
    circle(100,50,16);
    circle(120,50,16);
    circle(140,50,16);
    circle(160,50,16);
    circle(180,50,16);
    circle(200,50,16);
    circle(220,50,16);
    circle(240,50,16);
    circle(260,50,16);
    circle(280,50,16);
    circle(300,50,16);
    circle(320,50,16);
    circle(340,50,16);
    circle(360,50,16);
    circle(380,50,16);
    circle(400,50,16);
    circle(400,50,16);
    circle(420,50,16);
    circle(440,50,16);
    circle(460,50,16);
    circle(480,50,16);
    circle(500,50,16);
    circle(520,50,16);
    circle(540,50,16);
    circle(560,50,16);
    circle(580,50,16);
    circle(600,50,16);
    circle(600,70,16);
    circle(600,90,16);
    circle(600,110,16);
    circle(600,130,16);
    circle(600,150,16);
    circle(600,170,16);
    circle(600,190,16);
    circle(600,210,16);
    circle(600,230,16);
    circle(600,250,16);
    circle(600,270,16);
    circle(600,290,16);
    circle(600,310,16);
    circle(600,310,16);
    circle(600,350,16);
    circle(600,330,16);
    circle(600,350,16);
    circle(100,350,16);
    circle(120,350,16);
    circle(140,350,16);
    circle(160,350,16);
    circle(180,350,16);
    circle(200,350,16);
    circle(220,350,16);
    circle(240,350,16);
    circle(260,350,16);
    circle(280,350,16);
    circle(300,350,16);
    circle(320,350,16);
    circle(340,350,16);
    circle(360,350,16);
    circle(380,350,16);
    circle(400,350,16);
    circle(400,350,16);
    circle(420,350,16);
    circle(440,350,16);
    circle(460,350,16);
    circle(480,350,16);
    circle(500,350,16);
    circle(520,350,16);
    circle(540,350,16);
    circle(560,350,16);
    circle(580,350,16);
    circle(100,330,16);
    circle(100,310,16);
    circle(100,290,16);
    circle(100,270,16);
    circle(100,250,16);
    circle(100,230,16);
    circle(100,210,16);
    circle(100,190,16);
    circle(100,170,16);
    circle(100,190,16);
    circle(100,210,16);
    circle(100,230,16);
    circle(100,250,16);
    circle(100,270,16);
    circle(100,290,16);
    circle(100,350,16);
    circle(100,190,16);
    circle(100,170,16);
    circle(100,150,16);
    circle(100,130,16);
    circle(100,110,16);
    circle(100,90,16);
    circle(100,70,16);
}
