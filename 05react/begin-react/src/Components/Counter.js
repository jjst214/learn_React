import React, { useState } from "react";
function Counter(){
    //useState(상태초기값)
    //--> 배열리턴 [상태, setter 함수]
    const [number, setNumber] = useState(0)
    const onIncrese = () => {
        setNumber(number => number+1);
        console.log("number값은 : " + number);
    }
    const onDecrease = () => {
        setNumber(number => number-1);
        console.log("number값은 : " + number);
    }
    return(   
        <div>
            <h2>{number}</h2>
            <button onClick={onIncrese}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}
export default Counter;