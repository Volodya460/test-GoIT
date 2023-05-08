import styled from "@emotion/styled";

export const UserLi = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 380px;
  height: 460px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const UserUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 15px;
`;

export const ButtonLoadMore = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  width: 169px;
  margin-left: auto;
  margin-right: auto;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  margin-top: 26px;
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  color: #373737;
  cursor: pointer;
  :hover,
  focus {
    scale: 1.1;
    opacity: 1.2;
  }
`;

export const ButtonBack = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 5px;
  gap: 6px;
  width: 100px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  color: #373737;
  cursor: pointer;
  :hover,
  focus {
    scale: 1.1;
    opacity: 1.2;
`;
export const Loading = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  color: #373737;
`;

export const BoxDrop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
