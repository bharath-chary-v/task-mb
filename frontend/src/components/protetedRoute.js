import React  from "react";
import {  Navigate } from "react-router-dom";


const ProtectedRoute =({Component, ...rest})=>{

    return  localStorage.getItem("token") ? <Component /> : <Navigate to="/login"/>

    
    
}

export default ProtectedRoute