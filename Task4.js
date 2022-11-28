import {createTwoDimArrayOfZeros} from "./Utils.js";
// медианный фильтр
// h=4 x w=3 x RGB 
// h - строки
// w - столбцы

let img = [
  [3, 43, 34, 1, 4, 15, 22, 1],
  [4, 5, 6, 75, 0, 235, 255, 11],
  [3, 21, 103, 4, 8, 18, 0, 10],
  [11, 45, 77, 81, 19, 24, 12, 98],
  [67, 15, 22, 13, 67, 56, 100, 101],
  [56, 1, 9, 12, 4, 35, 128, 127],
  [89, 94, 112, 132, 176, 111, 110, 12],
  [154, 45, 3, 200, 205, 212, 241, 1],
];


function calcMedian(img, i, j, kernelSize) {
  let medianIndex = Math.floor(kernelSize * kernelSize / 2);

  let arrayToSort = new Array(9);
  let arIndex = 0;
  for (let k = 0; k < kernelSize; k++) {
    for (let l = 0; l < kernelSize; l++) {
      arrayToSort[arIndex++] = img[k + i][l + j];
    }
  }
  //важно знать какая сложность сортировки?
  return arrayToSort.sort(
    function (a, b) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    }
  )[medianIndex];
}

function applyMedianFilter(img) {
  let kernelOffset = 1;
  let kernelSize = 3;
  // новое изображение будет меньше на чем исходное
  let medianImg = createTwoDimArrayOfZeros(img.length - (kernelOffset * 2), img[0].length - (kernelOffset * 2));

  for (let i = kernelOffset; i < img.length - kernelOffset; i++) {
    for (let j = kernelOffset; j < img[0].length - kernelOffset; j++) {
      let row = i - kernelOffset;
      let col = j - kernelOffset;
      medianImg[row][col] = calcMedian(img, row, col, kernelSize)
    }
  }

  return medianImg;
}


console.log("Applying median filter.")
console.table(applyMedianFilter(img))

let m = 8, n = 8, min = 0, max = 100;
console.log(min + Math.random() * (max - min + 1))