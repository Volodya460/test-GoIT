import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// import { fetchUsers } from "./redux/operation";
import UserCard from "../components/userCard";
import { UserLi } from "../components/userCard.styled";
import { UserUl } from "../App,styled";
import { buttunMore, getFierstLoading, getUserInf } from "../redux/userSlice";
import { fetchUsers } from "../redux/operation";

export default function PageUser() {
  const [page, setPage] = useState(1);
  const state = useSelector(getUserInf);
  const location = useLocation();
  const navigate = useNavigate();
  const firstLoading = useSelector(getFierstLoading);
  console.log(firstLoading);
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
      <button
        type="button"
        onClick={() => {
          navigate(location?.state?.from ?? "/");
        }}
      >
        Go back
      </button>
      <UserUl>
        {state?.map((el) => {
          return (
            <UserLi key={el.id}>
              <UserCard user={el} />
            </UserLi>
          );
        })}
      </UserUl>

      <button type="button" onClick={() => loadMore()}>
        Load More
      </button>
    </>
  );
}
