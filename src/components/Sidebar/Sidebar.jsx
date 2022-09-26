import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <NavLink to='/profile' className={({ isActive }) => (isActive && styles.active_tab)}>Profile</NavLink>
      <NavLink to='/messages' className={({ isActive }) => (isActive && styles.active_tab)}>Messages</NavLink>
      <NavLink to='/users' className={({ isActive }) => (isActive && styles.active_tab)}>Users</NavLink>
      {/* <Link>News</Link>
      <Link>Music</Link>
      <Link>Settings</Link> */}
    </div>
  )
}

export default Sidebar;