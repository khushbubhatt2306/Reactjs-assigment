import React from "react";

function UserList() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
  ];
  return (
    <div>
      <h2>Users List:</h2>
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              {user.id} : {user.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UserList;
