import React from "react";


export default function Joke(props){
    return(
        <div className="joke">
            <h3 style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</h3>
            <p>Punchline: {props.punchline}</p>
            <hr/>
        </div>
    )
}