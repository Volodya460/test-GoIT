import { useDispatch } from "react-redux";
import { changeFilter, changeShowButton } from "../redux/userSlice";
import { Select } from "./dropDown.styled";

export default function DropnDown() {
  const dispatch = useDispatch();

  const buttonLoadMOre = (e) => {
    if (e.target.value === "Following") {
      dispatch(changeShowButton(true));
    }
    if (e.target.value === "All") {
      dispatch(changeShowButton(false));
    }
    if (e.target.value === "Follow") {
      dispatch(changeShowButton(true));
    }
    if (e.target.value === "") {
      dispatch(changeShowButton(false));
    }

    dispatch(changeFilter(e.target.value));
  };
  return (
    <Select
      onChange={(e) => {
        return buttonLoadMOre(e);
      }}
    >
      <option value="All">All</option>
      <option defaultValue="Follow">Follow</option>
      <option value="Following">Following</option>
    </Select>
  );
}
