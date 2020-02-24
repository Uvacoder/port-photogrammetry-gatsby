import * as React from 'react'
import styles from './index.module.css'


const Dropdown: React.FC = ({ children }) =>
  <div className={styles.dropdown} >
    <button className={styles.dropbtn}>Dropdown</button>
    <div className={styles.dropdownContent} >
      {children}
    </div>
  </div>

export default Dropdown
