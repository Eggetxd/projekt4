function dropDownClick() {
  document.getElementById("slideIn").classList.toggle("showSlideIn");
}

window.onclick = function(event) {
    if (!event.target.matches('.slideInButton')) {
        document.getElementById("slideIn").classList.remove('showSlideIn');
    }
}



let imageShown = 0;
times = 0;
function changePicture() {
  let images = ["https://picsum.photos/id/1015/" + window.innerWidth + "/" + ((window.innerHeight / 2).toFixed()), "https://picsum.photos/id/1018/" + window.innerWidth + "/" + (window.innerHeight * 2 / 3).toFixed(), "https://picsum.photos/id/1016/" + window.innerWidth + "/" + (window.innerHeight * 2 / 3).toFixed()];

  document.getElementById("changingImage").src=images[imageShown];
  if (imageShown == 2) {
    imageShown = 0;
  } else {
    imageShown++;
  }
}
changePicture();
setInterval(changePicture, 3000);