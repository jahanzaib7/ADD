
import * as React from 'react';
import "./navbar.css"

import { FaRegSun, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import logos from "../images/logo.png"

import { styled, alpha } from '@mui/material/styles';



const Navbar = () => {

    const ClickBait = () => {
        document.querySelector('.btns').addEventListener('click', (evt) => {
            evt.target.classList.add('loading')

            setTimeout(() => {
                evt.target.classList.remove('loading')
            }, 3000);
        })

    }

    // if(navigator.onLine){
    //     alert('online');
    //    } else {
    //     alert('offline');
    //    }

    // const Animations = ()=>{

    // }

    return (
        <>
        <div className="wrapper">
            <div className="navbar row">
                <div className="col-md-4 left">
                    <ul>
                        {/* <button style={{ border: "none", padding: "10px", borderRadius: "10px" }} className="px-4" >

             <FaRedoAlt className="icon" style={{color:"red", backgroundColor:"white", width:"35px",height:"35px"}}/>
              Dashboard
             </button> */}

                        <button className="btns" style={{marginLeft:"30%"}} onClick={() => ClickBait()}>
                            <span className="text">
                                Dashboard
                            </span>
                            <span className="loading-animate"></span>
                        </button>

                    </ul>
                </div>
                <div className="col-md-4 ">
                    <img src={logos} width="40%" alt="logo" />


                            
                </div>

<div className="col-md-2">
<span className="alignment text-center">
                    <FaBell style={{width: "35px", height: "35px", cursor:"pointer" }} className="icon hovers" />
                                <FaWifi style={{ width: "35px", height: "35px", marginLeft:"20px", cursor:"pointer"  }} className={`icons ${navigator.onLine ? "active" : "deactive"}`} />
</span>
</div>

                <div className="col-md-2 right">
                    
                    <ul>
                        <li>

                            {/* <button style={{ borderRadius: "50px", border: "none", background: "transparent" }} >

                                <div>
                                    <img src="https://i.imgur.com/kDLvuKf.png" alt="Admin" width="25%" alt="logo" />
                                    <p className="text-white my-1">User <span>as Admin</span></p>

                                    <i className="fas fa-angle-down mx-3 text-white" style={{ marginBottom: "25px" }} ></i>
                                </div>

                            </button> */}



                            {/* <div className="dropdown" style={{ backgroundColor: "white" }}>

                                <button className="px-3" style={{ width: "100%", backgroundColor: "white", border: "none" }}><FaUserAlt className="icon" style={{ color: "red", backgroundColor: "white", width: "35px", height: "35px" }} />Profile  </button>
                                <button className="px-3" style={{ width: "100%", backgroundColor: "white", border: "none" }}><FaRegSun className="icon" style={{ color: "red", backgroundColor: "white", width: "35px", height: "35px" }} />Settings</button>
                                <button className="px-3" style={{ width: "100%", backgroundColor: "white", border: "none" }}><FaSignOutAlt className="icon" style={{ color: "red", backgroundColor: "white", width: "35px", height: "35px" }} />Sign Out  </button>

                            </div> */}



                        </li>
                    </ul>
                </div>
            </div>
        </div>

</>

    )
}

export default Navbar;