import * as React from 'react'
import styles from './index.module.css'
import sharedStyles from '../shared.module.css'

import classNames from 'classnames'



const BottomNav: React.FC = ({ children }) =>
  <nav className={classNames(styles.endNav, sharedStyles.sidePadding)}>
    {children}
  </nav>

export default BottomNav
