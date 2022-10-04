import * as React from "react";
import Button from "@mui/material/Button";

function BagItem(props) {
  const { cardItem, onRemove, onAdd } = props;
  const itemsPrice = cardItem.reduce((a, c) => a + c.price * c.quantity, 0);
  const shppingPrice = itemsPrice >= 50 ? 0 : 50;
  const totalPrice = itemsPrice + shppingPrice;

  return (
    <div>
      <div className="container wrapper">
        {cardItem.length === 0 ? (
          <div className="block container">
            <p className="text">Shopping Bag is empty</p>
            <Button variant="contained" color="success" disabled>
              Buy Items
            </Button>
          </div>
        ) : (
          <div className="block container">
            {cardItem.map((item) => (
              <>
                <p>{item.name}</p>
                <span>
                  {item.quantity} x {item.price},00 €
                </span>
                <p></p>
                <Button onClick={() => onRemove(item)} className="remove">
                  -
                </Button>{" "}
                <Button onClick={() => onAdd(item)} className="add">
                  +
                </Button>{" "}
              </>
            ))}
            <hr></hr>
            <div>
              <p>
                {shppingPrice === 0
                  ? " "
                  : "Shipping Price: " + shppingPrice + ",00 €"}
              </p>
              <h3 className="text">Total Price: {totalPrice},00 €</h3>
            </div>

            <div>
              <Button variant="contained" color="success">
                Buy Items
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BagItem;
