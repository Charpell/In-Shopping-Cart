import './App.css';
import { useEffect, useReducer } from 'react';
import { cartReducer, initialState } from './reducers/cartReducer';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const fetchProducts = async () => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'ADD_PRODUCTS', payload: data.products }));
  }

  useEffect(() => {
    fetchProducts();
  },[]);
  

  return (
    <div style={{ display: 'flex' }}>
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
