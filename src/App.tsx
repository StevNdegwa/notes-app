import { useEffect, useState, useCallback, Suspense, lazy } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";
import { light, ThemeMode } from "./ui/theme";
import useTheme from "./utils/useTheme";
import {
  Application,
  IAppData,
  defaultAppData,
  NotesProvider,
} from "./application";
import { GlobalStyle } from "./ui/styles/GlobalStyles";
import {
  Welcome,
  CreateWorkspace,
  AppSettings,
} from "./presentation/components/pages";
import { Notifications, PageLoader } from "./presentation/components/common";

import AppContext from "./AppContext";

const Home = lazy(() => import("./presentation/components/pages/Home"));

export default function App() {
  const { theme, setNewTheme, themeMode, toggleLightDark } = useTheme(
    light,
    ThemeMode.LIGHT
  );

  const [applicationData, setApplicationData] =
    useState<IAppData>(defaultAppData);

  const loadApp = useCallback(async () => {
    let appData = await new Application().load();
    if (appData) {
      setApplicationData(appData);
    }
  }, []);

  useEffect(() => {
    loadApp();
  }, [loadApp]);

  return (
    <AppContext.Provider
      value={{
        appData: applicationData,
        loadApp,
        setNewTheme,
        themeMode,
        toggleLightDark,
      }}
    >
      <NotesProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RecoilRoot>
            <Notifications />
            <Router>
              <Switch>
                <Route path="/home">
                  <Suspense fallback={<PageLoader />}>
                    <Home />
                  </Suspense>
                </Route>
                <Route path="/application-settings">
                  <Suspense fallback={<PageLoader />}>
                    <AppSettings />
                  </Suspense>
                </Route>
                <Route path="/create-workspace">
                  <Suspense fallback={<PageLoader />}>
                    <CreateWorkspace />
                  </Suspense>
                </Route>
                <Route path="/" component={Welcome} />
              </Switch>
            </Router>
          </RecoilRoot>
        </ThemeProvider>
      </NotesProvider>
    </AppContext.Provider>
  );
}
