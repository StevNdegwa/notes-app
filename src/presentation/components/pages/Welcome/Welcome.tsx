import { useState, useContext, FC } from "react";
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

export interface WelcomeProps {
  toLogin?: boolean;
}

export const Welcome: FC<WelcomeProps> = ({ toLogin }) => {
  const [loginOpen, setLoginOpen] = useState<boolean>(!!toLogin);
  let application = useContext(AppContext);

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
        <WelcomeX userName={application.appData.userProfile.name} />
      </WelcomeMainSection>
    </WelcomeWrapper>
  );
};
