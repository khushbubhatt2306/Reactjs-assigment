import React, { Component } from "react";

class ComponentDidMount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
      error: null,
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data, loading: false }))
      .catch((error) => this.setState({ error, loading: false }));
  }
  render() {
    const { users, loading, error } = this.state;

    if (loading) return <p>Loading data...</p>;
    if (error) return <p>Error fetching data: {error.message}</p>;

    return (
      <div>
        <h1>User List</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ComponentDidMount;
