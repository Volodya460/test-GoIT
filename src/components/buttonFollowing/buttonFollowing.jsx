const LOCALSTORAGE_KEY = "ID-SAVE-USERFOLLOWERS";
let idArray = localStorage.getItem("ID-SAVE-USERFOLLOWERS");
let idArrayPars = JSON.parse(idArray) || [];
import { useDispatch } from "react-redux";
import { updateFollowers } from "../../redux/operation";

export default function ButtonFollowing(userId) {
  const dispatch = useDispatch();

  const addFollower = () => {
    let arrayUserFollowers = Number(userId.userId);
    idArrayPars.push(arrayUserFollowers);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(idArrayPars));
    dispatch(
      updateFollowers([userId.userId, Number(userId.userFolloewrs) + 1])
    );
  };
  return (
    <button type="button" onClick={() => addFollower()}>
      FOLLOWING
    </button>
  );
}
