import Nav from "./container/Nav/Nav";
import "./App.css";

import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import WrapperModal from "./HOC/WrapperModal/WrapperModal";
import Cart from "./pages/Cart/Cart";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/laptops/:id">
            <ProductDetail />
          </Route>
          <Route path="/login">
            <WrapperModal />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
