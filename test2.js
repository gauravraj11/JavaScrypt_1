async function fetchData() {
  console.log('X');
  const val = await Promise.resolve('oops');
  console.log('Y', val);
}

fetchData().then(e => console.log('Z', e));
console.log('W');