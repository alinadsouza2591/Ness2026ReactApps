 
import { useSelector } from "react-redux";
import {  Outlet, useNavigate } from "react-router-dom";
 
 
// Define the structure of a product
interface Product {
  id: number;
  url:string;
  name: string;
  category:string;
  price: number;
  
}
 

export default function Viewgrid() 
{
   const myproducts=useSelector( (state:any)=>state.products)
  // const myproducts: Product[] = props.products;

 

  return (
    <div>
        
        
      {myproducts.map((product) => (
        <div  key={product.id}>
          <img src={product.url}   alt="..." />
           {product.url}
          <div>
            <p>{product.name}</p>
            <span>{product.description}</span>
            <span>{product.category}</span>
            <span>{product.price}</span>
 
          </div>
        </div>
       
      ))}

      
    </div>
  );
}
