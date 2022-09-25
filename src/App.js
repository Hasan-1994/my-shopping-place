import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Products from "./components/pages/Product";
import Bag from "./components/pages/Bag";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

function App() {
  
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/product">
          <Products />
        </Route>
        <Route path="/bag">
          <Bag />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
