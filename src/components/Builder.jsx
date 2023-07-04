import React from "react";
import './builder.css';

export const Builder=({name,description})=>{

    return(
        <div className="builders">
            <h4>{name}</h4>
            <p>{description}</p>

            
        </div>
    );
}