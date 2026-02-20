import React, { createContext, useState, useContext } from 'react';

// Creamos el contexto
const CartContext = createContext();

// Componente Proveedor que englobará nuestra app
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Añadir un plato al carrito
  const addToCart = (meal) => {
    setCartItems((prevItems) => {
      // Comprobamos si el plato ya está en el carrito
      const existingItem = prevItems.find((item) => item.idMeal === meal.idMeal);
      
      if (existingItem) {
        // Si existe, incrementamos su cantidad
        return prevItems.map((item) =>
          item.idMeal === meal.idMeal
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      
      // Si no existe, lo añadimos con cantidad 1
      // Añadimos un precio mock de $10.00 si la API no lo trae
      return [...prevItems, { ...meal, cantidad: 1, precio: meal.precio || "10.00" }];
    });
  };

  // Eliminar un plato (reduce cantidad o lo elimina si llega a 0)
  const removeFromCart = (idMeal) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.idMeal === idMeal);
      
      if (existingItem?.cantidad === 1) {
        return prevItems.filter((item) => item.idMeal !== idMeal);
      }
      
      return prevItems.map((item) =>
        item.idMeal === idMeal
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      );
    });
  };

  // Vaciar todo el carrito (después de comprar)
  const clearCart = () => setCartItems([]);

  // Calcular la cantidad total de items (para el globito rojo del Header)
  const cartCount = cartItems.reduce((total, item) => total + item.cantidad, 0);

  // Calcular el precio total
  const totalPrice = cartItems.reduce(
    (total, item) => total + (parseFloat(item.precio) * item.cantidad),
    0
  ).toFixed(2);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      cartCount,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el carrito fácilmente en cualquier componente
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
};
