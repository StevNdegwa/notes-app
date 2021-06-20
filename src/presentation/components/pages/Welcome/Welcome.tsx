import { useState, useContext } from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import AppContext from "../../../../AppContext";
import {
  WelcomeAside,
  WelcomeMainSection,
  WelcomeWrapper,
  MoveToLogin,
} from "./styles";
import { WelcomeAds } from "./WelcomeAds";
import { WelcomeX } from "./WelcomeX";

export const Welcome = () => {
  const [loginOpen, setLoginOpen] = useState<boolean>(false);
  let appData = useContext(AppContext);

  return (
    <WelcomeWrapper loginOpen={loginOpen}>
      <WelcomeAside>
        <WelcomeAds />
        <MoveToLogin onClick={() => setLoginOpen(true)}>
          <FaChevronCircleRight />
          <div role="note">Skip to login</div>
        </MoveToLogin>
      </WelcomeAside>
      <WelcomeMainSection>
        <WelcomeX userName={appData.userProfile.name} />
      </WelcomeMainSection>
    </WelcomeWrapper>
  );
};
