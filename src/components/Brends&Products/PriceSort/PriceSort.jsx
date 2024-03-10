import React from 'react'
import styles from "../PriceSort/pricesort.module.css"

function PriceSort({setSort}) {
  return (
    <section className={styles.PriceSort}>
        <select  onChange={e => setSort(e.target.value)} name="" id="" className={styles.select}>
            <option className={styles.price} disabled value="">Qiymət</option>
            <option className={styles.price} value="inc">Artan</option>
            <option className={styles.price} value="dec">Azalan</option>
        </select>
    </section>
  )
}

export default PriceSort