import React, { useState } from "react";
import Cards from "./contents/Card"
import Box from "@mui/material/Box";
import PopUp from "./forms/PopUp";

export default function Main(props) {
  const { products, onAdd, onRemove } = props;


  return (
    <main className="container block">
      <h2 className="text">Products</h2>

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
        <PopUp/>
      </div>

    </main>
  );
}
