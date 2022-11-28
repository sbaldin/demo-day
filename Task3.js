import {createTwoDimArrayOfZeros} from "./Utils.js";
// фильтр Гаусса
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

let kernel = [
  [0.000789, 0.006581, 0.013347, 0.006581, 0.000789],
  [0.006581, 0.054901, 0.111345, 0.054901, 0.006581],
  [0.013347, 0.111345, 0.225821, 0.111345, 0.013347],
  [0.006581, 0.054901, 0.111345, 0.054901, 0.006581],
  [0.000789, 0.006581, 0.013347, 0.006581, 0.000789]
]


function applyKernel(img, i, j) {
  let result = 0;

  for (let k = 0; k < kernel.length; k++) {
    for (let l = 0; l < kernel[0].length; l++) {
      result += img[k + i][l + j] * kernel[k][l];
    }
  }

  return result;
}

function applyGaussianBlurFilter(img) {
  let kernelOffset = 2;
  // новое изображение будет меньше на чем исходное
  let blurredImg = createTwoDimArrayOfZeros(img.length - (kernelOffset * 2), img[0].length - (kernelOffset * 2));

  for (let i = kernelOffset; i < img.length - kernelOffset; i++) {
    for (let j = kernelOffset; j < img[0].length - kernelOffset; j++) {
      blurredImg[i - kernelOffset][j - kernelOffset] = Math.floor(applyKernel(img, i - kernelOffset, j - kernelOffset));
    }
  }

  return blurredImg;
}


console.log("Applying gaussian blur.")
console.table(applyGaussianBlurFilter(img))


let m =5
let n = 5
let l = 5

let c = [[m][n]];
let d = [[m][l]];
let e = [].concat(d);

console.log(c)
console.log(d)
console.log(e)