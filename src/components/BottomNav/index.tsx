import * as React from 'react'
import * as styles from './index.module.css'
import { sidePadding } from '../shared.module.css'

import classNames from 'classnames'



const BottomNav: React.FC = ({ children }) =>
  <nav className={classNames(styles.endNav, sidePadding)}>
    {children}
  </nav>

export default BottomNav
