import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PassData from "./PassData";
import Modal from "./Modal";
function PopUp(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <div>
      <IconButton
        color="primary"
        aria-label="add to shopping cart"
        onClick={openModal}
        spacing={1}
      >
        Add a new Product
        <AddShoppingCartIcon />
      </IconButton>
      {modalIsOpen && <PassData onQuit={closeModal}/>}
      {modalIsOpen && <Modal onQuit={closeModal} />}
    </div>
  );
}

export default PopUp;
