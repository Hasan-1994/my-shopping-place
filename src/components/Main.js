import React, { useState } from "react";
import Cards from "./contents/Card";
import Box from "@mui/material/Box";
import PopUp from "./forms/PopUp";

function Main(props) {
  const { products, onAdd, onRemove } = props;

  return (
    <main className="container block">
      {products.length === 0 ? (
        <h2 className="text">Add a new Product</h2>
      ) : (
        <h2 className="text">Products</h2>
      )}
      <div className="row">
        <Box>
          {products.map((product) => (
            <Cards
              key={product.id}
              product={product}
              onRemove={onRemove}
              onAdd={onAdd}
            />
          ))}
        </Box>
        <PopUp />
      </div>
    </main>
  );
}

export default Main;