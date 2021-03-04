import Nav from "./container/Nav/Nav";
import "./App.css";

import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

import WrapperModal from "./HOC/WrapperModal/WrapperModal";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <WrapperModal content="abc"></WrapperModal>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/laptops/:id">
            <ProductDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
