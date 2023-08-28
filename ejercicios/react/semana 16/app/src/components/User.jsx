import React from "react";
import UserPicture from "./UserPicture";
import UserName from "./UserName";
import UserLocation from "./UserLocation";

const User = ({ user }) => {
  return (
    <ul>
      <UserPicture picture={user.picture} />
      <UserName name={user.name} />
      <UserLocation location={user.location} />
      {user.dob.age < 18 && <li style={{ color: "red" }}>YOUNGER 🥱🪀🧸</li>}
    </ul>
  );
};

export default User;
