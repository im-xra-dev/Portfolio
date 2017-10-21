
img = 0;//START IMAGE
max = 3;//MAX IMAGES


function active(elm){
	elm.className = "button-hover";
}
function inactive(elm){
	elm.className = "button";
}
function hover_img(){
	var elm = document.getElementById("left");
	elm.className = "display";
	elm = document.getElementById("right");
	elm.className = "display";
}
function hover_img_stop(){
	var elm = document.getElementById("left");
	elm.className = "hide";
	elm = document.getElementById("right");
	elm.className = "hide";
}
function left(){
	var elm = document.getElementById("frame");
	img--;
	if(img<0){
		img = max;
	}
	console.log(img);
	elm.src = "images/"+img+".png";
}
function right(){
	var elm = document.getElementById("frame");
	img++;
	if(img>max){
		img = 0;
	}
	console.log(img);
	elm.src = "images/"+img+".png";
}
