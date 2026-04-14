import { BrowserRouter,Route,Routes } from "react-router-dom";
import Viewgrid from "./ViewGrid";
import Header from "./Header";
import ReduxDashboard from "./ReduxDashboard";
import Addproduct from "./Addproduct";

export default function Allroutes()
{
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
              <Route path="/dashboard" element={<ReduxDashboard/>}/> 
  
             
                          <Route path="/viewgrid" element={<Viewgrid/>}/>
                 
           <Route path="/addproduct" element={<Addproduct/>}/>


        </Routes>
        
        
        </BrowserRouter>
    )
}