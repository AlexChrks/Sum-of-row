function range() {
  const memory = {};
  
  return function (min, max) {
    
    if ( min < 1 
      || max < 2
      || !Number.isInteger(min) 
      || !Number.isInteger(max)
) {
        throw new TypeError('Wrong range! Use positive numbers. First number in range should be less than second number.');
    }
    
    if (memory[[min, max]]) {
      return memory[[min, max]];
    } else {
      let sumOfRange = ((max - min) + 1) * (min + max) / 2;
      memory[[min, max]] = sumOfRange;
      return sumOfRange;  
    }
  }
}

const createRange = range();

console.log(createRange(1,5));
console.log(createRange(4,10));
console.log(createRange(3,100));
console.log(createRange(2,4));
console.log(createRange(1,5));
