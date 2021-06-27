import { useEffect, useState, useCallback } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";
import { light, ThemeMode } from "./ui/theme";
import useTheme from "./utils/useTheme";
import { Application, IAppData, defaultAppData } from "./application";
import { GlobalStyle } from "./ui/styles/GlobalStyles";
import {
  Welcome,
  CreateWorkspace,
  AppSettings,
  Home,
} from "./presentation/components/pages";

import AppContext from "./AppContext";

export default function App() {
  const { theme, setNewTheme, themeMode, toggleLightDark } = useTheme(light, ThemeMode.LIGHT);

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
        toggleLightDark
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RecoilRoot>
          <Router>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/application-settings" component={AppSettings} />
              <Route path="/create-workspace" component={CreateWorkspace} />
              <Route
                path="/"
                render={({ location: { search } }) => {
                  return (
                    <Welcome
                      toLogin={
                        new URLSearchParams(search).get("login") === "true"
                      }
                    />
                  );
                }}
              />
            </Switch>
          </Router>
        </RecoilRoot>
      </ThemeProvider>
    </AppContext.Provider>
  );
}
