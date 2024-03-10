import React from 'react'
import styles from "../DiscountProducts/DiscountProducts.module.css"
import Link from 'next/link'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

function CardsProduct({ item }) {
    return (

        <div className={styles.cardArea}>
            <div className={styles.cardImg}>
                <div className={styles.discountArea}>
                    <span className={styles.discountInfo}>Cox Satilan</span>
                    <span className={styles.discountDelivery}>Pulsuz catdirilma</span>
                </div>
                <img className={styles.cardImage} src={item.img} alt="" />

            </div>
            <h3 className={styles.brendName}>
                Bioderma
            </h3>
            <p className={styles.desc}>{item.desc}</p>
            <span className={styles.price}>{item.price} AZN</span>
            <Link href="/brends&products">
                <div className={styles.addToCard}>
                    <p className={styles.info}>
                        Məhsula bax
                    </p>
                    <span className={styles.icon}>
                        <ShoppingBagOutlinedIcon />
                    </span>
                </div>
            </Link>
        </div>

    )
}

export default CardsProduct