import { useHistory } from "react-router-dom";
import ProductFrom from "../forms/ProductFrom";
import Main from "../Main";
import classes from "./ProductForm.module.css";

function PassData(props) {
  const history = useHistory();
  function addProductHandler(productData) {
    fetch(
      "https://myshoppingplace-bd705-default-rtdb.firebaseio.com/products.json",
      {
        method: "POST",
        body: JSON.stringify(productData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.go(0);
    });
  }

  return (
    <section>
      <button onClick={props.onQuit} className={classes.closeBtn}>
        X
      </button>
      <ProductFrom onAddProduct={addProductHandler} />
    </section>
  );
}

export default PassData;
