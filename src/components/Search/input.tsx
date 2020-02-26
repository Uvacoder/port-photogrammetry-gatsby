import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import styles from "./index.module.css"

export default connectSearchBox(({ refine }) => (
  <form className={styles.form}>
    <input className={styles.input}
      type="text"
      placeholder="Search"
      aria-label="Search"
      onChange={e => refine(e.target.value)}
    />
    <div className={styles.searchIcon}></div>
  </form>
))
