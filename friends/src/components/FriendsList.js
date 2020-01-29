import React, { useState } from "react";
import Friends from "./Friends";
import { axiosWithAuth } from "../utilis/axiosWithAuth";

const FriendsList = props => {
  const [friends, setFriends] = useState([]);

  const getFriends = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        setFriends({ ...friends, friends: res.data });
      })
      .catch(err => console.log(err));
  };
  return (
    <div className="card-list">
      <button type="submit" onClick={getFriends}>
        Get Friends
      </button>
      {friends.map(friend => (
        <Friends key={friend.id} friend={friend} />
      ))}
    </div>
  );
};
export default FriendsList;
