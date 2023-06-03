import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/products/:category" element={<ProductList/>}></Route>
        {/* <Route path="/products" element={<ProductList/>}></Route> */}
        <Route  path="/product/:id" element={<Product/>}></Route>
        <Route  path="/cart" element={<Cart/>}></Route>
        <Route  path="/login" element={<Login/>}>
          {/* {user ? <Navigate to = "/"/> : <Login/>} */}
        </Route>
        <Route  path="/register" element={<Register/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
