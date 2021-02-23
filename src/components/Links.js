import React from "react";

function Links ({link, name}) {
    return(
        <div>
        <h3>Links:</h3>
        <a href={link}>{name}</a> 
        </div>
    )
}
export default Links;