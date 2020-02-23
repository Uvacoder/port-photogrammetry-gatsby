import * as React from 'react'
import classNames from 'classnames'

import styles from './BottomNav.module.css'
import globalStyles from '../shared.module.css'

const BottomNav: React.FC = ({ children }) =>
  <nav className={classNames(styles.endNav, globalStyles.sidePadding)}>
    {children}
  </nav>

export default BottomNav
