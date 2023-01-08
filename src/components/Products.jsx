

import React from "react";
import axios from "axios";
import './Products.css';
import {Link} from "react-router-dom";
// Component that renders the list of products in an array. 
class Products extends React.Component {
  state= {
    products: [],
  }
// sets up axios to make a request to /products and then returns an object with the data property. 
  componentDidMount() {
      axios.get("/products").then((res) => {
        const products = res.data;
        this.setState({products: products });
      });
    }
// myFilter returns a new function that will be executed every time we use the component. 
// return an object type with the type property. 
    myFilter(type) {
      return () => {
        this.setState({ type });
      };
    }
  
    render() {
      return (
        <>
          <h1 className="site-title">Products</h1>
  
          <div className="product-container">
            <div id="filter-container"></div>
            <h4>Filter By Category: </h4>
            <button onClick={this.myFilter("All")}>All</button>
            <button onClick={this.myFilter("Hat")}>Hats</button>
            <button onClick={this.myFilter("Tops")}>Tops</button>
            <h4>Sort By Price: </h4>
            <Link className = "sort" to="/products/lowTohigh">  Low to High  </Link>
            <Link className="sort" to="/products/highToLow">  High to Low  </Link>
            <Link className="sort" to="/products"> Reset </Link>
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
                  <img className="img" src={items.image} alt={items.name} />
                  <p className="name">{items.product}</p>
                  <p className="description">{items.description}</p>
                  <p className="price">${items.price}</p>
                </div>
              ))}
          </div>
  
        </>
      );
    }
  }
  
  export default Products;

