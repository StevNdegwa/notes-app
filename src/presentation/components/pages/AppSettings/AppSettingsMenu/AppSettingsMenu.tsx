import { FC, useCallback } from "react";
import { FaChevronRight } from "react-icons/fa";
import { List, Button } from "../../../common";
import { AppSettingsSections } from "../AppSettings";
import { MenuWrapper, MenuItem } from "./styles";

export interface AppSettingsMenuProps {
  moveTo: (layer: AppSettingsSections) => void;
}

export const AppSettingsMenu: FC<AppSettingsMenuProps> = ({ moveTo }) => {
  const moveToUserProfil = useCallback(
    () => moveTo(AppSettingsSections.USER_PROFILE),
    [moveTo]
  );

  return (
    <MenuWrapper>
      <List
        items={[
          <MenuItem onClick={moveToUserProfil}>
            <div>User Profile</div>
            <Button transparent>
              <FaChevronRight />
            </Button>
          </MenuItem>,
        ]}
      />
    </MenuWrapper>
  );
};
