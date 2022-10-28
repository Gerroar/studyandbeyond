import { ReactComponent as HomeLogo } from "../../../img/home.svg";
import { WavyLink } from "react-wavy-transitions";

export default function BackBubble({ color, waveColor }) {
  return (
    <div className={`blob${" " + color}`}>
      <WavyLink to="/" color={waveColor} >
        <HomeLogo />
      </WavyLink>
    </div>
  );
}
