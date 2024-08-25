import { useState } from "react";
import "./App.css";
import { ProductList } from "./components/ProductList";
import { Basket } from "./components/Basket";

function App() {
  const [products, setProducts] = useState([
    {
      id: 101,
      name: "Psychology Big Ideas",
      price: 100,
      picture:
        "https://m.media-amazon.com/images/I/81LDP+GDKVL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 102,
      name: "Psychology",
      price: 200,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFff1IxzrTTtXPBV02tDv8rv8Ks682aPIEbA&s",
    },
    {
      id: 103,
      name: "Islam",
      price: 300,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNSVmx5wcfQSj235YxA16m1VHXicwScBuyhA&s",
    },
    {
      id: 104,
      name: "Economics",
      price: 600,
      picture:
        "https://images-na.ssl-images-amazon.com/images/I/81c6E2VdT3L._AC_UL600_SR600,600_.jpg",
    },
    {
      id: 105,
      name: "Politics",
      price: 700,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-yWGtLdEt_3KM762RjFJCwbBqjfLKqWLfOg&s",
    },
    {
      id: 106,
      name: "Science",
      price: 900,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-SvCOPQsxVPkaCI3V1V6vkY_b7oJiAKe3cqlVXgg-TVDSV_4",
    },
    {
      id: 107,
      name: "History",
      price: 700,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppO11zsg7vgn38jiwkfIPYJJpAazuKapoFg&s",
    },
    {
      id: 108,
      name: "Ecology",
      price: 600,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlkBmTOeDcm2f2l_GaYDp65K8CIdJ8T89djQ&s",
    },
  ]);
  const [basket, setBasket] = useState([]);

  const moveToCart = (id) => {
    let found = products.find((x) => x.id === id);
    let prod = basket.find((x) => x.id === id);
    if (!prod) {
      setBasket([...basket, { ...found, count: 1 }]);
    }
  };

  const handleAdd = (id) => {
    const prod = basket.find((x) => x.id == id);
    prod.count++;
    setBasket([...basket]);
  };

  const remove = (id) => {
    let result = [...basket];
    result = result.filter((item) => item.id !== id);
    setBasket(result);
  };

  const handleSub = (id) => {
    const prod = basket.find((x) => x.id == id);
    if (prod.count > 1) {
      prod.count--;
      setBasket([...basket]);
    }
  };
  return (
    <>
      <h1>Online Shop</h1>
      <div className="row">
        <ProductList items = {products} onMove = {moveToCart} />

        <Basket
          cart = {basket}
          onAdd = {handleAdd}
          onSub = {handleSub}
          onRemove = {remove}
        />
      </div>
    </>
  );
}

export default App;
