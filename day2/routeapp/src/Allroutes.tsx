import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home  from "./Home"
import About  from "./About"
import Header from "./Header";
import Dashboard from "./Dashboard";
import Login from "./Login";
 
export default function Allroutes()
{
return(
    <div>
<BrowserRouter>
<Header/>
  <Routes>
   
<Route path="/" element ={<Home/>}/>
<Route path="/about" element ={<About/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/dashboard" element={ <Dashboard/> }  >  
               
                                             
               
                       
      </Route>
 
  </Routes>
</BrowserRouter>
 
    </div>
)    
}