import "./sidebar.css"
import { FaRegSun, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import logos from "../images/logo.png"




const Sidebar = () => {

 



  // const ClickBait = () => {
  //   document.querySelector('.btns').addEventListener('click', (evt) => {
  //     evt.target.classList.add('loading')

  //     setTimeout(() => {w
  //       evt.target.classList.remove('loading')
  //     }, 3000);
  //   })

  // }

  return (
    <>
      {/* <input type="checkbox" id="check"  />
    <label for="check" className="disp">
      <i className="fas fa-bars" style={{zIndex:"300"}} id="btn"></i>
      <i className="fas fa-times" style={{zIndex:"300", marginTop:"1.3%"}} id="cancel"></i>
    </label>
    <div className="sidebar">
    <header className="headeer fw-bold" style={{letterSpacing:"5px"}}>AT-ELOG</header>
    <ul className="ula">
     <li className="lia"><a href="#" className="anchor"><i className="fas fa-qrcode iii"></i>Dashboard</a></li>
     <li className="lia"><a href="#" className="anchor"><i className="fas fa-link iii"></i>Shortcuts</a></li>
     <li className="lia"><a href="#" className="anchor"><i className="fas fa-stream iii"></i>Overview</a></li>
     <li className="lia"><a href="#" className="anchor"><i className="fas fa-calendar-week iii"></i>Events</a></li>
     <li className="lia"><a href="#" className="anchor"><i className="far fa-question-circle iii"></i>About</a></li>
     <li className="lia"><a href="#" className="anchor"><i className="fas fa-sliders-h iii"></i>Services</a></li>
     <li className="lia"><a href="#" className="anchor"><i className="far fa-envelope iii"></i>Contact</a></li>
    
    </ul>
   </div>
   <section>
     
   </section> */}







      <input type="checkbox" id="menu" />

      <nav className="grad">

        {/* <header className="fw-bold text-white" style={{letterSpacing:"5px", fontSize:"30px", paddingLeft:"20px"}}>AT-ELOG</header> */}


        {/* <ul>
        <li><a href="#">Logout</a></li>

    </ul> */}
        <div className="wrapper">
          <div className="navbar row">
            <div className="col-md-4 left">
              <ul>
                {/* <button style={{ border: "none", padding: "10px", borderRadius: "10px" }} className="px-4" >

             <FaRedoAlt className="icon" style={{color:"red", backgroundColor:"white", width:"35px",height:"35px"}}/>
              Dashboard
             </button> */}

                {/* <button className="btns" style={{ marginLeft: "5%" }} onClick={() => ClickBait()}>
                  <span className="text">
                    Dashboard
                  </span>
                  <span className="loading-animate"></span>
                </button> */}

              </ul>
            </div>
            <div className="col-md-4 ">
              <img src={logos} width="40%" alt="logo" style={{marginLeft:"30%"}} />



            </div>

            <div className="col-md-2">
              <span className="alignment text-center" style={{marginLeft:"30%"}}>
                <FaBell style={{ width: "28px", height: "28px", cursor: "pointer" }} className="text-white" />
                <FaWifi style={{ width: "28px", height: "28px", marginLeft: "15px", cursor: "pointer" }} className={`icons ${navigator.onLine ? "active" : "deactive"}`} />
              </span>
            </div>

            <div className="col-md-2 right">

              <ul>
                <li style={{ listStyle: "none" }}>

                  <button style={{ borderRadius: "50px", border: "none", background: "transparent" }} >

                    <div style={{ marginTop: "40px" }}>
                      <img src="https://i.imgur.com/kDLvuKf.png" className="img" style={{marginBottom:"20%"}} alt="Admin" width="25%" alt="logo" />
                      {/* <p className="text-white" style={{marginBottom:"50px", paddingTop:"0"}}>User <span>as Admin</span></p> */}

                      {/* <i className="fas fa-angle-down mx-3 text-white" style={{ marginBottom: "20px" }} ></i> */}
                    </div>

                  </button>



                  <div className="dropdown" style={{ backgroundColor: "white" }}>

                    <button className="px-5" style={{ width: "100%", backgroundColor: "white", border: "none" }}><FaUserAlt className="icon" style={{ color: "red", backgroundColor: "white", width: "35px", height: "35px" }} />Profile  </button>
                    <button className="px-5" style={{ width: "100%", backgroundColor: "white", border: "none" }}><FaRegSun className="icon" style={{ color: "red", backgroundColor: "white", width: "35px", height: "35px" }} />Settings</button>
                    <button className="px-5" style={{ width: "100%", backgroundColor: "white", border: "none" }}><FaSignOutAlt className="icon" style={{ color: "red", backgroundColor: "white", width: "35px", height: "35px" }} />Sign Out  </button>

                  </div>

           



                </li>
              </ul>
            </div>
          </div>
        </div>







        <label for="menu" class="menu-bar">

          <i class="fa fa-bars"></i>

        </label>

      </nav>

      <div class="side-menu" onClick="w3_close()">
     
        {/* <center>
          <img src="https://i.imgur.com/kDLvuKf.png" />
          <br /><br />*/

          <h3>User</h3>
          /*
          <h5 className="text-white" style={{ letterSpacing: "2px" }}>as Admin</h5>
        </center>
        <br /> */}

        <a href="#" style={{ textDecoration: "none" }}><i class="fa fa-user"></i><span>Customers</span></a>
        <a href="#" style={{ textDecoration: "none" }}><i class="fa fa-envelope"></i><span>Message</span></a>
        <a href="#" style={{ textDecoration: "none" }}><i class="fa fa-shopping-basket"></i><span>Products</span></a>
        <a href="#" style={{ textDecoration: "none" }}><i class="fa fa-home"></i><span>Statistices</span></a>
        <a href="#" style={{ textDecoration: "none" }}><i class="fa fa-ban"></i><span>Ban Customers</span></a>
        <a href="#" style={{ textDecoration: "none" }}><i class="fa fa-cog"></i><span>Setting</span></a>
        <a href="#" style={{ textDecoration: "none" }}><i class="fa fa-shopping-basket"></i><span>Products</span></a>
        <a href="#" style={{ textDecoration: "none" }}><i class="fa fa-home"></i><span>Statistices</span></a>
        <a href="#" style={{ textDecoration: "none" }}><i class="fa fa-ban"></i><span>Ban Customers</span></a>
        <a href="#" style={{ textDecoration: "none" }}><i class="fa fa-cog"></i><span>Setting</span></a><a href="#" style={{ textDecoration: "none" }}><i class="fa fa-shopping-basket"></i><span>Products</span></a>
        <a href="#" style={{ textDecoration: "none" }}><i class="fa fa-home"></i><span>Statistices</span></a>
        <a href="#" style={{ textDecoration: "none" }}><i class="fa fa-ban"></i><span>Ban Customers</span></a>
        <a href="#" style={{ textDecoration: "none" }}><i class="fa fa-cog"></i><span>Setting</span></a><a href="#" style={{ textDecoration: "none" }}><i class="fa fa-shopping-basket"></i><span>Products</span></a>
        

        <a href="#" class="Logout"><span>Logout</span></a>


      </div>


      <div class="data">


      </div>






    </>
  )
}

export default Sidebar;