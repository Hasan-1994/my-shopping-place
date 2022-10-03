import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Products from "./components/pages/Product";
import Introduction from "./components/pages/Introduction";
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
        <Route path="/introduction">
          <Introduction />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
