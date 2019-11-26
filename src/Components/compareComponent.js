/** 
    description: page to create a product comparison table on selection
**/
import React from "react";
import products from "./dummyData";
import SelectProduct from "./dropDownComponent";
class CompareProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { compareProduct: [] };
    this.handleSelect = this.handleSelect.bind(this);
  }
  /** 
   function to delete product from comparison table
   **/
  onDelete = id => {
    this.setState({
      compareProduct: this.state.compareProduct.filter(item => item.id !== id)
    });
  };

  /** 
   function to handle dropdown select
   **/
  handleSelect = event => {
    let deviceName = event.target.value;
    let productToCompare = products.laptops.find(product => {
      return product.laptopName === deviceName;
    });
    this.setState({
      compareProduct: [...this.state.compareProduct, productToCompare]
    });
  };
  render() {
    let displayItem = this.state.compareProduct.map(product => {
      return (
        <div key={product.id} className="itemDisplay">
          <button className="btn" onClick={() => this.onDelete(product.id)}>
            X
          </button>
          <li key={product.id}>
            <img
              className="productStyle"
              src={product.laptopImage}
              alt="laptop"
            />
            <p>Laptop: {product.laptopName}</p>
            <p>Brand: {product.laptopBrand}</p>
            <p>Price: {product.price}</p>
            <h2>Features</h2>
            <p>Processor Brand: {product.features.processorBrand}</p>
            <p>RAM: {product.features.ram}</p>
            <p>Number of Cores: {product.features.numberOfCores}</p>
          </li>
        </div>
      );
    });
    return (
      <div>
        <SelectProduct onValueChange={this.handleSelect} products={products} />
        <div>
          <div className="compareTable">{displayItem}</div>
        </div>
      </div>
    );
  }
}
export default CompareProducts;
