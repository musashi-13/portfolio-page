import React from 'react';
import profile from './profile.png';

function MainContent() {
    return(
        <div>
            <div className="section-one">
                <div style={{position: "relative", background: "blue", width: "30%", left:"340px"}}>
                    <svg
                        style={{position: "absolute", left: "-60px", top: "15px"}} 
                        viewBox="-80 -70 120 120"
                        xmlns="http://www.w3.org/2000/svg"
                        width="200"
                        height="200"
                    >
                    <path
                        fill="#eee"
                        d="M21.9,-22.3C28,-15.8,32.2,-7.9,32.2,0C32.2,7.8,27.8,15.7,21.8,23.2C15.7,30.8,7.8,38.1,-1.9,40C-11.6,41.8,-23.2,38.3,-29.6,30.7C-36,23.2,-37.1,11.6,-35.8,1.3C-34.5,-8.9,-30.6,-17.9,-24.2,-24.4C-17.9,-30.9,-8.9,-34.9,-0.5,-34.4C7.9,-33.9,15.8,-28.8,21.9,-22.3Z"
                        strokeWidth="0"
                    ></path>
                    </svg>
                    <svg 
                        style={{position: "absolute", top: "180px", left: "180px"}} 
                        viewBox="-40 -60 100 100" 
                        xmlns="http://www.w3.org/2000/svg"
                        width="200"
                        height="200"
                        >
                    <path 
                        fill="#eee" 
                        d="M32.8,-16.5C39.4,-7.5,39.4,7.6,32.9,19.3C26.3,30.9,13.2,39,0.1,39C-13,38.9,-25.9,30.7,-30.4,20.2C-34.9,9.8,-30.9,-2.9,-24.4,-11.7C-17.9,-20.6,-9,-25.7,2.1,-26.9C13.1,-28.1,26.2,-25.4,32.8,-16.5Z"
                        strokeWidth="0">
                    </path>
                    </svg>
                    <img style={{position: "absolute", top: "40px", left: "0px"}} src={profile} width="320" height="320" alt='my profile'></img>
                </div>
                <div style={{position: "relative", background: "yellow", width: "50%", top:"300px", left:"200px"}}>
                    <p style={{position: "absolute", left: "18%", top: "62px"}}>Hi, I am</p>
                    <p style={{position: "absolute", left: "19%", top: "80px"}}>Karan Hathwar, a</p>
                    <p style={{position: "absolute", color: "rgb(255,105,105)", fontSize: "54px", left: "22%", top: "55px"}}><b>FREELANCE</b></p>
                    <p style={{position: "absolute", color: "rgb(232,212,252)", fontSize: "18px", left: "30%", top: "146px"}}><b>DESIGNER &</b></p>
                    <p style={{position: "absolute", color: "rgb(168,213,250)", fontSize: "50px", left: "20%", top: "125px"}}><b>WEB DEVELOPER</b></p>      
                    <p style={{position: "absolute", left: "18%", top: "250px", width: "460px", textAlign: "justify"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, deserunt qui! Minima culpa possimus, nostrum consequatur in suscipit incidunt quas dolore qui ex deleniti nisi, voluptas exercitationem at officia tempora!</p>
                </div>

            </div>
        </div>
    )
}

export default MainContent
    