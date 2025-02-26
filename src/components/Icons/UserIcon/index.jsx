import React from 'react'
import styles from './index.module.scss'
const UserIcon = () => {
  return (
    <div className="flex flex-col items-start justify-start  px-0 pb-0">
      <div className={`rounded-[24.14px] bg-color-blue flex flex-row items-center justify-center py-[14.5px] px-[15px] z-[2] ${styles.icon_container}`}>
        <img
          className="h-boundvariablesdata w-[26px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/imgs/system1.svg"
        />
      </div>
    </div >)
}

export default UserIcon