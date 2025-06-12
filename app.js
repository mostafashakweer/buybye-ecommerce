const { useState } = React;

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    $.ajax({
      url: "https://api.example.com/add-to-cart",
      method: "POST",
      success: () => console.log("Item added"),
    });
    setCart([...cart, `Item ${cart.length + 1}`]);
  };

  return (
    <div className='container mt-5'>
      <h1>BuyBye E-commerce</h1>
      <button className='btn btn-success' onClick={addToCart}>
        Add to Cart
      </button>
      <ul className='list-group mt-3'>
        {cart.map((item, index) => (
          <li key={index} className='list-group-item'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
