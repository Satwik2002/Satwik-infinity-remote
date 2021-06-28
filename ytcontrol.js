let column_number=4;
function setcolumn(){
    if (window.innerWidth>1143)column_number=4;
    else if(window.innerWidth>887)columnnum=3;
    else columnnum=2;
}
window.addEventListener("resize",setcolumn );
setcolumn();

var left_arrow = new KeyboardEvent("keydown" ,{keyCode: 37});
var up_arrow = new KeyboardEvent("keydown" ,{keyCode: 38});
var right_arrow = new KeyboardEvent("keydown" ,{keyCode: 39});
var down_arrow = new KeyboardEvent("keydown" ,{keyCode: 40});


let index=0;
let keys = {37: -1,38: -column_number,39: +1,40: +column_number};
var vdbox = document.querySelectorAll("#content.style-scope ytd-rich-item-renderer");
var drop_buttons = document.querySelectorAll("#button-container.style-scope.ytd-rich-shelf-renderer");
let drop_buttons_index = -1;
function remove_highlight(){
	document.addEventListener("keydown",() =>
		drop_buttons[drop_buttons_index].style.backgroundColor="white");
}
	   let mov_index;
document.addEventListener("keydown", event => {
       vdbox[index].style.backgroundColor = "white";
		mov_index=keys[event.keyCode];
	   index+=mov_index;
	   if(vdbox[index].getAttribute("hidden")==""){
			   index+=(12-(mov_index+column_number));
			   drop_buttons_index+=1;
			   drop_buttons[drop_buttons_index].style.backgroundColor="red";
			   remove_highlight();
	   }
		else{
	   if(index<0)index=0;
	   vdbox[index].scrollIntoView({block:"center",behaviour:"smooth"});
       vdbox[index].style.backgroundColor = "red";
	   vdbox = document.querySelectorAll("#content.style-scope ytd-rich-item-renderer");
		}
})


   
