import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 18px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid blue;
  > nav {
    display: flex;
  }
`;

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 1280px;
`;

const StyledLink = styled(NavLink)`
  padding: 10px 15px;
  border-radius: 20px;
  text-decoration: none;
  color: black;
  font-family: Bradley Hand, cursive;
  font-weight: 300;
  &.hover {
    color: white;
    background-color: blue;
  }
  &.active {
    color: white;
    background-color: blue;
  }
`;

export default StyledLink;
