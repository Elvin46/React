import React from 'react'

export function User() {
    const [getUser , setUser] = React.useState([]);
    React.useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setUser(data))
    },[])
  return (
    <div>
        <ul>
            {getUser.map(({id,username,email})=>(
                <li>{`${id}--${username}--${email}`}</li>
            ))}
        </ul>
    </div>
  )
}

