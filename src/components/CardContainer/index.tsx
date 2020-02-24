import * as React from 'react'
import styles from './index.module.css'

const CardContainer: React.FC = ({ children }) =>
  <div className={styles.cardContainer}>
    {children}
  </div>

export default CardContainer
