import React from "react";
const AddFriendForm = () => {
  return (
    <form>
      <label htmlFor="name">Name: </label>
      <input type="text" name="name" />
      <label htmlFor="age">Age: </label>
      <input type="text" name="age" />
      <label htmlFor="email">Email: </label>
      <input type="email" name="email" />
      <button type="submit">Add Friend</button>
    </form>
  );
};

export default AddFriendForm;
