import React, { useEffect, useState } from "react";
import Main from "../Main";
import BagItem from "./BagItem";

function Content() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  const [cardItem, setCartItem] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://myshoppingplace-bd705-default-rtdb.firebaseio.com/products.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const products = [];

        for (const key in data) {
          const product = {
            id: key,
            ...data[key],
          };

          products.push(product);
        }

        setIsLoading(false);
        setLoadedMeetups(products);
      });
  }, []);

  if (isLoading) {
    return (
      <section className="container block">
        <h1 className="text">Loading...</h1>
      </section>
    );
  }

  const onAdd = (product) => {
    const exist = cardItem.find((x) => x.id === product.id);
    if (exist) {
      setCartItem(
        cardItem.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItem([...cardItem, { ...product, quantity: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cardItem.find((x) => x.id === product.id);
    if (exist.quantity === 1) {
      setCartItem(cardItem.filter((x) => x.id !== product.id));
    } else {
      setCartItem(
        cardItem.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  return (
    <div className="container wrapper">
      <Main onRemove={onRemove} onAdd={onAdd} products={loadedMeetups}></Main>
      <BagItem onRemove={onRemove} onAdd={onAdd} cardItem={cardItem}></BagItem>
    </div>
  );
}

export default Content;
