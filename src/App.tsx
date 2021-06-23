import { useEffect, useState, useCallback } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";
import theme from "./theme";
import { Application, IAppData, defaultAppData } from "./application";
import { GlobalStyle } from "./theme/GlobalStyle";
import {
  Welcome,
  CreateWorkspace,
  AppSettings,
  Home,
} from "./presentation/components/pages";

import AppContext from "./AppContext";

export default function App() {
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
              <Route path="/" component={Welcome} />
            </Switch>
          </Router>
        </RecoilRoot>
      </ThemeProvider>
    </AppContext.Provider>
  );
}
