function dropDownClick() {
  document.getElementById("slideIn").classList.toggle("showSlideIn");
}

window.onclick = function(event) {
    if (!event.target.matches('.slideInButton')) {
        document.getElementById("slideIn").classList.remove('showSlideIn');
    }
}



let images = ["https://picsum.photos/id/1015/" + window.innerWidth + "/300", "https://picsum.photos/id/1016"];
let imageShown = 0;

function changePicture() {

  console.log(typeof images[0]);
  
  document.getElementById("changingImage").src=images[0];



  if (imageShown == (images.Length - 1)) {
    imageShown = 0;
  } else {
    imageShown++;
  }

  images[imageShown].style.display = "block";
}

changePicture();