import { useState } from "react";

const productList = [
  {
    id: 111,
    name: "Keyboard",
    stoke: 10,
    price: 2000,
  },
  {
    id: 112,
    name: "mouse",
    stoke: 8,
    price: 500,
  },
  {
    id: 113,
    name: "headphone",
    stoke: 15,
    price: 1500,
  },
];



const TableRow = ({ id, name, stoke, price, quantity, total,increment,decrement }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{stoke}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{total}</td>
      <td>
        <button disabled={quantity === stoke} onClick={()=> increment(id)} >+</button>
        <button disabled={quantity === 0} onClick={()=> decrement(id)}>-</button>
      </td>
    </tr>
  );
};

const Product2 = () => {
  const [products, setProducts] = useState(
    productList.map((product) => ({
      ...product,
      quantity: 0,
      total: 0,
    }))
  );

  const incrementQuantity = (id) => {
    setProducts(products.map((product)=> {
        if(product.id === id && product.stoke > product.quantity){
            product.quantity++;
            product.total = product.quantity * product.price; 
        }
        return product
    }))
  };


  const decrementQuantity = (id)=>{
    setProducts(
        products.map((product)=>{
            if(product.id === id && product.quantity > 0){
                product.quantity --;
                product.total = product.quantity * product.price; 
            }
            return product;
        })
    )
  }

  const total = products.reduce((acc,crn)=> acc + crn.total, 0)

  return (
    <div>
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Stoke</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              {...product}
              increment={incrementQuantity}
              decrement = {decrementQuantity}
            />
          ))}
        </tbody>
      </table>
      {total > 0 && <h3>Total {total} BDT</h3>}
    </div>
  );
};

export default Product2;
