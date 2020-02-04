import React from 'react';
import './App.css';
import FilterableProductTable from './FilterableProductTable/FilterableProductTable';
import PRODUCTS from './constants/constants';

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={PRODUCTS}/>
    </div>
  );
}

export default App;
