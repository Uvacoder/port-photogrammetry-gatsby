import * as React from 'react'

interface PageProps {
  className?: string
}

const Main: React.FC<PageProps> = ({ children, className }) => <main className={className}>{children}</main>

export default Main
