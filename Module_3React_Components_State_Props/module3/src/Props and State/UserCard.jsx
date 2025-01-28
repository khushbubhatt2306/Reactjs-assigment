import React from "react";

function UserCard({ name, age, location }) {
  return (
    <div className="container d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Name: {name}</li>
          <li className="list-group-item">Age: {age}</li>
          <li className="list-group-item">Location: {location}</li>
        </ul>
      </div>
    </div>
  );
}

export default UserCard;
