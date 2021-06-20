import { FC } from "react";
import { FaChevronRight } from "react-icons/fa";
import { List, Button } from "../../../common";
import { AppSettingsSections } from "../AppSettings";
import { MenuWrapper, MenuItem } from "./styles";

export interface AppSettingsMenuProps {
  moveTo: (layer: AppSettingsSections) => void;
}

export const AppSettingsMenu: FC<AppSettingsMenuProps> = ({ moveTo }) => {
  return (
    <MenuWrapper>
      <List
        items={[
          <MenuItem onClick={() => moveTo(AppSettingsSections.USER_PROFILE)}>
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
