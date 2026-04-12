import React, { Component } from "react";
import ProductList from "./productlist";
import './productlist.css';
import { cartlist } from "../util";
 

// Define the type of a product
type Product = {
  id: number;
  url: string;
  name:string;
  description: string;
  alt: string;
};

// Define state type
type GroceryStoreState = {
  products: Product[];
  loading: boolean;
};

// No props in this case, so we can use {} for props

class GroceryStore extends Component<{}, GroceryStoreState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      products: cartlist as Product[], // type assertion if cartlist is not typed
      loading: true
    };
  }

  componentDidMount() {
    console.log("Component is mounted");
     this.setState((prevState) => ({
      loading: false
    }));
  }

  componentDidUpdate(prevProps: {}, prevState: GroceryStoreState) {
    if (prevState.products !== this.state.products) {
      console.log("New Products are added");
    }
  }

  componentWillUnmount() {
    console.log("Grocery store is unmounted");
  }

  addProduct = () => {
    const newProduct: Product = {
      id: 4,
      name:'Momos',
      url: './assets/images/4.jpg',
      description: 'new product',
      alt: "chicken"
    };

    this.setState((prevState) => ({
      products: [...prevState.products, newProduct]
    }));
  };

  render() {
    const { products, loading } = this.state;

    return (
      <div>
        <button onClick={this.addProduct}>Add</button>

        {loading ? (
          <p>Product is still loading</p>
        ) : (
          <ProductList products={products} />
        )}
      </div>
    );
  }
}

export default GroceryStore;