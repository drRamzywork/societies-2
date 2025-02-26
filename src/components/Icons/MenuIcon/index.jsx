import React from 'react'
import styles from './index.module.scss'
const MenuIcon = () => {
  return (
    <div className="flex flex-col items-start justify-start  px-0 pb-0">
      <div className={`rounded-[24.14px] bg-color-green flex flex-row items-center justify-center py-[14.5px] px-[15px] z-[2] ${styles.icon_container}`}>


        <img
          className="h-[23px] w-[25px] relative"
          loading="lazy"
          alt=""
          src="/imgs/vector1.svg"
        />
      </div>
    </div>
  )
}

export default MenuIcon