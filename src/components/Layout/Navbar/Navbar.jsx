"use client"
import React from 'react'
import styles from "../Navbar/navbar.module.css"
import Link from 'next/link'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCartTotal } from '@/redux/cartSlice';
import HamMenu from '@/components/HamMenu/HamMenu';


function Navbar() {

  const dispatch = useDispatch()

  const { carts } = useSelector(state => state.carts)
  console.log(carts);


  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])

  return (
    <header className={styles.header}>
      <section className={styles.navArea}>
        <div className={styles.logoArea}>
          <Link href="/"><img src="https://naosshop.az/images/logo.svg" alt="" /></Link>
        </div>
        <div className={styles.listArea}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <img className={styles.img} src="https://naosshop.az/storage/117/logo-1.svg" alt="" /></li>
            <li className={styles.li}>
              <img className={styles.img} src="https://naosshop.az/storage/187/logo-esthederm.png" alt="" /></li>
            <li className={styles.li}>
              <img className={styles.img} src="https://naosshop.az/storage/199/etat-pur-299-148.png" alt="" /></li>
          </ul>
        </div>
        <div className={styles.searchArea}>
          <form className={styles.form} action="">
            <input type="search" className={styles.input} id="" placeholder='Axtar' />
            <span className={styles.icon}><SearchIcon /></span>
          </form>
        </div>
        <div className={styles.mainIconArea}>
          <span className={styles.MainIcons}><FavoriteBorderIcon /></span>
          <div className={styles.shoppingNumber}>
            <Link href="/basket" className={styles.MainIconsShop}><ShoppingBagOutlinedIcon /></Link>
            <span className={styles.orderNumber}>{carts?.length}</span>
          </div>
        </div>
        <div className={styles.languageArea}>
          <Link href="/">AZ</Link>
          <Link href="/">ENG</Link>
        </div>
        <HamMenu />
      </section>
    </header>
  )
}

export default Navbar