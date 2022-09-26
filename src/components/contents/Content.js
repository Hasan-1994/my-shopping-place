import React, { useEffect, useState } from "react";
import Main from "../Main";
//import data from "../../products/data.json";

function Content() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);
  
    useEffect(() => {
      setIsLoading(true);
      fetch("https://myshoppingplace-bd705-default-rtdb.firebaseio.com/products.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const meetups = [];
  
          for (const key in data) {
            const meetup = {
              id: key,
              ...data[key],
            };
  
            meetups.push(meetup);
          }
  
          setIsLoading(false);
          setLoadedMeetups(meetups);
        });
    }, []);
  
    if (isLoading) {
      return (
        <section className="container block">
          <p>Loading...</p>
        </section>
      );
    }
  

  return (
    <div>
      <Main products={loadedMeetups} />
    </div>
  );
}

export default Content;
/* 
export default function App(props) {
    const { products } = data;
    const [cardItem, setCartItem] = useState([]);
    const onAdd = (product) => {
        const exist = cardItem.find((x) => x.id === product.id);
        if (exist) {
            setCartItem(
                cardItem.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItem([...cardItem, { ...product, qty: 1 }]);
        }
    };
    const onRemove = (product) => {
        const exist = cardItem.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItem(cardItem.filter((x) => x.id !== product.id));
        } else {
            setCartItem(
                cardItem.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };
    return (
        <div className="App">
            <div className="row">
                <Main
                    onRemove={onRemove}
                    onAdd={onAdd}
                    products={products}
                ></Main>
                <Basket
                    onRemove={onRemove}
                    onAdd={onAdd}
                    cardItem={cardItem}
                ></Basket>
            </div>
        </div>
    );
}
 */
