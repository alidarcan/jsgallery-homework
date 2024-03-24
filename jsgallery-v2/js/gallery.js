var images = [
  {src: "https://cdn.pixabay.com/photo/2023/08/11/03/35/deer-8182756_1280.jpg", alt: "Deer"},
  {src: "https://cdn.pixabay.com/photo/2023/10/05/18/34/toadstool-8296596_1280.jpg", alt: "Mushroom"},
  {src: "https://cdn.pixabay.com/photo/2024/03/05/19/26/duck-8615153_1280.jpg", alt: "Duck"},
  {src: "https://cdn.pixabay.com/photo/2024/02/19/22/58/forest-8584311_1280.jpg", alt: "Forest"},
  {src: "https://cdn.pixabay.com/photo/2024/03/06/09/32/liverworts-8616125_1280.jpg", alt: "Flower"},
  {src: "https://cdn.pixabay.com/photo/2023/03/03/23/20/car-7828554_1280.jpg", alt: "Car"},
  {src: "https://cdn.pixabay.com/photo/2024/02/23/19/37/squirrel-8592682_1280.jpg", alt: "Squirrel"},
]
// const shuffledImages = images => {
//   for (let i = images.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const temp = images[i];
//     images[i] = images[j];
//     images[j] = temp;
//   }
//   return images
// }
const shuffledImages = images.sort((a, b) => 0.5 - Math.random());

function getImages(){
  let IMGDOMs = document.getElementsByTagName("img");
  for(let i= 0; i< IMGDOMs.length; i++){
    IMGDOMs[i].setAttribute("src", shuffledImages[i].src)
    IMGDOMs[i].setAttribute("alt", shuffledImages[i].alt)
    IMGDOMs[i].setAttribute("tabindex", 0)
    // IMGDOMs[i].setAttribute("height", "auto");
    IMGDOMs[i].setAttribute("width", "200px");
    IMGDOMs[i].setAttribute("onmouseover", "update(this)");
    IMGDOMs[i].setAttribute("onfocus", "update(this)");
    IMGDOMs[i].setAttribute("onmouseleave", "undo(this)");
    IMGDOMs[i].setAttribute("onblur", "undo(this)");
  }
}

function update(previewPic) {

  document.querySelector("#image").style.backgroundImage = `url(${previewPic.src})`;
  document.querySelector("#image").innerHTML = previewPic.alt;
}

function undo() {

  document.querySelector("#image").style.backgroundImage = "url('')";
  document.querySelector("#image").innerHTML =
    "Hover over an image.";
}
