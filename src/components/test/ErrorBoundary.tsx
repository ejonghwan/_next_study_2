"use client"

import React from 'react'


// ErrorBoudnery 내부는 how. 선언할 땐 what 
class ErrorBoundary extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = { hasError: false }

        console.log('props?', props.children)
    }

    // hasError의 상태를 변경해줌
    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    render() {
        if(this.state.hasError) {
            return <h1>something went wrong.</h1>
        }
        return this.props.children
    }
}


export default ErrorBoundary

