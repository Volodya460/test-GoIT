import styled from "@emotion/styled";
import { ReactComponent as Logo } from "../assets/Logo.svg";

export const UserFons = styled.img`
  width: 308px;
  height: 168px;
  margin-top: 28px;
`;

export const UserRectangle = styled.img`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const CardLogo = styled(Logo)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const ImgBox = styled.div`
  position: absolute;
  z-index: 2;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 62px;
  height: 62px;
  border: 8px solid #ebd8ff;
  border-radius: 50%;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 62px;
    height: 62px;
    border-radius: 50%;
  }
`;

export const BottomBox = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: 8px solid #ebd8ff;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  width: 100%;
  height: 238px;
  border-radius: 0% 0% 6% 6%;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    text-transform: uppercase;
    margin: 0;
    color: #ebd8ff;

    margin-top: 26px;
  }
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14px 28px;
    gap: 6px;
    width: 169px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;
    margin-top: 26px;
    border: none;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.2;
    text-transform: uppercase;
    color: #373737;
    cursor: pointer;
    :hover,
    focus {
      scale: 1.1;
      opacity: 1.2;
    }
  }
`;

export const TopBox = styled.div`
  width: 100%;
  height: 214px;
  padding-left: 50px;
`;
