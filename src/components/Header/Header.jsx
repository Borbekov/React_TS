import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Wink_Logo.png" alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Header;