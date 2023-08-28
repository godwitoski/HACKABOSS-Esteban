import React from "react";

const UserName = ({ name }) => {
  return (
    <li>
      {name.title} {name.first} {name.last}
    </li>
  );
};

export default UserName;
