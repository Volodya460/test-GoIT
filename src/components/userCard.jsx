import { useDispatch } from "react-redux";
import CardImage from "../assets/picture2.png";
import { ToastContainer, toast } from "react-toastify";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";

import { updateFollowers } from "../redux/operation";
import {
  CardLogo,
  ImgBox,
  UserFons,
  BottomBox,
  TopBox,
} from "./userCard.styled";

const LOCALSTORAGE_KEY = "ID-SAVE-USERFOLLOWERS";
let idArray = localStorage.getItem("ID-SAVE-USERFOLLOWERS");
let idArrayPars = JSON.parse(idArray) || [];

export default function UserCard(user) {
  const { id, followers, avatar, tweets } = user.user;

  const dispatch = useDispatch();

  const addFollower = () => {
    let arrayUserFollowers = { id, followers, avatar, tweets };
    idArrayPars.push(arrayUserFollowers);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(idArrayPars));
    dispatch(updateFollowers([id, Number(followers) + 1]));

    toast.info("Follow ");
  };

  const deleteFollower = () => {
    idArrayPars.map((el) => {
      if (Number(id) === Number(el.id)) {
        const index = idArrayPars.map((el) => el).indexOf(el);
        idArrayPars.splice(index, 1);

        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(idArrayPars));
      }
    });
    dispatch(updateFollowers([id, Number(followers) - 1]));
    toast.info("Don't follow ");
  };

  const chooseButton = () => {
    for (let i = 0; i < idArrayPars.length; i++) {
      if (Number(idArrayPars[i].id) === Number(id)) {
        return true;
      }
    }
    return false;
  };

  return (
    <>
      <TopBox>
        <UserFons src={CardImage} alt="ddd" height="50px" />
        <ImgBox>
          <img src={avatar} alt="user" height="50px" />
        </ImgBox>

        <CardLogo />
      </TopBox>
      <BottomBox>
        <p> {tweets} TWEETS</p>
        <p> {followers.toLocaleString("en-US")} FOLLOWERS</p>
        {chooseButton() === false ? (
          <button type="button" onClick={() => addFollower()}>
            FOLLOW
          </button>
        ) : (
          <button
            type="button"
            style={{ background: "#5CD3A8" }}
            onClick={() => deleteFollower()}
          >
            FOLLOWING
          </button>
        )}
      </BottomBox>
      <ToastContainer />
    </>
  );
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};
