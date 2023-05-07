import { useDispatch } from "react-redux";
import CardImage from "../assets/picture2.png";

import { updateFollowers } from "../redux/operation";
import {
  CardLogo,
  UserFons,
  UserPFollowers,
  UserPTweets,
} from "./userCard.styled";
// import ButtonFollow from "./buttonFollow/buttonFollow";
// import ButtonFollowing from "./buttonFollowing/buttonFollowing";

const LOCALSTORAGE_KEY = "ID-SAVE-USERFOLLOWERS";
let idArray = localStorage.getItem("ID-SAVE-USERFOLLOWERS");
let idArrayPars = JSON.parse(idArray) || [];

export default function UserCard(user) {
  const dispatch = useDispatch();

  const addFollower = () => {
    let arrayUserFollowers = Number(user.user.id);
    idArrayPars.push(arrayUserFollowers);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(idArrayPars));
    dispatch(updateFollowers([user.user.id, Number(user.user.followers) + 1]));
  };

  const deleteFollower = () => {
    dispatch(updateFollowers([user.user.id, Number(user.user.followers) - 1]));

    idArrayPars.map((el) => {
      if (Number(user.user.id) === el) {
        const index = idArrayPars.map((el) => el).indexOf(el);
        idArrayPars.splice(index, 1);

        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(idArrayPars));
      }
    });
  };

  const chooseButton = () => {
    for (let i = 0; i < idArrayPars.length; i++) {
      if (idArrayPars[i] === Number(user.user.id)) {
        return true;
      }
    }
    return false;
  };

  return (
    <>
      <UserFons src={CardImage} alt="ddd" height="50px" />
      <img src={user.user.avatar} alt="user" height="50px" />
      <CardLogo />
      <UserPTweets> {user.user.tweets} TWEETS</UserPTweets>
      <UserPFollowers> {user.user.followers} FOLLOWERS</UserPFollowers>

      {chooseButton() === true ? (
        // <ButtonFollow
        //   userId={user.user.id}
        //   userFolloewrs={user.user.followers}
        //   changeBullBautoon={changeBullBautoon()}
        //   // addFollower={addFollower}
        // />
        <button type="button" onClick={() => deleteFollower()}>
          FOLLOW
        </button>
      ) : (
        // <button type="button" onClick={() => deleteFollower()}>
        //   FOLLOW
        // </button>
        // <ButtonFollow
        //   userId={user.user.id}
        //   userFolloewrs={user.user.followers}
        //   addFollower={addFollower}
        // />

        // <ButtonFollowing
        //   userId={user.user.id}
        //   userFolloewrs={user.user.followers}
        //   changeBullBautoon={changeBullBautoon()}
        //   // deleteFollower={deleteFollower}
        // />
        <button type="button" onClick={() => addFollower()}>
          FOLLOWING
        </button>
      )}
    </>
  );
}
