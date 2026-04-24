function createCounter() {
  let count = 0;  // private variable

  return {
    increment() {
      count++;
      console.log(count);
    },
    decrement() {
      count--;
      console.log(count);
    },
    reset() {
      count = 0;
      console.log(count);
    }
    // 'count' is NOT exposed — true privacy via closure
  };
}
