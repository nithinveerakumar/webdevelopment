var numcolor = 6;
var colour;
var pickedcolour;
var h1 = document.querySelector("h1");
var square = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#rgb");
var modeBtn = document.querySelectorAll(".mode");
var resetBtn = document.querySelector("#reset");
var result = document.querySelector("#result");
resetBtn.addEventListener("click",reset);
init();
function init()
{
	for(var i = 0;i < modeBtn.length;i++)
	{	
		modeBtn[i].addEventListener("click",function()
		{
			this.textContent === "Easy"? numcolor = 3 : numcolor = 6;
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.classList.add("selected");
			reset();
		});

	}
	colorDisplay.textContent = pickedcolour;
	for (var i = 0 ; i < square.length; i++) 
	{
	
			square[i].addEventListener("click",function () 
				{
					var clickedColor = this.style.background;
					if(clickedColor === pickedcolour)
					{
						result.textContent = "Right";
						changeColour(pickedcolour);
					resetBtn.textContent = "Play Again?"
				}	
				else 
				{
					this.style.background = "#232323";
					result.textContent = "Try again";			
				}
			});
	}
			reset();
}
function reset()
{	
	colour = generateRandomcolor(numcolor);
	pickedcolour = pickcolor();
	colorDisplay.textContent = pickedcolour;
	h1.style.background = "steelblue";
	result.textContent = "";
	resetBtn.textContent = "New colour";
	for(var i = 0;i < square.length;i++)
	{
		if(colour[i])
		{
			square[i].style.background = colour[i];
			square[i].style.display = "block";
		}
		else
		{
			square[i].style.display = "none";
		}
	}
}


function changeColour(color)
{

	for (var j = 0 ; j < square.length; j++)
			{
				square[j].style.background = color;
			}
			h1.style.background = color;
}

function pickcolor()
{

	var random = Math.floor(Math.random()*colour.length);
	return colour[random];
}

function generateRandomcolor(num)
{
	var arr = [];
	for(var i = 0 ;i < num ;i++)
	{
		arr.push(randomcolor());
	}
	return arr;
}

function randomcolor()
{
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}