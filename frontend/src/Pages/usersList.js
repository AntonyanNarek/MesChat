import React, { useState, useEffect, useContext } from "react";
import searchImg from "../assets/search.png";
import Loader from "../components/loader";
import { axiosHandler, getToken, LastUserChat } from "../helper";
import {
  activeChatUserAction,
  triggerRefreshUserListAction,
} from "../stateManagement/actions";
import { store } from "../stateManagement/store";
import { PROFILE_URL } from "../urls";
import { UserMain } from "./homeComponents";

let goneNext = false;

function UsersList() {
  const [users, setUsers] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [nextPage, setNextPage] = useState(1);
  const [canGoNext, setCanGoNext] = useState(false);
  const [search, setSearch] = useState("");

  const {
    state: { triggerRefreshUserList },
    dispatch,
  } = useContext(store);

  useEffect(() => {
    getUserList();
  }, [search]);

  useEffect(() => {
    if (triggerRefreshUserList) {
      getUserList();
      dispatch({ type: triggerRefreshUserListAction, payload: false });
    }
  }, [triggerRefreshUserList]);
  const getUserList = async (append = false) => {
    let extra = "";
    if (search !== "") {
      extra += `&keyword=${search}`;
    }
    setCanGoNext(false);
    const _token = await getToken();
    const _users = await axiosHandler({
      method: "get",
      url: PROFILE_URL + `?page=${nextPage}${extra}`,
      token: _token,
    }).catch((e) => null);
    if (_users) {
      if (_users.data.next) {
        setNextPage(nextPage + 1);
        setCanGoNext(true);
      }
      if (append) {
        setUsers([...users, ..._users.data.results]);
        goneNext = false;
      } else {
        setUsers(_users.data.results);
      }

      setFetching(false);
    }

    checkLastChat(_users.data.results);
  };

  const checkLastChat = (users) => {
    let lastUserChat = localStorage.getItem(LastUserChat);
    if (lastUserChat) {
      lastUserChat = JSON.parse(lastUserChat);
      if (users.filter((item) => item.id === lastUserChat.id).length) {
        setActiveUser(lastUserChat);
      }
    }
  };
}
