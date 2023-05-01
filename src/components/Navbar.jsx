import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom';
import { Badge } from 'react-bootstrap-v5';
import Modal from '../Modal';
import Cart from '../screen/Cart';
import { useCart } from './ContextReducer';

function Navbar() {

  const [cartView,setCartView]=useState(false);
let data=useCart();

  const navigate= useNavigate();

  const handleLogout = ()=>{
     localStorage.removeItem("authToken");
     navigate("/loginuser")
  }

  return (
    <>
    <nav className="navbar mb-5 navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand fs-2 fst-italic" href="#">Go Food</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active fs-5"  to="/">Home</Link>
        </li>
       
       {(localStorage.getItem("authToken"))?
         <li className="nav-item">
         <Link className="nav-link active fs-5"  to="/myOrder">My Orders</Link>
       </li>
     :"" }
      
        
       
      </ul>
      {(!localStorage.getItem("authToken"))?

        <div className='d-flex'>

          <Link className="btn bg-white text-success mx-1" to="/loginuser">Login</Link>
          <Link className="btn bg-white text-success mx-1" to="/createuser">Signup</Link>
        </div>
     :
     <div>

     <div className='btn bg-white text-success mx-2' onClick={()=>{setCartView(true)}}>

            My cart {' '}
            <Badge pill bg="danger">{data.length}</Badge>
     </div>
     {cartView ? <Modal onClose={() => setCartView(false)}><Cart/></Modal> :null}
     <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>
            Logout
     </div>


     </div>
     }


    </div>
  
    
  </div>
</nav>
    </>
  )
}

export default Navbar