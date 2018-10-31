var flag=6;
var color=generateRandomColors(6);
var select=document.querySelectorAll(".square");
var pickedcolor=pickcolor();
function changeColor(){
	for(var i=0;i<color.length;i++)
		select[i].style.backgroundColor=pickedcolor;
}

var reset=document.querySelector("#reset");
reset.addEventListener("click",function(){
	
	color=generateRandomColors(flag);
	pickedcolor=pickcolor();
	h.style.backgroundColor="steelblue";
	reset.textContent="NEW COLORS";
	message.textContent="";

text.textContent=pickedcolor; 
for(var i=0;i<select.length;i++) 
select[i].style.backgroundColor=color[i];
	
})

for(var i=0;i<select.length;i++){
select[i].style.backgroundColor=color[i];
var text=document.getElementById("text");
text.textContent=pickedcolor; 
var message=document.querySelector("#message");
var h=document.querySelector("h1");


select[i].addEventListener("click",function()
{
	var clickedcolor=this.style.backgroundColor;
	console.log(clickedcolor,pickedcolor);
	if(clickedcolor===pickedcolor){
		changeColor();
message.textContent="CORRECT!";

reset.textContent="RESET";
h.style.backgroundColor=pickedcolor;}
else{
this.style.backgroundColor="#232323";
message.textContent="TRY AGAIN!";
}
})

}

function generateRandomColors(num)
{var a=[]
   for(var i=0;i<num;i++)
   	a.push(selcol());
   return a;

}
function selcol()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";

}
var easy=document.querySelector("#easy");
easy.addEventListener("click",function(){
	flag=3;
	easy.classList.add("selected");
	hard.classList.remove("selected");
	color=generateRandomColors(3);
	pickedcolor=pickcolor();
	h.style.backgroundColor="steelblue";
	text.textContent=pickedcolor;
	for(var i=0;i<select.length;i++)
	{
		if(color[i])
			select[i].style.backgroundColor=color[i];
		else
			select[i].style.display="none";
	}
})
var hard=document.querySelector("#hard");
hard.addEventListener("click",function(){
	flag=6;
	
	hard.classList.add("selected");
	easy.classList.remove("selected");
	color=generateRandomColors(6);
	pickedcolor=pickcolor();
	h.style.backgroundColor="steelblue";
	text.textContent=pickedcolor;
	for(var i=0;i<select.length;i++)
	{
	        select[i].style.display="block";
			select[i].style.backgroundColor=color[i];
	}
})
function pickcolor(){
	var random=Math.floor(Math.random()*color.length);
	return color[random];
}