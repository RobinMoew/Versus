var i=0;
function expand(){
  if(i==0){
document.getElementById("menu").style.transform="scale(3)"; 
   document.getElementById("plus").style.transform="rotate(45deg)"; 
   document.getElementById("plus").style.left="28px"; 
   document.getElementById("plus").style.bottom="-4px"; 
   document.getElementById("add").style.display="none";
    i=1;
  }
  else{   document.getElementById("menu").style.transform="scale(0)"; 
   document.getElementById("plus").style.transform="rotate(0deg)"; 
   document.getElementById("plus").style.left="4px"; 
   document.getElementById("plus").style.bottom="0px"; 
   document.getElementById("add").style.display="block";
    i=0;
  }
}