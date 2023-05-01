import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './screen/Home';
import Login from './screen/Login';
import Signup from './screen/Signup';
import { CartProvider } from './components/ContextReducer';
import Cart from './screen/Cart';
import MyOrder from './screen/MyOrder';

function App() {
  return (
    <div className="App ">

      <CartProvider>

<Routes>
        <Route exact path="/" element={<Home/>}/> 
        <Route path="/loginuser" element={<Login/>}/> 
        <Route path="/createuser" element={<Signup/>}/> 
        <Route path="/myOrder" element={<MyOrder/>}/> 
       
       </Routes>

      </CartProvider>

    </div>
  );
}

export default App;
