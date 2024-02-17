import React from "react";
import { Row, Col } from "react-bootstrap";
import storeItems from "../data/storeitems.json";
import StoreItem from "./StoreItem";

function Store() {
  return (
    <div>
      <h1>Store</h1>
      <Row>
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Store;
