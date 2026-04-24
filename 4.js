function getUser() {
  return new Promise(resolve =>
    setTimeout(() => resolve({ id: 1, name: 'Alice' }), 500)
  );
}

function getOrders(userId) {
  return new Promise(resolve =>
    setTimeout(() => resolve([{ amt: 200 }, { amt: 350 }]), 500)
  );
}

getUser()
  .then(user => {
    console.log('User:', user.name);
    return getOrders(user.id);
  })
  .then(orders => {
    const total = orders.reduce((sum, o) => sum + o.amt, 0);
    console.log('Total:', total);  // 550
  })
  .catch(err => console.error('Error:', err));
