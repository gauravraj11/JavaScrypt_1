console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

async function run() {
  console.log('Middle');
  const results = await Promise.resolve().then(() => {
                        console.log('async wala Promise');
                        return 13;
                        });
  console.log(results);
} 
run();

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');
