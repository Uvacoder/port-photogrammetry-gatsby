import * as React from 'react'
import styles from './ListHeader.module.css'

interface HeaderProps {
  title: string
}

const ListHeader: React.FC<HeaderProps> = ({ title }) => (
  <header className={styles.listHeader}>
    <p className={styles.listHeaderSubtext}>Coding and photography</p>
    <h1 className={styles.listHeaderTitle}>Photogrammer</h1>
  </header>
)

export default ListHeader
