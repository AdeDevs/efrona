import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "2349166850407"; // no +

export default function CartDemo() {
  const [cart, setCart] = useState([]);

  /* ----------------------------
     Load cart from localStorage
  ----------------------------- */
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  /* ----------------------------
     Save cart to localStorage
  ----------------------------- */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  /* ----------------------------
     Demo: Add item to cart
  ----------------------------- */
  const addItem = () => {
    setCart((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: "Asiko Gift Box",
        price: 15000,
        quantity: 1,
      },
    ]);
  };

  /* ----------------------------
     WhatsApp Message Builder
  ----------------------------- */
  const buildWhatsAppMessage = () => {
    let message = "Hello, I would like to order:\n\n";

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.title} - ₦${item.price} x ${item.quantity}\n`;
    });

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    message += `\nTotal: ₦${total}`;

    return encodeURIComponent(message);
  };

  /* ----------------------------
     Checkout Handler
  ----------------------------- */
  const checkout = () => {
    if (cart.length === 0) return;

    const message = buildWhatsAppMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    window.open(url, "_blank");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Cart Demo</h2>

      <button onClick={addItem}>Add Item</button>

      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} — ₦{item.price}
          </li>
        ))}
      </ul>

      <button onClick={checkout} disabled={cart.length === 0}>
        Checkout via WhatsApp
      </button>
    </div>
  );
}
