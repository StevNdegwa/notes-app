import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme, { GlobalStyle } from "./theme";
import { Welcome, CreateWorkspace } from "./presentation/components/pages";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/create-workspace" component={CreateWorkspace} />
          <Route path="/" component={Welcome} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
