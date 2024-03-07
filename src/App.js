import './App.css';
import Navbar from './Components/Navbar';
import Cryptocurrencies from './Components/Currency/Cryptocurrencies';
import OtherCoin from './Components/Common/OtherCoin';



function App() {
  return (
    <div className="App w-full bg-blue-100 ">
        <Navbar/>
        <Cryptocurrencies/>
        <OtherCoin/>
      
    </div>
  );
}

export default App;
