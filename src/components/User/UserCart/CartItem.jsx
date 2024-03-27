export default function CartItem() {
  return (
    <div aria-label="cart item" key={i.productId}>
      {i.productId} Quantity:{i.quantity}
    </div>
  );
}
