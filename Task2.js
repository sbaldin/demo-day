import {imgColor, makeGrayscaleImg} from "./Task1.js";
// h=4 x w=3 x RGB
// h - строки
// w - столбцы

let grayscaleImg = makeGrayscaleImg(imgColor)

function isImgDark(grayscaleImg) {
  let darkPixes = 0;
  for (let i = 0; i < grayscaleImg.length; i++) {
    for (let j = 0; j < grayscaleImg[i].length; j++) {
      //Считаем количество пикселей с яркостью Y <= 127.
      if (grayscaleImg[i][j] <= 127) {
        darkPixes++;
      }
    }
  }
  // всего пикселей = h x w
  let totalPixels = grayscaleImg.length * grayscaleImg[0].length
  console.log(`Total pixels: ${totalPixels}`)
  console.log(`Dark pixels: ${darkPixes}`)
  return (totalPixels - darkPixes) < darkPixes
}


console.log("Is image dark?")

if (isImgDark(grayscaleImg)) {
  console.log("Yes. Image is dark.");
} else {
  console.log("No. Image is bright.");
}