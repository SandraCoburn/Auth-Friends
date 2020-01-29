import React, { useState } from "react";
import { axiosWithAuth } from "../utilis/axiosWithAuth";
const AddFriendForm = ({ setFriends }) => {
  const [newfriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: "",
    id: Date.now()
  });

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("/api/friends", newfriend)
      .then(res => {
        console.log(res.data);
        setFriends(res.data, newfriend);
      });
  };
  const handleChanges = event => {
    setNewFriend({
      ...newfriend,
      [event.target.name]: event.target.value
    });
  };
  //   const clearForm = event => {
  //     event.preventDefault();
  //     setNewFriend(initialValue);
  //   };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input type="text" name="name" onChange={handleChanges} />
      <label htmlFor="age">Age: </label>
      <input type="text" name="age" onChange={handleChanges} />
      <label htmlFor="email">Email: </label>
      <input type="email" name="email" onChange={handleChanges} />
      <button>Add Friend</button>
    </form>
  );
};

export default AddFriendForm;
