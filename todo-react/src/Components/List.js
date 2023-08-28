import React from "react";

function List({lists, onRemove, onToggle}){
    return(
        <div>
            <ul>
                {lists.map(list=>(
                    <li key={list.id}>
                        <b onClick={()=>onToggle(list.id)} style={{color: list.active ? 'blue' : 'black'}}>{list.list}</b> <button onClick={()=>onRemove(list.id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default List;