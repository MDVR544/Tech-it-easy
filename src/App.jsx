import './App.css';

import {inventory} from "./constants/inventory.js";

function App() {
const result = inventory;
  let totalSold = 0

  for (let i = 0; i < inventory.length; i++) {
    // console.log(inventory[i].sold);
    totalSold += inventory[i].sold;
  }
  return (
      <>
    <h1>Begin hier met met maken van de applicatie!</h1>
    <p>totaal verkocht {totalSold}</p>
      </>
  )

}

export default App
