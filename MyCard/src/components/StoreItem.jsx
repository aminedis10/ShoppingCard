import React from "react";
import { Button, Card } from "react-bootstrap";
import formatCurrency from "./formatC";
import { useShoppingCart } from "../context/ShoppingCartContext";

function StoreItem({ id, price, name, imgUrl }) {
  const {
    getItemsQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItemFromCart,
  } = useShoppingCart();
  const quantity = getItemsQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        src={imgUrl}
        variant="top"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          <span>{name}</span>
          <span>{formatCurrency(price)}</span>
        </Card.Title>
        <div>
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              Add to card
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div className="d-flex align-items-center justify-content-center">
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <span>{quantity}in cart</span>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeItemFromCart(id)}
              >
                remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default StoreItem;
