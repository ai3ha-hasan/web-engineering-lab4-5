import { useState } from 'react';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const products = [{ id: 1, name: 'Mouse', price: 20 }, { id: 2, name: 'Keyboard', price: 50 }];

  const addToCart = (p) => setCart([...cart, p]);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>9. Shopping Cart</h2>
      {products.map(p => <button key={p.id} onClick={() => addToCart(p)}>Add {p.name} ($ {p.price})</button>)}
      <h4>Items in Cart: {cart.length}</h4>
      <p>Total: ${total}</p>
      <button onClick={() => setCart([])}>Clear Cart</button>
    </div>
  );
}