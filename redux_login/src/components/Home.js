// src/components/Home.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/authActions";

const Home = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Home;
