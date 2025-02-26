import React from 'react'
import UserIcon from '@/Icons/UserIcon'
import styles from '@/styles/navbar.module.scss';
import { motion } from 'framer-motion';
import MenuIcon from '../Icons/MenuIcon';

const Navbar = () => {
  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}

        id='navbar' className={`${styles.nav} fixed top-0 left-0 right-0 bg-transparent text-white p-4 z-50`}>
        <div className="container  mx-auto px-4">

          <div className={styles.nav_container}>
            <div className={styles.icon_container}>
              <UserIcon />
            </div>
            <div className={styles.logo_container}>
              <img
                className="h-[80px] w-[123px] relative object-contain z-[2]"
                loading="lazy"
                alt=""
                src="/imgs/logo1@2x.png"
              />

            </div>
            <div className={styles.menu_container}>
              <MenuIcon />
            </div>
          </div>
        </div>

      </motion.nav >

    </>
  )
}

export default Navbar