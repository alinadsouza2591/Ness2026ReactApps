import { BrowserRouter, Routes,Route } from "react-router-dom";
 
import Header from "./Header";
import Dashboard from "./Dashboard";
import Login from "./Login";
import About from "./About";

export default function Allroutes()
{
return(
    <div>
<BrowserRouter>
<Header/>
  <Routes>
   
<Route path="/about" element={<About/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/dashboard" element={ <Dashboard/> }  >  
                
                                              
                
                        
      </Route>

  </Routes>
</BrowserRouter>

    </div>
)    
}