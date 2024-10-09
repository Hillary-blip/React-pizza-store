
import Header from './component/header';
import './App.css';
import ProductList from './component/product-list';
import { useState } from 'react';

function App() {
  const [cartModal, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)


  const Cleaercart = () => {
    setCart([])
  }

  const toggleCart = () => {
    setShowCart(prev => !prev);
  }

  return (
    <div className="App">
      <header>
        <div className="container">
          <Header showCart={cartModal} toggleCart={toggleCart}
            totalItems={totalItems}
            totalPrice={totalPrice}
          />
          <main>
            <div className="main-inner">
              <ProductList
                Cleaercart={Cleaercart}
                totalItems={totalItems}
                totalPrice={totalPrice}
                cart={cart}
                setCart={setCart}
                showCart={cartModal}
                toggleCart={toggleCart}
              />
            </div>
          </main>
        </div>
      </header>
    </div>
  );
}

export default App;
