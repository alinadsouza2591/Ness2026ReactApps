import axios from "axios";
import { useEffect } from "react";
import { Outlet } from "react-router-dom"
 
 
import './dashboard.css'
 
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct, setProducts } from "../redux/actions";
 
type Product = {
  id: number;
  url: string;
  name: string;
  description: string;
  alt: string;
  category: string;
  price: number;
};

export default function ReduxDashboard()
{
    const dispatch=useDispatch();

 const products=useSelector( (state:any)=>state.products)

     useEffect( ()=>{

   axios.get<Product[]>("http://localhost:3001/products")
            .then(
                (res)=>
                        {
                       dispatch(setProducts(res.data))
                        }
            )
            .catch(
                (err)=>
                {
                    console.log("error found " + err)
                }
            )
     },[])




    return(
    <div>
        <h1> Dashboard</h1>

     
        
        
        <section className="clssection">
 {
    products.map( (product:Product)=>
    <div key={product.id} className="clsproduct">
        <img src={product.url} alt={product.alt} className="clsimage"/>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Category: {product.category}</p>
 
        </div>
    )
 }

</section>

        <Outlet/>
    </div>
    )
}