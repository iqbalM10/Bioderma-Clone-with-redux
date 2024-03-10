
import React from 'react'
import styles from "../DiscountProducts/DiscountProducts.module.css"
import Link from 'next/link'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useContext } from 'react';
import { ProductsCards } from '@/Context/CardContext';
import CardsProduct from '../Cards/CardsProduct';
import { getData } from '@/app/lib/post';

async function DiscountProducts() {
    const post = await getData()
 
     return (
    <section className={styles.DiscountProduct}>
        <div className={styles.titleProducts}>
            <div className={styles.mainTitle}>
                <p className={styles.title}>
                Endirimli məhsullar
                </p>
            </div>
            <div className={styles.moreButton}>
                <Link href="/">Hamısına bax</Link>
            </div>
        </div>
     
<div className={styles.productCards}>
{post.map(item =>(
        <CardsProduct item={item} key={item.id}/>
))}
          </div>
    </section>
  )
}


export default DiscountProducts