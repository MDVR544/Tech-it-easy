import './App.css';
import {inventory} from "./constants/inventory.js";
import totalSold from "./Helpers/TotalSales/Soldcalculator.js"

function App() {


  return (
      <>
        <h1>Begin hier met met maken van de applicatie!</h1>
        <p>Totaal verkocht: {totalSold(inventory)}</p>


      </>
  )
}

export default App