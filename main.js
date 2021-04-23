function dropDownClick() {
  /*
  document.getElementById("dropDown").classList.toggle("show");
  */
  document.getElementById("slideIn").classList.toggle("showSlideIn");
  console.log("visar")
}
/*
window.onclick = function(event) {
    if (!event.target.matches('.dropDownButton')) {
        var dropDown = document.getElementsByClassName("dropDownContent");
        dropDown[0].classList.remove('show');
    }
}
*/

window.onclick = function(event) {
    if (!event.target.matches('.dropDownButton')) {
        var slideIn = document.getElementsByClassName("slideInContent");
        
        slideIn[0].classList.remove('showSlideIn');
        console.log("visa inte")
        console.log(event.target)
          
    }
}