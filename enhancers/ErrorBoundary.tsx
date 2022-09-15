import type { ErrorInfo, ReactNode } from 'react'
import React, { Component } from 'react'

interface ErrorBoundaryProps {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  public state: State = {
    hasError: false,
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('Caught in Error Boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Sorry, something went wrong.</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
