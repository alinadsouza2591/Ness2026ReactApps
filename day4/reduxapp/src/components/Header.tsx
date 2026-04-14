import { Link } from "react-router-dom";

export default function Header()
{
    return(
    <div>
           
       

 
               <Link to="/dashboard">Dashboard</Link>
        
                      <Link to="/viewgrid"> View </Link>

                             <Link to="/addproduct"> Add Product </Link>

  </div>
 
    )
}