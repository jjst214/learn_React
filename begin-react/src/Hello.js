import React from "react";
//let {color, age, name} = {color:"red", age:20, name:"green"}

function Hello({color, age, name, isSpecial}){
    return(
        <div style={{color:color}}>
            {isSpecial ? <b>***</b> : null}
            안녕하세요 {name}
            <h2>{age}</h2>
        </div>
    )
}
//디폴트 props
Hello.defaultProps = {
    name:"월요일"
}
//컴포넌트 내보내기
export default Hello;