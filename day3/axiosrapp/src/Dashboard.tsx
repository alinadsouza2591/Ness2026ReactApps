import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom"
import ProductCard from "./ProductCard";
import './dashboard.css'
import Addproduct from './Addproduct';

interface Product {
id: number;
url:string;
name: string;
category:string;
price: number;

}



export default function Dashboard() {







const [products,setProducts]=useState<Product[]>([]);

let navigate=useNavigate()



useEffect( ()=>{

axios.get<Product[]>("http://localhost:3001/products")
.then(
(res)=>
{
// console.log(res.data)
setProducts(res.data)
}
)
.catch(
(err)=>
{
console.log("error found " + err)
}
)
},[])



const deleteHandler= (productid : number) =>
{
axios.delete(`http://localhost:3001/products/${productid}`)
.then
(
(res)=>
{
setProducts(products.filter ( prod=> prod.id !==productid ))
}
)
.catch(
(err)=>
{

}
)
}

const addEventHandler =( product:Product) =>
{
axios.post("http://localhost:3001/products",product)
.then(
(res)=>
{
setProducts([...products,product])
}

)
.catch(
(err)=>
console.log(err)
)



}



return (
<div>
<h1> Dashboard</h1>

<Addproduct addEvent={addEventHandler}/>

<section className="clssection">
{
products.map( (product)=>
<ProductCard key={product.id} cardproduct={product} deleteEvent={deleteHandler}/>)
}
</section>

</div>
)
}