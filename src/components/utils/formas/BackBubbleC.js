import { ReactComponent as HomeLogo } from "../../../img/home-carreras.svg";
import { WavyLink } from "react-wavy-transitions";

export default function BackBubbleC({ color, waveColor }) {
  return (
    <div className={`blob${" " + color}`} id="blob-carreras">
      <WavyLink to="/" color={waveColor} >
        <HomeLogo />
      </WavyLink>
    </div>
  );
}
