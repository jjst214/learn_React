import React, { useState } from "react";
function InputSample(){

    const [text, setText] = useState("");
    const inputs = {
        name:"",
        nickname:""
    }
    const {name, nickname} = inputs;
    const onChange = (e) => {
        const {name,value} = e.target
    }
    const onReset = () => {
        setText("");
    }
    return(
        <div>
            <input placeholder="이름" name="name" value={name}/>
            <input placeholder="닉네임" name="nickname" value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                이름 (닉네임)
            </div>
        </div>
    )
}
export default InputSample;