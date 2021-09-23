import React from "react";
import "../index.css";

const JobDetails = ({text, title, link}) => {
    return (
        <div>
        <h1>{title}</h1>

        <br/>
        <a href={link}> Link </a>
        <br/>
        <p style={{fontSize: "20px",  textAlign:"left", paddingTop:"10px"}} >{text}</p>
        

        </div>
    )
}

export default JobDetails