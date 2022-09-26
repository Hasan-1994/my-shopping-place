import React from "react";
import Cards from "./contents/Card";
import Box from "@mui/material/Box";
import PopUpAddProduct from "./modal/PopUpAddProduct";

function Main(props) {
  const { products, onAdd, onRemove } = props;

  return (
    <main className="col-8 block ">
      {products.length === 0 ? (
        <h2 className="text">Add a new Product</h2>
      ) : (
        <h2 className="text">Products</h2>
      )}
      <div className="row">
        <Box>
          {products.map((product) => (
            <Cards
              key={product.name}
              product={product}
              onRemove={onRemove}
              onAdd={onAdd}
            />
          ))}
        </Box>
        <PopUpAddProduct />
      </div>
    </main>
  );
}

export default Main;