function dropDownClick() {
  document.getElementById("dropDown").classList.toggle("show");
  document.getElementById("dropDownButton").classList.toggle("buttonRadius");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropDownButton')) {
        var dropDown = document.getElementsByClassName("dropDownContent");
        dropDown[0].classList.remove('show');
    }
}