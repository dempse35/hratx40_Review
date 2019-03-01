//console.log("thing");

let value = { color: "pink" };
console.log(value);
let warp = obj => {
  console.log(obj);
  obj.color = "fuchsia";
  console.log(obj);
};

warp(value);

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let outer = (arr, index = 0) => {
  let final = [];
  if (arr[index] % 2 === 0) {
    final.push(arr[index]);
  }
  if (arr.length !== index + 1) {
    //index++;
    final = final.concat(outer(arr, index + 1));
  }
  return final;
};

let inner = arr => {
  let final = [];
  let index = 0;
  let helpMe = arr => {
    if (arr[index] % 2 === 0) {
      final.push(arr[index]);
    }
    if (arr.length !== index + 1) {
      index++;
      helpMe(arr);
    }
  };
  helpMe(arr);
  return final;
};

console.log(outer(array), "<= outer");
console.log(inner(array), "<= inner");
