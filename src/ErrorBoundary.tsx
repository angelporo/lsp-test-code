import { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error) {
    // 更新 state，下次渲染可以展示错误相关的 UI
    return { error: error };
  }

  componentDidCatch(error, info) {
    // 错误上报
    // logErrorToMyService(error, info);
  }

  render() {
    if (this.state.error) {
      // 渲染出错时的 UI
      return <p>Something broke</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
