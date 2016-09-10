console.log("This is running"); 



function addBrownborder(){
  var photo = document.getElementById("coffee");
  photo.style.border = "2px solid brown"
}

var photo = document.getElementById("coffee");
//photo.style.border = "2px solid brown"

photo.addEventListener("click",addBrownborder);