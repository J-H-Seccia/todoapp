import React from 'react';
import Error from 'next/error';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    if (error.message.includes('Extra attributes from the server: cz-shortcut-listen')) {
      console.log('Ignoring cz-shortcut-listen warning');
      this.setState({ hasError: false });
    }
  }

  render() {
    if (this.state.hasError) {
      return <Error statusCode={500} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;