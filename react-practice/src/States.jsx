import { useState } from 'react';

export const States = ()=> {
    const [users, setUsers] = useState([
    { name: "John", age: 30, city: "New York" },
    { name: "Jane", age: 25, city: "Los Angeles" },         
    { name: "Mike", age: 35, city: "Chicago" },
    { name: "Sara", age: 28, city: "Miami" },
    { name: "Tom", age: 40, city: "Seattle" },
])
    return (
        <div>
            <h2>user details</h2>
            <ul>
                {users.map((item, idx) => (
                    <li key={item.name + idx}>
                        {item.name} is {item.age} years old and lives in {item.city}.
                    </li>
                ))}
            </ul>
        </div>
    );
}