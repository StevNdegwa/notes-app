import { useState, useContext, FC } from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import AppContext from "../../../../AppContext";
import {
  WelcomeAside,
  WelcomeMainSection,
  WelcomeWrapper,
  MoveToLogin,
} from "./styles";
import { WelcomeAds } from "./WelcomeAds";
import { WelcomeX } from "./WelcomeX";

export const Welcome: FC = () => {
  const { search } = useLocation();
  const [loginOpen, setLoginOpen] = useState<boolean>(
    new URLSearchParams(search).get("login") === "true"
  );
  let application = useContext(AppContext);

  return (
    <WelcomeWrapper loginOpen={loginOpen} data-testid="landing-page-wrapper">
      <WelcomeAside data-testid="landing-page-ads-section">
        <WelcomeAds />
        <MoveToLogin
          onClick={() => setLoginOpen(true)}
          data-testid="move-to-login-btn"
        >
          <FaChevronCircleRight />
          <div role="note">Skip to login</div>
        </MoveToLogin>
      </WelcomeAside>
      <WelcomeMainSection data-testid="landing-page-controls-section">
        <WelcomeX userName={application.appData.userProfile.name} />
      </WelcomeMainSection>
    </WelcomeWrapper>
  );
};
