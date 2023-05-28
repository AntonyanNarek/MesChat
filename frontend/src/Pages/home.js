import React, { useState, useContext, useEffect } from "react";

import settings from "../assets/settings.png";

import logoutPng from "../assets/logout.png";
import { UserAvatar, ProfileModal } from "./homeComponents";
import { store } from "../stateManagement/store";
import Loader from "../components/loader";
import { logout } from "./authController";
import { UserMain, ChatBubble } from "./homeComponents";
import UsersList from "./usersList";
import ChatInterface from "./chatInterface";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import search from "../assets";
import smiley from "../assets";
import favorite from "../assets";
import send from "../assets";

const Home = (props) => {
  const [showProfile, setShowProfile] = useState(false);
  const [profileClosable, setProfileClosable] = useState(true);
  const [userdetail, setUserDetail] = useState(null);
  const [activeUser, setActiveUser] = useState(null);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const {
    state: { userDetail, activeChatUser },
  } = useContext(store);

  useEffect(() => {
    if (userDetail !== userdetail) {
      setUserDetail(userDetail);
      if (!userDetail.first_name) {
        setShowProfile(true);
        setProfileClosable(false);
      }
    }

    if (activeUser !== activeChatUser) {
      setActiveUser(activeChatUser);
      closeSideBar();
    }
    console.log(activeChatUser);
  }, [userDetail, activeChatUser]);

  if (!userdetail) {
    return (
      <div className="centerAll">
        <Loader />
      </div>
    );
  }

  const toggleSideBar = () => {
    const sideBar = document.getElementById("sideBar");
    if (sideBar.classList.contains("close")) {
      sideBar.classList.remove("close");
    } else {
      sideBar.classList.add("close");
    }
  };

  const closeSideBar = () => {
    const sideBar = document.getElementById("sideBar");
    if (!sideBar.classList.contains("close")) {
      sideBar.classList.add("close");
    }
  };

  return (
    <>
      <ProfileModal close={() => setShowProfile(false)} visible={showProfile} />
      <div className="home-container">
        <div className="side">
          <div className="flex align-center justify-between top">
            <UserAvatar noStatus isV2 />
            <img src={settings} onClick={() => setShowProfile(true)} />
          </div>

          <div className="searchCon">
            <img src={search} />
            <input placeholder="Поиск пользователей" />
          </div>

          <div className="UserList">
            <UserMain />
            <UserMain />
            <UserMain />
            <UserMain />
            <UserMain />
            <UserMain />
            <UserMain />
            <UserMain />
            <UserMain />
            <UserMain />
            <UserMain />
            <UserMain />
          </div>
          <div className="logout" onClick={() => logout(props)}>
            <img src={logoutPng} />
            <div>logout</div>
          </div>

          <div className="logout">
            <img src={logout} />
            <div>logout</div>
          </div>
        </div>
        <div className="main">
          <div className="flex align-center justify-between heading">
            <UserAvatar />
            <div className="flex align-center rightItems">
              <img src={favorite} />
              <img src={userDetail} />
            </div>
          </div>
          <div className="chatArea">
            <ChatBubble bubbleType="" />
            <ChatBubble bubbleType="sender" />
            <ChatBubble bubbleType="sender" />
            <ChatBubble bubbleType="" />
            <ChatBubble bubbleType="" />
            <ChatBubble bubbleType="sender" />
            <ChatBubble bubbleType="sender" />
          </div>
          <div className="messageZone">
            <div className="flex align-center justify-between topPart">
              <img src={smiley} />
              <img src={send} />
            </div>
            <textarea placeholder="Type your message here..." />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
