function range() {
  const memory = {};
  return function (min,max) {
    
    if (typeof min !== 'number' 
      || typeof max !== 'number' 
      || Number.isNaN(min) 
      || Number.isNaN(max)    
      || !Number.isInteger(min) 
      || !Number.isInteger(max)
      || min < 1 
      || max < 2) {
        throw new TypeError('Wrong range! Use positive numbers. First number in range should be less than second number.');
    }
    
    if (memory[[min,max]]) {
      console.log(`from memory: ${memory[[min,max]]}` );
      return memory[[min,max]];
    } else {
      let sumOfRange = ((max - min) + 1) * (min + max) / 2;
      memory[[min,max]] = sumOfRange;
      console.log(sumOfRange);
      return sumOfRange;  
    }
  }
}

const createRange = range();

createRange(1,5);
createRange(4,10);
createRange(3,100);
createRange(2,4)
createRange(1,5);
