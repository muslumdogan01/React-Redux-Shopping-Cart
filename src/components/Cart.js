import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const totalPrice = props.cart.reduce(
    (total, item) => (total += item.price),
    0
  );
  return (
    <div>
      <h2>
        <Link to="/" className="btn btn-success">
          Kitap Listesi
        </Link>{" "}
        <span className="btn btn-success">Sepetim</span>
      </h2>

      <h3 className="m-3">
        Toplam Sepet Tutarı: &#8378; {totalPrice.toFixed(2)}{" "}
      </h3>

      {props.cart.map((book) => (
        <div className="book">
          <img src={book.image} alt={book.name} />
          <div className="m-3">
            <h4>{book.name}</h4>
            <p>Yazar: {book.author}</p>
            <p>Fiyat: &#8378; {book.price}</p>
            <p>Sepetinizde bu kitaptan toplam 1 adet var.</p>
            <button className="btn btn-danger">-</button>
            <button className="btn btn-success m-3">Sepetten Çıkar</button>
            <button className="btn btn-danger">+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);
