import { BasketItem } from "./BasketItem";

export const Basket = ({ cart, id, onAdd, onSub, onRemove }) => {
  return (
    <div className="col-md-5">
      <table className="table table-dark table-bordered">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Count</th>
            <th>Subtotal</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((elm) => (
            <BasketItem
              key={elm.id}
              {...elm}
              onAdd={onAdd}
              onSub={onSub}
              onRemove={onRemove}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
