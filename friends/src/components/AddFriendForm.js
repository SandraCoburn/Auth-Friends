import React, { useState } from "react";
import { axiosWithAuth } from "../utilis/axiosWithAuth";
const AddFriendForm = ({ setFriends }) => {
  const initState = {
    name: "",
    age: "",
    email: "",
    // id: Date.now(),
  };
  const [newfriend, setNewFriend] = useState(initState);

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("/api/friends", newfriend)
      .then((res) => {
        console.log(res.data);
        setFriends(res.data, newfriend);
        setNewFriend(initState);
      });
  };
  const handleChanges = (event) => {
    setNewFriend({
      ...newfriend,
      [event.target.name]: event.target.value,
    });
  };
  //   const clearForm = event => {
  //     event.preventDefault();
  //     setNewFriend(initialValue);
  //   };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        value={newfriend.name}
        name="name"
        onChange={handleChanges}
      />
      <label htmlFor="age">Age: </label>
      <input
        type="text"
        value={newfriend.age}
        name="age"
        onChange={handleChanges}
      />
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        value={newfriend.email}
        name="email"
        onChange={handleChanges}
      />
      <button>Add a Friend</button>
    </form>
  );
};

export default AddFriendForm;
