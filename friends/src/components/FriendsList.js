import React, { useState } from "react";
import Friends from "./Friends";
import AddFriendForm from "./AddFriendForm";
import { axiosWithAuth } from "../utilis/axiosWithAuth";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  const getFriends = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  };
  console.log("friends", friends);
  return (
    <>
      <div>
        <AddFriendForm setFriends={setFriends} />

        <button onClick={getFriends}>Get Friends</button>
      </div>
      <div className="card-list">
        {friends.map(friend => (
          <Friends key={friend.id} friend={friend} />
        ))}
      </div>
    </>
  );
};
export default FriendsList;
