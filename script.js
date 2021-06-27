document.addEventListener('DOMContentLoaded', () =>{
		var x=0;
		const boxes=document.querySelectorAll(".box");
		   boxes[x].style.backgroundColor="red";

           document.querySelectorAll('.button').forEach(function(button){
          button.onclick= function(){
		   boxes[x].style.backgroundColor="papayawhip";
		   x+=parseInt(button.dataset.index);
		   x=x%9;
		   if(x<0)x=0;
		   boxes[x].style.backgroundColor="red";}})

		   let keys ={
				   '37' : -1,'38':-3,'39':+1,'40':+3};
		  document.addEventListener("keyup", event =>{
				  boxes[x].style.backgroundColor="papayawhip";
				  x+=keys[event.keyCode];
				  x=x%9;
				  if(x<0)x=0;
				  boxes[x].style.backgroundColor="red";
				  event.preventDefault();
		  })
				  
		})

