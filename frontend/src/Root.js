import React from 'react';
import Dashboard from "./pages/DashboardLoggedOut/Dashboard"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import DashboardIn from './pages/DashboardLoggedIn/DashboardIn';
import BgRemover from './pages/BgRemover/BgRemover'
import {
  Routes,
  Route,
} from "react-router-dom";


function getToken(){
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken
  }
function Root() {
    const token  = getToken()


    return(
        <div>
            <Routes>
                <Route exact path="/dashboard" element={token!=undefined? <DashboardIn/>:<Login/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route exact path="/register"  element={<Register/>}/>
                <Route exact path="/"  element={<Dashboard/>}/>
                <Route exact path = "/Bgremover" element={<BgRemover/>}/>
            </Routes>
        </div>
    )
}

export default Root;
