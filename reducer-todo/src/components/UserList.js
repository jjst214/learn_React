import React from 'react';

function UserList({users}) {
    return (
        <div>
            {users.map(user=>(
                <div>
                    <span style={{color:user.active}}>
                        이름 : {user.username}
                        이메일 : {user.email}
                    </span>
                    <button>삭제</button>
                </div>
            ))}
        </div>
    );
}

export default UserList;