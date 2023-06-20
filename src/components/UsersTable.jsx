import React, { useState, useEffect } from "react";
import Axios from "axios";

function UsersTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    Axios.get("https://dummyjson.com/users")
      .then((response) => {
        setUsers(response.data.users);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="display-5">The Users Table: </h1>
      <table className="table table-striped text-center border shadow">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Username</th>
            <th>Birth Date</th>
            <th>Image</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Address</th>
            <th>Bank Card Expire</th>
            <th>Company</th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td colSpan="15">Loading...</td>
            </tr>
          ) : error ? (
              <tr>
                <td colSpan="15">Error: {error.message}</td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.username}</td>
                <td>{user.birthDate}</td>
                <td><img src={user.image} alt="" style={{height:"50px"}} /></td>
                <td>{user.height}</td>
                <td>{user.weight}</td>
                <td>{user.address.city + ', ' + user.address.coordinates.lat + ', ' + user.address.coordinates.lng}</td>
                <td>{user.bank.cardExpire}</td>
                <td>{user.company.name}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
