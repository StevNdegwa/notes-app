import { useCallback, useState } from "react";
import { AppLayout } from "../../common";
import { SectionsLayout } from "./SectionsLayout";
import { AppSettingsMenu } from "./AppSettingsMenu";
import { UserProfile } from "./UserProfile";
import { DataBackup } from "./DataBackup";
import { DataImport } from "./DataImport";
import { ManageWorkSpaces } from "./ManageWorkSpaces";
import { AppSettingsEB } from "./AppSettingsEB";

export enum AppSettingsSections {
  MENU,
  USER_PROFILE,
  BACKUP_DATA,
  IMPORT_DATA,
  MANAGE_WORKSPACES,
}

export const AppSettings = () => {
  const [pageShowing, setPageShowing] = useState<AppSettingsSections>(
    AppSettingsSections.MENU
  );

  const openMenu = useCallback(
    () => setPageShowing(AppSettingsSections.MENU),
    [setPageShowing]
  );

  const renderPageContent = useCallback(
    (layer: AppSettingsSections) => {
      switch (layer) {
        case AppSettingsSections.MENU:
          return <AppSettingsMenu moveTo={setPageShowing} />;
        case AppSettingsSections.USER_PROFILE:
          return (
            <SectionsLayout backToMenu={openMenu}>
              <UserProfile />
            </SectionsLayout>
          );
        case AppSettingsSections.BACKUP_DATA:
          return (
            <SectionsLayout backToMenu={openMenu}>
              <DataBackup />
            </SectionsLayout>
          );
        case AppSettingsSections.IMPORT_DATA:
          return (
            <SectionsLayout backToMenu={openMenu}>
              <DataImport />
            </SectionsLayout>
          );
        case AppSettingsSections.MANAGE_WORKSPACES:
          return (
            <SectionsLayout backToMenu={openMenu}>
              <ManageWorkSpaces />
            </SectionsLayout>
          );
        default:
          return <AppSettingsMenu moveTo={setPageShowing} />;
      }
    },
    [openMenu]
  );

  return (
    <AppSettingsEB>
      <AppLayout>{renderPageContent(pageShowing)}</AppLayout>
    </AppSettingsEB>
  );
};
