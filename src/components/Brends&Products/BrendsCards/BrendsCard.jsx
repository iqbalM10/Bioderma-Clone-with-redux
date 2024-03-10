import React from 'react'
import styles from "../BrendsCards/brendcards.module.css"
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Link from 'next/link';
function BrendsCard({ product }) {
  return (
    <div className={styles.BrendsCard}>
      <div className={styles.imageArea}>
        <img className={styles.img} src={product?.img} alt="" />
      </div>
      <div className={styles.textArea}>
        <h3 className={styles.title}>
          Bioderma
        </h3>
        <p className={styles.brends}>
          {product.desc}
        </p>
        <span className={styles.brendsPrice}>
          {product.price} AZN
        </span>

        <Link href={`/brends&products/${product.id}`} className={styles.BrendsToCards}>
          <p className={styles.AddToCards}>
            Səbətə at
          </p>
          <span className={styles.iconShop}>
            <ShoppingBagOutlinedIcon />
          </span>
        </Link>
      </div>
    </div>
  )
}



export default BrendsCard