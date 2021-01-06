import React from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../utilis/axiosWithAuth";

const Friends = (props) => {
  const deleteButton = (e, friendId) => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/api/friends/${friendId}`)
      .then((res) => {
        props.setFriends(
          props.friends.filter((friend) => friend.id !== friendId)
        );
      })
      .catch((error) => console.log(error));
  };
  const Button = styled.button`
    background-color: #ff0054ff;
    height: 5vh;
    color: #ffffffff;
    border-radius: 5px;
    text-align: center;
    margin: 1%;
  `;
  return (
    <div className="card">
      <h1>Friend:</h1>
      <p>Name: {props.friend.name}</p>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>
      <Button onClick={(e) => deleteButton(e, props.friend.id)}>Delete</Button>
    </div>
  );
};
export default Friends;
