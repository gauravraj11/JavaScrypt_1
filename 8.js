const ops = [1, 2, 3].map(n => {
  return () => new Promise(resolve => {
    setTimeout(() => resolve(n * 10), n * 100);
  });
});
console.log('A');
async function run() {
  console.log('B');
  const results = await Promise.all(ops.map(fn => fn()));
  console.log('C', results);
}
run();
console.log('D');
