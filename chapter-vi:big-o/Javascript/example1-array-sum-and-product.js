'use strict';
function arraySumAndProduct(array) {
  var sum = 0;
  var product = 1;
  for(var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  for(var i = 0; i < array.length; i++) {
    product *= array[i];
  }
  console.log('original array: ');
  console.log(array);
  console.log('sum: ' + sum);
  console.log('product: ' + product);
}

arraySumAndProduct([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);

var largeArray = [];
for(var i = 1; i <= 20000; i ++) {
  largeArray.push(i);
}

arraySumAndProduct(largeArray);
