import React from 'react';

function Display(props){
    
    return(
        <div className="display">
            <p style={{fontSize:props.style}}>{props.display}</p>
        </div>
    );
}

export default Display;