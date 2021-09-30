import { useState, useContext, useCallback, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { FaRegMoon, FaSun } from "react-icons/fa";
import { Redirect } from "react-router-dom";
import { useTheme } from "styled-components";
import { ThemeMode, ThemeType } from "../../../../ui/theme";
import {
  HomeWrapper,
  HomeAside,
  HomeMain,
  HomeTop,
  HomeMiddle,
  HomeBottom,
  ThemeToggle,
} from "./styles";
import { useModal, ConfirmationModal, CircularReveal } from "../../common";
import {
  currentWorkSpaceAtom,
  useNotes,
  notesAtom,
} from "../../../../application";
import AppContext from "../../../../AppContext";
import { Sidebar } from "./Sidebar";
import { Main } from "./Main";

import { loadVariant } from "./framer";

const Home = () => {
  const currentWorkSpace = useRecoilValue(currentWorkSpaceAtom);
  const [logout, setLogout] = useState<boolean>(false);
  const { openModal, isOpen, closeModal } = useModal();
  const appContext = useContext(AppContext);
  const theme = useTheme();
  const setNotes = useSetRecoilState(notesAtom);
  const notes = useNotes();

  const handleThemeToggleClick = useCallback(
    () => appContext.toggleLightDark?.(),
    [appContext]
  );

  const confirmLogout = useCallback(() => {
    closeModal();
    setLogout(true);
  }, [closeModal]);

  useEffect(() => {
    async function setNotesFn() {
      if (currentWorkSpace?.wsRef) {
        let n = await notes?.getWorkspaceNotes(currentWorkSpace.wsRef);
        setNotes(n || []);
      }
    }

    setNotesFn();
  }, [currentWorkSpace, notes, setNotes]);

  if (!currentWorkSpace || logout) {
    return <Redirect to="/?login=true" />;
  }

  return (
    <HomeWrapper variants={loadVariant.wrapper} animate="">
      <CircularReveal bg={(theme as ThemeType).body.backgroundColor} />
      <ConfirmationModal
        title="Confirm Exit"
        mainText="You're about to leave the application"
        isOpen={isOpen}
        cancelAction={closeModal}
        confirmAction={confirmLogout}
      />
      <HomeAside>
        <Sidebar openConfirmExitModal={openModal} />
      </HomeAside>
      <HomeMain>
        <HomeTop>
          <div>{currentWorkSpace?.name}</div>
          <div>
            <ThemeToggle transparent onClick={handleThemeToggleClick}>
              {appContext.themeMode === ThemeMode.LIGHT ? (
                <span className="dark">
                  <FaRegMoon />
                </span>
              ) : (
                <span className="light">
                  <FaSun />
                </span>
              )}
            </ThemeToggle>
          </div>
        </HomeTop>
        <HomeMiddle>
          <Main />
        </HomeMiddle>
        <HomeBottom></HomeBottom>
      </HomeMain>
    </HomeWrapper>
  );
};

export default Home;