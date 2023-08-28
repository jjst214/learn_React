import React from "react";
function User({user}){
    return(
        <div>
            {user.username} <span>({user.email})</span>
        </div>
    )
    
}
function UserList(){
    const users = [
        {
            id:1,
            username:"green",
            email: "green@naver.com"
        },
        {
            id:2,
            username:"blue",
            email: "blue@naver.com"
        },
        {
            id:3,
            username:"yellow",
            email: "yellow@naver.com"
        }
    ]
    return (
        <div>
            <div>
                {users.map(user=>(
                    <User key={user.id} user={user}/>
                ))}
            </div>
        </div>
    )
}
export default UserList;