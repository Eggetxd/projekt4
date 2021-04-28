function dropDownClick() {
  document.getElementById("slideIn").classList.toggle("showSlideIn");
  console.log("visar")
}

window.onclick = function(event) {
    if (!event.target.matches('.slideInButton')) {
        var slideIn = document.getElementsByClassName("slideInContent");
        
        slideIn[0].classList.remove('showSlideIn');
        console.log("visa inte")
        console.log(event.target)
          
    }
}