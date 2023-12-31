import React from 'react'
import { Link } from "react-router-dom"

export default function NavBar(props) {
  

    return (
      <>
        <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
        <li className="nav-item">
          <Link className="nav-link" to="/business">Business</Link></li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">Entertainment</Link></li>
        <li className="nav-item">
          <Link className="nav-link" to="/politics">Politics</Link></li>
        <li className="nav-item">
          <Link className="nav-link" to="/science">Science</Link></li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link></li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link></li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link></li>
      </ul>
      {window.location.pathname === '/newsapp-React' ?(
       <form className="d-flex" >
       <input className="form-control me-2" type="search" placeholder="Search" onChange={(e) => {props.setSrch(e.target.value)}} aria-label="Search"/>
       <button className="btn btn-outline-success" type="submit" onClick={(e)=>{e.preventDefault();props.handleSearch()}}>Search</button>
     </form>)
     : (""
     )}
      
    </div>
  </div>
</nav>
      </>
    )
}
