/** 
    description: dropdown select component
**/
import React from "react";
function SelectProduct(props) {
  return (
    <div>
      <select onChange={props.onValueChange}>
        {props.products.laptops.map(laptop => {
          return (
            <option key={laptop.id} value={laptop.laptopName}>
              {laptop.laptopName}
            </option>
          );
        })}
      </select>
    </div>
  );
}
export default SelectProduct;
