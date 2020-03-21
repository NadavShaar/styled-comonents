import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    static getDerivedStateFromError(error) {
        console.log('getDerivedStateFromError')
        return { error };
    }

    componentDidCatch(error, info) {
        console.log('componentDidCatch')
    }

    render() {
        const { error } = this.state;

        if (error) return <div><h1>Something went wrong.</h1></div>;
        return this.props.children; 
    }
};

export default ErrorBoundary;