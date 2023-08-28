import React from "react";

const UserLocation = ({ location }) => {
  return (
    <li>
      {location.street.number} {location.street.name}, {location.city}
      {location.state}, {location.country}, {location.postcode}
    </li>
  );
};

export default UserLocation;
