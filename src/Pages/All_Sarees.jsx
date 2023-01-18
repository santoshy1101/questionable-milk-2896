import React from 'react'
import SareeList from '../Components/Saree/SareeList'
import SidebarSaree from '../Components/Saree/SidebarSaree'
import styles from "../Components/Saree/Styles/AllSarees.module.css"

const All_Sarees = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sideBar}><SidebarSaree/></div>
      <div className={styles.sareeList}><SareeList/></div>
    </div>
  )
}

export default All_Sarees