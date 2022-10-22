import './App.css';
import StripeContainer from './components/StripeContainer';
import miniBike from './assets/mini-bike.jpg'
import { useState } from 'react';

function App() {
  const [showItem, setShowItem] = useState(false)
  return (
    <div className="App">
      <h1>Rent Stuff Store</h1>
      {showItem ? <StripeContainer/> : <> <h3>$10.00</h3> <img src={miniBike} alt='mini-bike'/><button onClick={() => setShowItem(true)}>Rent</button></>}
    </div>
  );
}

export default App;
