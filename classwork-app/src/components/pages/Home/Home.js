import React from 'react'
import {
    Link
  } from "react-router-dom";
function Index() {
  return (
    <div>
        <h1>Welcome</h1>
        <h2 ><Link to="/login">Login</Link></h2>
    </div>
  )
}

export default Index