import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/CartSlice";
import products from "../products";

const OneProduct = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setOpen(true);
  };

  return (
    <div className="products">
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message=".·:*¨༺ITEM IS ADDED TO YOUR CART༻¨*:·."
        action={action}
      />

      {products.map((product) => {
        return (
          <div key={product.id} className="oneProduct">
            <h2 className="h2">{product.title}</h2>
            <img
              src={product.img}
              alt={product.title}
              className="productImg"
            ></img>
            <p className="p">{product.description}</p>
            <h3 className="h3">${product.price}</h3>

            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(product)}
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default OneProduct;