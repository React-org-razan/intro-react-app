import React from "react";
const blueSquare = (props) => {
    return <div className='blue' style={{color:props.word}}>
        BlueSquare
        {props.size}
    </div>
}

export default blueSquare;