import { DivHome, Earth, H1Home } from "./pageHome.styled";
import earth from "../assets/Earth.gif";

export default function PageHome() {
  return (
    <DivHome>
      <H1Home>Welcome!</H1Home>

      <Earth src={earth} alt="loading..." />
    </DivHome>
  );
}
