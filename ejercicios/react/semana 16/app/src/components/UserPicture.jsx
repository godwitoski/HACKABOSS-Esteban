import React from "react";

const UserPicture = ({ picture }) => {
  return (
    <li>
      <img src={picture.medium} alt="User" />
    </li>
  );
};

export default UserPicture;
