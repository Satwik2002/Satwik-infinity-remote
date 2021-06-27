const column_number=3;
var left_arrow = new KeyboardEvent("keyup" ,{keyCode: 37});
var up_arrow = new KeyboardEvent("keyup" ,{keyCode: 38});
var right_arrow = new KeyboardEvent("keyup" ,{keyCode: 39});
var down_arrow = new KeyboardEvent("keyup" ,{keyCode: 40});

let index=0;
let keys = {37: -1,38: -column_number,39: +1,40: +column_number};
var vdbox = document.querySelectorAll("#content.style-scope ytd-rich-item-renderer");
document.addEventListener("keyup", event => {
       vdbox[index].style.backgroundColor = "white";
	   index+=keys[event.keyCode];
	   if(index<0)index=0;
	   vdbox[index].scrollIntoView({block:"center",behaviour:"smooth"});
       vdbox[index].style.backgroundColor = "red";
	   vdbox = document.querySelectorAll("#content.style-scope ytd-rich-item-renderer");

})


   
