// h=4 x w=3 x RGB
// h - строки
// w - столбцы

import {createTwoDimArrayOfZeros} from "./Utils.js";

export let imgColor = [
  [
    // R, G, B
    [3, 0, 1],
    [4, 18, 21],
    [34, 6, 7]
  ],
  [
    [14, 11, 10],
    [5, 12, 20],
    [11111, 15, 1]
  ],
  [
    [2, 13, 12],
    [21, 212, 11],
    [103, 57, 43]
  ],
  [
    [11, 17, 16],
    [45, 24, 2],
    [77, 15, 19]
  ]
];

export function makeGrayscaleImg(imgColor) {
  // кол-во строк
  const rows = imgColor.length;
  // все строки содержат одинаковое кол-во элементов -> можем брать длину любой как количество столбцов
  const cols = imgColor[0].length;
  // массив для картинки в grayscale
  let imgGrayScaled =createTwoDimArrayOfZeros(rows, cols);

  // обходим строки
  for (let i = 0; i < imgColor.length; i++) {
    // обходим столбцы
    for (let j = 0; j < imgColor[i].length; j++) {
      // значение яркости пиксела в grayscale
      imgGrayScaled[i][j] = 0.299 * imgColor[i][j][0] + 0.587 * imgColor[i][j][1] + 0.114 * imgColor[i][j][2]
    }
  }

  return imgGrayScaled
}

console.log("Grayscale Image")
console.table(makeGrayscaleImg(imgColor))





