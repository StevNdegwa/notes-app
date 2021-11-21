import { useState, useCallback, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Redirect } from "react-router-dom";
import { useTheme } from "styled-components";
import { useModal, ConfirmationModal, CircularReveal } from "../../common";
import {
  currentWorkSpaceAtom,
  useNotes,
  notesAtom,
} from "../../../../application";
import { ThemeType } from "../../../../ui/theme";
import { Sidebar } from "./Sidebar";
import { Main } from "./Main";
import { ToolsBar } from "./ToolsBar";

import { loadVariant } from "./framer";

import {
  HomeWrapper,
  HomeAside,
  HomeMain,
  HomeTop,
  HomeMiddle,
  HomeBottom,
} from "./styles";

const Home = () => {
  const currentWorkSpace = useRecoilValue(currentWorkSpaceAtom);
  const [logout, setLogout] = useState<boolean>(false);
  const { openModal, isOpen, closeModal } = useModal();
  const theme = useTheme();
  const setNotes = useSetRecoilState(notesAtom);
  const notes = useNotes();

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
        </HomeTop>
        <HomeMiddle>
          <Main />
        </HomeMiddle>
        <HomeBottom></HomeBottom>
      </HomeMain>
      <ToolsBar />
    </HomeWrapper>
  );
};

export default Home;
