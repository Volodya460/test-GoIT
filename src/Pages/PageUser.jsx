import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserCard from "../components/userCard";

import {
  buttunMore,
  changeUserFollower,
  getError,
  getFierstLoading,
  getFilterValue,
  getIsLoading,
  getUsersFollower,
  getUserInf,
  getshowButton,
} from "../redux/userSlice";
import { fetchUsers } from "../redux/operation";
import {
  BoxDrop,
  ButtonBack,
  ButtonLoadMore,
  Loading,
  UserLi,
  UserUl,
} from "./pageUser.styled";
import DropnDown from "../components/DropDown";

export default function PageUser() {
  const [page, setPage] = useState(1);
  const state = useSelector(getUserInf);
  const buttonShow = useSelector(getshowButton);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filterValue = useSelector(getFilterValue);
  const usersFollower = useSelector(getUsersFollower);

  const location = useLocation();
  const navigate = useNavigate();
  const firstLoading = useSelector(getFierstLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (firstLoading) return;
    dispatch(fetchUsers(page));
  }, [dispatch, page, firstLoading]);

  useEffect(() => {
    let idArray = localStorage.getItem("ID-SAVE-USERFOLLOWERS");
    let idArrayPars = JSON.parse(idArray) || [];
    dispatch(changeUserFollower(idArrayPars));
  }, [dispatch, filterValue]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
    dispatch(buttunMore());
  };

  const findFollowerArray = () => {
    const array = [...usersFollower, ...state];

    const newArray = [];

    for (let i = 0; i < array.length; i++) {
      let isUnique = true;
      for (let j = 0; j < array.length; j++) {
        if (i !== j && array[i].id === array[j].id) {
          isUnique = false;
          break;
        }
      }
      if (isUnique) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  };
  const filterState = () => {
    let usersFollowering = findFollowerArray();
    if (filterValue === "Following") return usersFollower;
    if (filterValue === "All") return state;
    if (filterValue === "Follow") return usersFollowering;
    return state;
  };

  return (
    <>
      {isLoading || error ? (
        <Loading>LOADING....</Loading>
      ) : (
        <>
          <BoxDrop>
            <ButtonBack
              type="button"
              onClick={() => {
                navigate(location?.state?.from ?? "/");
              }}
            >
              Go back
            </ButtonBack>
            <DropnDown />
          </BoxDrop>

          <UserUl>
            {filterState()?.map((el) => {
              return (
                <UserLi key={el.id}>
                  <UserCard user={el} />
                </UserLi>
              );
            })}
          </UserUl>
          {!buttonShow && (
            <ButtonLoadMore type="button" onClick={() => loadMore()}>
              Load More
            </ButtonLoadMore>
          )}
        </>
      )}
    </>
  );
}
