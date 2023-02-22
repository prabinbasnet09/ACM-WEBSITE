import React from "react";

export default function Interns(props){
    return(
       <>
        <section className = "interns">
            <img src = "" alt = "profile picture" className="developers--pp" />
            <p className = "interns--name">{props.name}</p>
            <p className = "interns--classification">{props.classification}</p>
            <p className = "interns--position">{props.position}</p>
            <p className = "interns--company">{props.company}</p>
            <p className = "interns--timeInterval">{props.timeInterval}</p>
            <a href = {props.linkedin}>
                <button className = "interns--linkedin">View Linkedin</button>
            </a>
         </section>
       </>

    )
}