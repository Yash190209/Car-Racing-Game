canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 100;
car1_height = 90;
car2_width = 100;
car2_height = 90;

background_image = "2.jpg";

rover1_image = "350z.png";
rover2_image = "SeekPng.com_car-top-view-png_544314.png";

car1_x = 10;
car1_y = 10;
car2_x = 10;
car2_y = 20;

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

    rover_imgTag = new Image(); 
    rover2_imgTag = new Image();//defining a variable with a new image
    rover_imgTag.onload = uploadrover();
    rover2_imgTag.onload = uploadrover(); // setting a function, onloading this variable
    rover_imgTag.src = rover1_image;
    rover2_imgTag.src = rover2_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(rover_imgTag, car1_x,car1_y, car1_width, car1_height);
	ctx.drawImage(rover2_imgTag, car2_x,car2_y, car2_width, car2_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
}

function up()
{
	if(rover_y >=0)
	{
		rover_y = rover_y - 10;
		console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		 uploadBackground();
		 uploadrover();
	}
}
function down()
{
	if(rover_y <=500)
	{
		rover_y =rover_y+ 10;
		console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function left()
{
	if(rover_x >= 0)
	{
		rover_x =rover_x - 10;
		console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function right()
{
	if(rover_x <= 700)
	{
		rover_x =rover_x + 10;
		console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		uploadrover();
   }
}
	