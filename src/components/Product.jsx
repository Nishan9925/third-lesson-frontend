export const Product = ({ id, name, price, picture, onMove }) => {
  return (
    <div className="col-md-4">
      <img
        src={picture}
        style={{ width: 200, height: 200, objectFit: "cover" }}
      />
      <p>{name}</p>
      <p>
        <strong> {price} USD </strong>
      </p>
      <button onClick={() => onMove(id)} className="btn btn-primary">
        Move
      </button>
    </div>
  );
};
