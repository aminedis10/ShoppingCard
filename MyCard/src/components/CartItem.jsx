import React from "react";
import { Button, Stack } from "react-bootstrap";
import storeItems from "../data/storeitems.json";
import { useShoppingCart } from "../context/ShoppingCartContext";
import formatCurrency from "./formatC";
function CartItem({ id, quantity }) {
  const { removeItemFromCart } = useShoppingCart();

  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        alt="cart-img"
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}
          {quantity > 1 && <span className="text-muted">{quantity}</span>}
          <div className="text-muted">{formatCurrency(item.price)}</div>
        </div>

        <div> Total: {formatCurrency(item.price * quantity)}</div>
      </div>
      <Button variant="outline-danger" onClick={() => removeItemFromCart(id)}>
        &times;
      </Button>
    </Stack>
  );
}

export default CartItem;
