import * as React from 'react'
import styles from './BottomNav.module.css'
import classNames from 'classnames'

const BottomNav: React.FC = ({ children }) =>
  <nav className={classNames(styles.endNav, 'side-padding')}>
    {children}
  </nav>

export default BottomNav
