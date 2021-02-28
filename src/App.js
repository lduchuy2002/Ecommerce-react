import Nav from "./container/Nav/Nav";
import "./App.css";

import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
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
          <Route path="/products/:id">
            <ProductDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
