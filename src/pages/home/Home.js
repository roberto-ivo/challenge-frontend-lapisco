import React, { useEffect, useState } from "react";
import { EmptyUsers } from "./components/EmptyUsers/EmptyUsers";
import { Users } from "./components/Users/Users";
import "./Home.css";

export const Home = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const urlApi = "https://randomuser.me/api/?results=26";
    fetch(urlApi, { method: "GET" })
      .then((response) => response.json())
      .then((responseData) => {
        setUsers(responseData?.results);
        setFilteredUsers(responseData?.results);
      })
      .catch((error) => console.warn(error));
  }, []);

  const handleInput = (value) => {
    setFilteredUsers(
      users.filter((user) => {
        var fullname = `${user.name.first} ${user.name.last}`;
        return fullname.toLowerCase().includes(value.toLowerCase());
      })
    );
  };

  return (
    <>
      <h1 className="Home-title">Desafio Front-end - LAPISCO</h1>
      <div className="Home-container">
        <input
          type="text"
          name="name"
          onChange={(e) => handleInput(e.target.value)}
          className="Home-input"
        />
        {filteredUsers.length > 0 ? (
          <Users data={filteredUsers} />
        ) : (
          <EmptyUsers />
        )}
      </div>
    </>
  );
};
