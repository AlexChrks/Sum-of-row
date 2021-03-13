function range() {
  const memory = {};
  return function (min,max) {
    
    if (memory[[min,max]]) {
      console.log(`from memory: ${memory[[min,max]]}` );
      return memory[[min,max]];
    } else {
      if (typeof min !== 'number' || typeof max !== 'number') {
        throw new TypeError('Type of input should be number');
      } else if (Number.isNaN(min) || Number.isNaN(max)) {
        throw new TypeError('Type of input should not be NaN');
      } else if (!Number.isInteger(min) || !Number.isInteger(max) ) {
        throw new TypeError('Type of input is not integer number');
      } else if (min < 1 || max < 2) {
        throw new TypeError('Wrong range. Numbers should be positive. Second number should be greater than first');
      } else {
        let sumOfRange = 0;
        if (min > 1) {
          sumOfRange = (max * (max + 1) / 2) - ((min-1) * ((min-1) + 1) / 2);
        } else {
          sumOfRange = (max * (max + 1) / 2);
        }
        memory[[min,max]] = sumOfRange;
        console.log(sumOfRange);
        return sumOfRange;
      }
    }
  }
}

const createRange = range();

createRange(1,5);
createRange(4,10);
createRange(3,100);
createRange(2,4)
createRange(1,5);
