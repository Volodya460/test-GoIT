import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import UserCard from "../components/userCard";

import {
  buttunMore,
  getFierstLoading,
  getUserInf,
  getshowButton,
} from "../redux/userSlice";
import { fetchUsers } from "../redux/operation";
import { ButtonBack, ButtonLoadMore, UserLi, UserUl } from "./pageUser.styled";

export default function PageUser() {
  const [page, setPage] = useState(1);
  const state = useSelector(getUserInf);
  const buttonShow = useSelector(getshowButton);

  const location = useLocation();
  const navigate = useNavigate();
  const firstLoading = useSelector(getFierstLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (firstLoading) return;

    dispatch(fetchUsers(page));
  }, [dispatch, page, firstLoading]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
    dispatch(buttunMore());
  };

  return (
    <>
      <ButtonBack
        type="button"
        onClick={() => {
          navigate(location?.state?.from ?? "/");
        }}
      >
        Go back
      </ButtonBack>
      <UserUl>
        {state?.map((el) => {
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
  );
}
