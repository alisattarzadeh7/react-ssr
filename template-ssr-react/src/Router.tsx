import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Other from "./pages/Other";
const Router = () => {
    return (
       <div>
           asdf
           <Routes>
               <Route index element={<Home />} />
               <Route path="/other" element={<Other />} />
           </Routes>
       </div>
    );
};


export default Router