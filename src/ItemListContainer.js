import React from "react";
import "./ItemCount";

export const ItemListContainer = ( {greeting} ) => {
    return (
        <div class="ItemListContainer">
            <h2> {greeting} </h2>
            <hr/>
            <ItemCount/>
        </div>
    
    )
}