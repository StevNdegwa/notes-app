import { useRecoilValue } from "recoil";
import { useState, useContext } from "react";
import { FaRegMoon, FaSun } from "react-icons/fa";
import { Redirect } from "react-router-dom";
import { ThemeMode } from "../../../../ui/theme";
import {
  HomeWrapper,
  HomeAside,
  HomeMain,
  HomeTop,
  HomeMiddle,
  HomeBottom,
  ThemeToggle,
} from "./styles";
import { useModal, ConfirmationModal } from "../../common";
import { currentWorkSpaceAtom } from "../../../../application";
import AppContext from "../../../../AppContext";
import { Sidebar } from "./Sidebar";

import { loadVariant } from "./framer";

export const Home = () => {
  const currentWorkSpace = useRecoilValue(currentWorkSpaceAtom);
  const [logout, setLogout] = useState<boolean>(false);
  const { openModal, isOpen, closeModal } = useModal();
  const appContext = useContext(AppContext);

  if (!currentWorkSpace || logout) {
    return <Redirect to="/?login=true" />;
  }

  return (
    <HomeWrapper variants={loadVariant.wrapper} animate="">
      <ConfirmationModal
        title="Confirm Exit"
        mainText="You're about to leave the application"
        isOpen={isOpen}
        cancelAction={closeModal}
        confirmAction={() => {
          closeModal();
          setLogout(true);
        }}
      />
      <HomeAside>
        <Sidebar openConfirmExitModal={openModal} />
      </HomeAside>
      <HomeMain>
        <HomeTop>
          <div>{currentWorkSpace?.name}</div>
          <div>
            <ThemeToggle
              transparent
              onClick={() => appContext.toggleLightDark?.()}
            >
              {appContext.themeMode === ThemeMode.LIGHT ? (
                <span className="light">
                  <FaSun />
                </span>
              ) : (
                <span className="dark">
                  <FaRegMoon />
                </span>
              )}
            </ThemeToggle>
          </div>
        </HomeTop>
        <HomeMiddle></HomeMiddle>
        <HomeBottom></HomeBottom>
      </HomeMain>
    </HomeWrapper>
  );
};
