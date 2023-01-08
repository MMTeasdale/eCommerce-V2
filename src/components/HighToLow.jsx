import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Products.css"; 

export default class Productlist extends React.Component {
  state = {
    products: [],
    type: "All",
  };

  //UseState is a react hook that lets you set some state to react component.

  componentDidMount() {
    axios.get("/products/highTolow").then((res) => {
      const products = res.data;
      this.setState({ products: res.data });
    });
  }

  myFilter(type) {
    return () => {
      this.setState({ type });
    };
  }

  render() {
    return (
      <>
        <h1 className="site-title"> Products</h1>

        <div className="product-container">
          <div id="filter-container"></div>
          <h4>Filter By Category: </h4>
          <button onClick={this.myFilter("All")}>All</button>
          <button onClick={this.myFilter("Hat")}>Hats</button>
          <button onClick={this.myFilter("Tops")}>Tops</button>
          <h4>Sort By Price: </h4>
          <Link to="/products/lowTohigh">Low to High</Link>
          <Link to="/products/highTolow">High to Low</Link>
          <Link to="/products">Reset</Link>
        </div>
        <div className="prod">
          {this.state.products

            .filter((record) => {
              if (this.state.type === "All") {
                return true;
              } else {
                return this.state.type === record.category;
              }
            })

            .map((items) => (
              <div className="products" key={items.id}>
                <img className="img" src={items.image} alt={items.product} />
                <p className="product">{items.product}</p>
                <p className="description">{items.description}</p>
                <p className="price">${items.price}</p>
              </div>
            ))}
        </div>
      </>
    );
  }
}
