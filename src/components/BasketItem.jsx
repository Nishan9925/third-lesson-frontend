export const BasketItem = ({ id,name,price,count, onAdd, onSub, onRemove }) => {
  return (
    <>
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{count}</td>
      <td>{count*price}</td>
      <td>
      <button class="btn btn-primary" onClick={() => onAdd(id)}>+</button>
      <button class="btn btn-primary" onClick={() => onSub(id)}>-</button>
      <button class="btn btn-primary" onClick={() =>onRemove(id)}>x</button>
      </td>
    </tr>
    </>
  );
};






