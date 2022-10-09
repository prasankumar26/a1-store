import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import {setSearchTerm} from '../features/products/ProductSlice'

const Navbar = () => {


  const dispatch = useDispatch()

  const serachValue = useRef()

    const [navOpen, setNavOpen] = useState(false)

    const handleNavbar = () =>{
        setNavOpen(!navOpen)
    }

    const searchProducts = (e) =>{
     dispatch(setSearchTerm(serachValue.current.value))
    }

    const handleSubmit = (e) =>{
       e.preventDefault()
    }

  return (
   <>
   <nav className="navbar navbar-expand-lg bg-light fixed-top">
  <div className="container">
    <Link className="navbar-brand" to="/">
      <b>A1 Store</b>
    </Link>
    <button
    onClick={handleNavbar}
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className={`${navOpen ? 'collapse navbar-collapse show' : 'collapse navbar-collapse '}`} id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link onClick={() => setNavOpen(false)} className="nav-link active" aria-current="page" to="/">
            <b>Home</b>
          </Link>
        </li>
        <li className="nav-item">
          <Link onClick={() => setNavOpen(false)} className="nav-link" to="/products">
            <b>Products</b>
          </Link>
        </li>
        <li className="nav-item">
          <Link onClick={() => setNavOpen(false)} className="nav-link" to="/contact">
            <b>Contact</b>
          </Link>
        </li>
       
       
      </ul>
      <form className="d-flex" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          name="searchTerm"
          ref={serachValue}
          onChange={searchProducts}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar