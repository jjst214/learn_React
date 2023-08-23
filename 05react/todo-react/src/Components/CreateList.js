import React from "react";
function CreateList({onChange, onCreate, list}){
    return(
        <div>
            <input placeholder="todo" name="list" value={list} onChange={onChange}/>
            <button onClick={onCreate}>등록</button>
        </div>
    )
}
export default CreateList;