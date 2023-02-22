import React from "react";
import { useEffect, useState } from "react";


function TopButton(){
    const [TopButton, setTopButton] = useState(false);

    useEffect (() => {
        window.addEventListener("scroll", () =>  {
            if (window.scrollY > 100) {                   {/* only if the user scrolls more than 100 px */}
                setTopButton(true)
            } else {
                setTopButton(false)
            }
    })
    },[])

    const scrollUp = () => {
        window.scrollTo ({
            top: 10,                     // takes the user to the 10 px from the top position
            behavior: "smooth",
        })
    }

    return <div className="goTop">
    { TopButton && (
        <button style={{
            height: "50px",
            width:  "50px",
            position: "absolute",
            bottom: "47%",
            right: "5%",
            borderRadius: "50px",
            fontSize: "30px",
            opacity: "0.8",
        }}

        onClick = {scrollUp}>
          <div id = "button"> ^ </div>    {/* '^' up arrow symbol to direct the user*/}
        </button>
    ) }    
    </div>
}



export default TopButton;