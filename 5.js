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


async function fetchUserOrders() {
  try {
    const user = await getUser();
    console.log('User:', user.name);

    const orders = await getOrders(user.id);
    const total = orders.reduce((sum, o) => sum + o.amt, 0);
    console.log('Total:', total);  // 550
  } catch (err) {
    console.error('Something went wrong:', err);
  }
}

fetchUserOrders();
