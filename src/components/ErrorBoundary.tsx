import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
    children?: ReactNode
}

interface State {
    hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    }

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true }
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo)
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="flex h-screen w-full items-center justify-center bg-bg text-txt p-4 text-center">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-primary">SYSTEM FAILURE</h2>
                        <p className="text-muted text-sm font-mono">CRITICAL ERROR DETECTED IN RENDER LOOP.</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-bg transition-colors font-mono text-xs uppercase tracking-widest"
                        >
                            REBOOT SYSTEM
                        </button>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}
