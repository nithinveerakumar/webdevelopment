var colour = ["rgb(0, 255, 0)",
"rgb(0, 0, 255)",
"rgb(0, 255, 255)",
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(255, 0, 255)"
];

var square = document.querySelectorAll(".square");
var pickedcolour = colour[3];
var colorDisplay = document.querySelector("#rgb");
colorDisplay.textContent = pickedcolour;
for (var i = 0 ; i < square.length; i++) {
	square[i].style.background = colour[i];

	square[i].addEventListener("click",function () {
			var clickedColor = this.style.background;
			if(clickedColor === pickedcolour)
			{
				alert("Right");
			}	
			else 
			{
				console.log(clickedColor,pickedcolour);
				alert("wrong !");
			}
		})

}
