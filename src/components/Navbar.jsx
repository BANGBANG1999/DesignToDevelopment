// import React from 'react'
// import "./css/Navbar.css"

// function Navbar() {

//   return (
//     <>
//       <div className="navbar d-flex justify-content-between">
//         <img className="logo" src="img/whole.png" />
//         <div className="icons">
//           <img className="search" src="/img/search.png"></img>
//           <span className="search_button">Search for your favorite groups in ATG</span>
//         </div>
//        <img className="create_account" src="img/createAccount.png" />
//       </div>
//     </>
//   )
// }

// export default Navbar

import React from 'react'
import "./css/Navbar.css"

function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid" >
          
          <img className="logo" src="img/whole.png" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <div className="icons">
              <img className="search" src="/img/search.png"></img>
              <span className="search_button">Search for your favorite groups in ATG</span>
            </div>
            
              <img className="create_account" src="img/createAccount.png" />
              <div className="dropdown_div">

              <img className="dropdown" src="img/dropdown.png" />
              </div>
            
          </div>
          
         
        </div>
      </nav>
    </>
  )
}

export default Navbar




