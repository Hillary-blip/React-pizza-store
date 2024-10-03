import Header from './component/header';
import './App.css';
import ProductList from './component/product-list';

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <Header></Header>
          <main >
            <div className="main-inner">
              <ProductList></ProductList>
            </div>
          </main>
        </div>
      </header>
    </div>
  );
}

export default App;
