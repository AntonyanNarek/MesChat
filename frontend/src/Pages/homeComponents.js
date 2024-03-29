import React, { useContext, useState, useEffect } from "react";
import close from "../assets/close.svg";
import edit from "../assets/edit.png";
import favoriteActive from "../assets/favActive.png";
import Loader from "../components/loader";
import { axiosHandler, errorHandler, getToken } from "../helper";
import { userDetailAction } from "../stateManagement/actions";
import { store } from "../stateManagement/store";
import { PROFILE_URL} from "../urls";


export const UserMain = (props) => {
  let _count = 0;

  if (props.count) {
    if (parseInt(props.count) > 0) {
      _count = props.count;
    }
  }
  return (
    <div
      className={`flex align-center justify-between userMain ${
        props.clickable ? "clickable" : ""
      }`}
      onClick={() => props.clickable && props.onClick()}
    ><UserAvatar
        isV2
        name={props.name}
        profilePicture={props.profilePicture}
        caption={props.caption}
      />
      {_count > 0 && <div className="counter">{props.count}</div>}
    </div>
  );
};

export const UserAvatar = (props) => {
  return (
    <div className={`userAvatar ${props.isV2 ? "version2" : ""}`}>
      <div
        className="imageCon"
        style={{
          backgroundImage: `url("${props.profilePicture}")`,
        }}
      />
      <div className="contents">
        <div className="name">{props.name}</div>
        {!props.noStatus && <div className="subContent">{props.caption}</div>}
      </div>
      {props.isFavorite == true && <div className="fav"><img src = {favoriteActive}/></div>}
    </div>
  );
};

export const ChatBubble = (props) => {
  return (
    <div className={`chatbubbleCon ${props.bubbleType}`}>
      <div className="chatbubble">
        <p>{props.message}</p>
        <div className="time">{props.time}</div>
      </div>
    </div>
  );
};

let profileRef;

export const ProfileModal = (props) => {
  const [profileData, setProfileData] = useState({
    ...props.userDetail,
    user_id: props.userDetail.user.id,
  });
  const [submitted, setSubmitted] = useState(false);
  const [baseImage, setBaseImage] = useState("");
  const [pp, setPP] = useState(
    props.userDetail.profile_picture
  );

  const { dispatch } = useContext(store);

  const submit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const token = await getToken(props);
    const url =
      PROFILE_URL +
      `${props.userDetail.first_name ? `/${props.userDetail.id}` : ""}`;
    const method = props.userDetail.first_name ? "patch" : "post";
    const profile = await axiosHandler({
      method,
      url,
      data: profileData,
      token,
    }).catch((e) => alert(errorHandler(e)));
    setSubmitted(false);
    if (profile) {
      props.setClosable();
      dispatch({ type: userDetailAction, payload: profile.data });
    }
  };

  const onChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (props.visible) {
      setProfileData({
        ...props.userDetail,
        user_id: props.userDetail.user.id,
      });
      setPP(
        props.userDetail.profile_picture
      );
      setBaseImage(pp);
    }
  }, [props.visible]);  


  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleOnChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
    setProfileData({
      ...profileData,
      [e.target.name]: base64,
    });
  };

  return (
    <div className={`modalContain ${props.visible ? "open" : ""}`}>
      <div className="content-inner">
        <div className="header">
          <div className="title">{props.view ? "Посмотреть" : "Обновить"} профиль</div>
          {props.closable && <img src={close} onClick={props.close} />}
        </div>
        <form className="content" onSubmit={submit}>
          <div className="inner">
            <div className="leftHook">
              <div
                className="imageCon"
                style={{
                  backgroundImage: `url(${baseImage})`,
                }}
              />
              <input
                type="file"
                name="profile_picture"
                style={{ display: "none" }}
                ref={(e) => (profileRef = e)}
                onChange={handleOnChange}
              />
              {!props.view && (
                <><div className="point" onClick={() => profileRef.click()}>
                      Сменить аватар
                      <img src={edit} />
                    </div>
                </>
              )}
            </div>
            <div className="dataInput">
              <label>
                <span>Имя</span>
                <input
                  name="first_name"
                  value={profileData.first_name}
                  onChange={onChange}
                  disabled={props.view}
                  required
                />
              </label>
              <label>
                <span>Фамилия</span>
                <input
                  name="last_name"
                  value={profileData.last_name}
                  onChange={onChange}
                  disabled={props.view}
                  required
                />
              </label>
              <label>
                <span>Статус</span>
                <input
                  name="caption"
                  value={profileData.caption}
                  onChange={onChange}
                  disabled={props.view}
                  required
                />
              </label>
              <label>
                <span>Обо мне</span>
                <textarea
                  name="about"
                  value={profileData.about}
                  onChange={onChange}
                  disabled={props.view}
                  required
                />
              </label>
            </div>
          </div>
          {!props.view && (
            <button type="submit" disabled={submitted}>
              {submitted ? (
                <center>
                  <Loader />
                </center>
              ) : (
                "Обновить"
              )}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
