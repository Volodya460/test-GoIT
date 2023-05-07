import { updateFollowers } from "../../redux/operation";
import { useDispatch } from "react-redux";

const LOCALSTORAGE_KEY = "ID-SAVE-USERFOLLOWERS";
let idArray = localStorage.getItem("ID-SAVE-USERFOLLOWERS");
let idArrayPars = JSON.parse(idArray) || [];

export default function ButtonFollow(userId) {
  const dispatch = useDispatch();

  const deleteFollower = () => {
    dispatch(
      updateFollowers([userId.userId, Number(userId.userFolloewrs) - 1])
    );

    idArrayPars.map((el) => {
      if (Number(userId.userId) === el) {
        const index = idArrayPars.map((el) => el).indexOf(el);
        idArrayPars.splice(index, 1);

        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(idArrayPars));
      }
    });
  };
  return (
    <button type="button" onClick={() => deleteFollower()}>
      FOLLOW
    </button>
  );
}
