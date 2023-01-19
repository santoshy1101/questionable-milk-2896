import React from 'react'
import TopWearList from '../Components/TopWear/TopWearList'
import SidebarTopWear from '../Components/TopWear/SidebarTopWear'
import styles from "../Components/TopWear/Styles/TopWear.module.css"

const All_Top_Wear = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sideBar}><SidebarTopWear/></div>
      <div className={styles.topWearList}><TopWearList/></div>
    </div>
  )
}

export default All_Top_Wear;