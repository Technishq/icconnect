// Libraries
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { changeView } from "../app/slice/feedSlice";
import { fetchToken } from "../app/slice/userSlice";
import { posting } from "../app/slice/postingSlice";

// NavMenu DB

// Styled Components

// ENVy
import { API, PROFILE_IMG } from "../env";

// change button style on click (nav-menu)
const activate = (e) => {
  // remove active button if any
  const prvActiveButton = document.querySelector(".active");
  if (prvActiveButton) prvActiveButton.classList.remove("active");

  // set the clicked button as active
  const clickedButton = e.currentTarget;
  clickedButton.classList.add("active");
};

const userUpdate = () => {
  document.querySelector("#userinfo-update #uname").value = "";
  document.querySelector("#userinfo-update #headline").value = "";
  document.querySelector("#userinfo-update input#pImg").value = "";
  document.querySelector("#userinfo-update input#bgImg").value = "";
  document.getElementById("userinfo-update").classList.add("visible");
};

// Web View
const WebHeader = ({ token }) => {
  const [logged, setLogged] = useState(true);

  const dispatch = useDispatch();
  const updateFeed = (e, name) => {
    dispatch(changeView({ show: name }));
    activate(e);
  };

  const logout = async () => {
    const responce = await fetch(`${API}/api/user/logout?token=${token}`, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
    });
    const data = await responce.json();
    if (!data.success) {
      alert("Something went wrong");
      console.log(data.error);
      return;
    }
    localStorage.removeItem("token");
    dispatch(fetchToken());

    setLogged(false);
  };

  return (
    <>
  
    </>
  );
};

// Mob View
const MobileHeader = () => {
  const userInfo = useSelector((state) => state.user)?.info;
  const dispatch = useDispatch();
  const updateFeed = (e, name) => {
    if (name === "post") return;
    dispatch(changeView({ show: name }));
    activate(e);
  };

  const viewSharing = () => {
    dispatch(posting({ show: true }));
  };

  return (
    <>

    </>
  );
};

// Main Component
const Header = () => {
  const width = useSelector((state) => state.width);
  const userToken = useSelector((state) => state.user?.token);

};

export default Header;
