import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Cart from "./components/Cart";


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <Routes>
          <Route exact path = '/' element ={<Home/>}/>
          <Route exact path = '/cart' element ={<Cart/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
