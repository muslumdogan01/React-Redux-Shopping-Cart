import React from "react";
import { connect } from "react-redux";
import { sepeteEkle } from "../actions";
import { Link } from "react-router-dom";

const Products = (props) => {
  return (
    <div>
      <h2>
        <span className="btn btn-success">Kitap Listesi</span>
        <Link to="/cart" className="btn btn-success">
          Sepetim
        </Link>
      </h2>
      {props.bookList.map((book) => (
        <div className="book">
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Yazar: {book.author}</p>
            <p>Fiyat: &#8378; {book.price}</p>
            <button
              className="btn btn-success"
              onClick={() => props.sepeteEkle(book)}
            >
              Sepete Ekle
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookList: state.bookList,
  };
};

export default connect(mapStateToProps, { sepeteEkle })(Products);
