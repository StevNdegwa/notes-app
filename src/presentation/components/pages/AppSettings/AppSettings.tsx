import { useState } from "react";
import { AppLayout } from "../../common";
import { SectionsLayout } from "./SectionsLayout";
import { AppSettingsMenu } from "./AppSettingsMenu";
import { UserProfile } from "./UserProfile";

export enum AppSettingsSections {
  MENU,
  USER_PROFILE,
}

export const AppSettings = () => {
  const [layerShowing, setLayerShowing] = useState<AppSettingsSections>(
    AppSettingsSections.MENU
  );

  const renderPageContent = (layer: AppSettingsSections) => {
    switch (layer) {
      case AppSettingsSections.MENU:
        return <AppSettingsMenu moveTo={setLayerShowing} />;
      case AppSettingsSections.USER_PROFILE:
        return (
          <SectionsLayout backToMenu={()=>setLayerShowing(AppSettingsSections.MENU)}>
            <UserProfile/>
          </SectionsLayout>
        );
      default:
        return null;
    }
  };

  return <AppLayout>{renderPageContent(layerShowing)}</AppLayout>;
};
