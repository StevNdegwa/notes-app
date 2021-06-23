import { useRecoilValue } from "recoil";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  HomeWrapper,
  HomeAside,
  HomeMain,
  HomeTop,
  HomeMiddle,
  HomeBottom,
} from "./styles";
import { useModal, ConfirmationModal } from "../../common";
import { currentWorkSpaceAtom } from "../../../../application";
import { Sidebar } from "./Sidebar";

export const Home = () => {
  const currentWorkSpace = useRecoilValue(currentWorkSpaceAtom);
  const [logout, setLogout] = useState<boolean>(false);
  const { openModal, isOpen, closeModal } = useModal();

  if (!currentWorkSpace || logout) {
    return <Redirect to="/" />;
  }

  return (
    <HomeWrapper>
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
        <HomeTop>{currentWorkSpace?.name}</HomeTop>
        <HomeMiddle></HomeMiddle>
        <HomeBottom></HomeBottom>
      </HomeMain>
    </HomeWrapper>
  );
};
