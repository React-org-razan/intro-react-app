import React from "react";
const redSquare = (props) => {
    return <div className='red' style={{color:props.word}}>
        RedSquare
        {props.size}
    </div>
}

export default redSquare;