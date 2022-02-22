import { Component } from "react";
import { Redirect } from "react-router-dom";

export class AppSettingsEB extends Component<{}, { error: any }> {
  constructor(props: {}) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: any) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return <Redirect to="/application-settings" />;
    }

    return this.props.children;
  }
}
