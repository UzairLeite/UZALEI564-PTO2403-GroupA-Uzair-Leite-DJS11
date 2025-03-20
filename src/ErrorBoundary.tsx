import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('Error caught by ErrorBoundary:', error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please check the console for details.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
