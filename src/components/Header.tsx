import * as React from 'react'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <header className="list-header">
    <p className="list-header-subtext">Coding and photography</p>
    <h1 className="list-header-title">Photogrammer</h1>
  </header>
)

export default Header
