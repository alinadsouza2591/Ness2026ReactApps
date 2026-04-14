import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/actions";
import axios from "axios";




type Product = {
  id: number;
  url: string;
  name: string;
  description: string;
  alt: string;
  category: string;
  price: number;
};
 
 

export default function Addproduct()
{

        const dispatch=useDispatch();

//  const products=useSelector( (state:any)=>state.products)
const [product,setProduct]=useState<Product>(
    {
        id: 0,      
        url: "",
        name: "",
        description: "",

        alt: "",
        category: "",
        price: 0
    }
)
  

const handleInput =(evt: ChangeEvent<HTMLInputElement>)=>
{
    const {name,value} =evt.target;
    setProduct({
        ...product,
        [name]: name==='id' || name==='price' ? Number(value) : value
    })

}

const handleFilechange  = (evt:ChangeEvent<HTMLInputElement>)=>
{
    const file= evt.target.files?.[0];
    if(file)
    {
        console.log(file)
        setProduct(
            {
                ...product,
                url: "./assets/images/" + file.name
                
            }
        )
    }

}

const handleSubmit =(evt: ChangeEvent<HTMLFormElement>) =>
{
 axios.post("http://localhost:3001/products",product)
    .then(
        ()=>
        {
            dispatch(addProduct(product))
        }
    )
    .catch(err=>
        console.log("error found " + err)
    )


}

return(
    <div>
      <form onSubmit={handleSubmit}>
        <div className="clsform">
          <label>
            ID
            <input name="id" value={product.id} onChange={handleInput} />
          </label>

          <label>
            <input type="file" onChange={handleFilechange} accept="*" />
            URL
            <input name="url" value={product.url} onChange={handleInput} />
          </label>
       
          <label>
            Description
            <input
              name="description"
              value={product.description}
              onChange={handleInput}
            />
          </label>
       

          <label>
            Category
            <input
              name="category"
              value={product.category}
              onChange={handleInput}
            />
          </label>

          <label>
            Price
            <input
              name="price"
              value={product.price}
              onChange={handleInput}
            />
          </label>

          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>

)
}