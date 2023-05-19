import React from "react";

const Profile = () => {
  const email = sessionStorage.getItem("email");
  const password = sessionStorage.getItem("password");

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Email: {email}</p>
      <p>Email: {password}</p>
    </div>
  );
};

export default Profile;
