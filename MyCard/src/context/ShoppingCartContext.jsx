import { createContext, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";

const ShoppingCartContext = createContext({});

function ShoppingCartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const openCart = () => {
    setIsOpen(true);
  };
  const closeCart = () => {
    setIsOpen(false);
  };

  const getItemsQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (!currItems.find((item) => item.id === id)) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      const existingItem = currItems.find((item) => item.id === id);
      if (!existingItem || existingItem.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItemFromCart = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        getItemsQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItemFromCart,
        openCart,
        closeCart,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

// const increaseCartQuantity = (id) => {
//   setCartItems((currItems) => {
//     if (cartItems.find((item) => item.id === id) === null) {
//       return [...currItems, { id, quantity: 1 }];
//     } else {
//       return currItems.map((item) => {
//         if (item.id === id) {
//           return { ...item, quantity: item.quantity + 1 };
//         } else {
//           return item;
//         }
//       });
//     }
//   });
// };

// const decreaseCartQuantity = (id) => {
//   setCartItems((currItems) => {
//     if (cartItems.find((item) => item.id === id) === null) {
//       return currItems.filter((item) => item.id !== id);
//     } else {
//       return currItems.map((item) => {
//         if (item.id === id) {
//           return { ...item, quantity: item.quantity - 1 };
//         } else {
//           return item;
//         }
//       });
//     }
//   });
// };
