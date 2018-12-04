export function shaffle(arrValue) {
  let arr = JSON.parse(JSON.stringify(arrValue))
  for (let i = 0, length=arr.length; i < length; i++) {
    let index = Math.ceil(Math.random() * (arr.length - 1));
    let temp = JSON.parse(JSON.stringify(arr[i]));
    arr[i] = JSON.parse(JSON.stringify(arr[index]));
    arr[index] = temp;
  }
  return arr;
} 