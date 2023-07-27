import React from "react";
const greenSquare = (props) => {
    return <div className='green' style={{color:props.word}}>
        GreenSquare
        {props.size}
    </div>
}

export default greenSquare;