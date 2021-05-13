let clickImageShown = 0;

function dropDownClick() {
  document.getElementById("slideIn").classList.toggle("showSlideIn");
}

window.onclick = function(event) {
    if (!event.target.matches('.slideInButton')) {
        document.getElementById("slideIn").classList.remove('showSlideIn');
    }
}



let imageShown = 0;

function changeImage() {
  let images = ["https://picsum.photos/id/1015/" + window.innerWidth + "/" + ((window.innerHeight * 2 / 3).toFixed()), "https://picsum.photos/id/1018/" + window.innerWidth + "/" + (window.innerHeight * 2 / 3).toFixed(), "https://picsum.photos/id/1016/" + window.innerWidth + "/" + (window.innerHeight * 2 / 3).toFixed()];

  document.getElementById("changingImage").src = images[imageShown];

  if (imageShown == 2) {
    imageShown = 0;
  } else {
    imageShown++;
  }
}
changeImage();
setInterval(changeImage, 3000);

function clickImage(x) {
  let clickImages = ["https://picsum.photos/id/1015/" + ((window.innerWidth * 8 / 10).toFixed()) + "/" + (window.innerHeight * 2 / 3).toFixed(), "https://picsum.photos/id/1018/" + ((window.innerWidth *8/10).toFixed()) + "/" + (window.innerHeight * 2 / 3).toFixed(), "https://picsum.photos/id/1016/" + ((window.innerWidth *8/10).toFixed()) + "/" + (window.innerHeight * 2 / 3).toFixed()];
  
  if (x == 1) {
    clickImageShown ++;
    if (clickImageShown == 3) {
      clickImageShown = 0;
    }
  }
  if (x == -1) {
    clickImageShown --;
    if (clickImageShown == -1) {
      clickImageShown = 2;
    }
  }
  document.getElementById("clickImage").src = clickImages[clickImageShown];
}