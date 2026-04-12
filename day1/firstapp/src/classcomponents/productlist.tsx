import React, { Component } from "react";
import "./productlist.css";


class ProductList extends Component<any,any> {
  constructor(props: any) {
    super(props);

    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div className="spaimg">
        {this.props.products.map((item:any) => (
          <span key={item.id}>
            <img src={item.url} alt={item.alt} />
          </span>
        ))}
      </div>
    );
  }
}

export default ProductList;