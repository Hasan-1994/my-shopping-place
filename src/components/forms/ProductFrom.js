import { useRef } from "react";

import classes from "./ProductForm.module.css";

function ProductForm(props) {
  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const priceInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const id = Math.floor(Math.random() * 100.0) + 1;
    const enteredName = nameInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const productData = {
      id: id,
      name: enteredName,
      img: enteredImage,
      price: enteredPrice,
      des: enteredDescription,
    };

    props.onAddProduct(productData);
  }

  return (
    <div className={classes.modal}>
      <form className={classes.form} onSubmit={submitHandler}>
        <h2>Add a New Product</h2>
        <div className={classes.control}>
          <label htmlFor="name">Product Name</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Product Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="price">Price</label>
          <input type="number" required id="price" ref={priceInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="des">Product Description</label>
          <textarea
            id="des"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Product</button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
