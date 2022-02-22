import { FC, useCallback } from "react";
import { List } from "../../../common";
import { AppSettingsSections } from "../AppSettings";
import { MenuItem } from "./MenuItem";
import { MenuWrapper } from "./styles";

export interface AppSettingsMenuProps {
  moveTo: (layer: AppSettingsSections) => void;
}

export const AppSettingsMenu: FC<AppSettingsMenuProps> = ({ moveTo }) => {
  const moveToUserProfil = useCallback(
    () => moveTo(AppSettingsSections.USER_PROFILE),
    [moveTo]
  );

  const moveToBackup = useCallback(
    () => moveTo(AppSettingsSections.BACKUP_DATA),
    [moveTo]
  );

  const moveToImport = useCallback(
    () => moveTo(AppSettingsSections.IMPORT_DATA),
    [moveTo]
  );

  return (
    <MenuWrapper>
      <List
        items={[
          <MenuItem label="User profile" onClick={moveToUserProfil} />,
          <MenuItem label="Backup application data" onClick={moveToBackup} />,
          <MenuItem label="Import application data" onClick={moveToImport} />,
        ]}
      />
    </MenuWrapper>
  );
};
