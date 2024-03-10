import React from 'react'
import styles from "../Advertisement/advertisement.module.css"
import Link from 'next/link'


function Advertisement() {
  return (
    <section className={styles.Advertisement}>
      <div className={styles.mainContent}>
        <div className={styles.contentArea}>
          <div className={styles.videoArea}>
            <img className={styles.video} src='https://naosshop.az/storage/682/conversions/esthe-int-veb-thumb.jpg' loop muted />
          </div>
        </div>
        <div className={styles.contentArea}>
          <div className={styles.biodermaSticker}>
            <img className={styles.image} src="https://naosshop.az/storage/684/conversions/etat-1-problem-thumb.jpg" alt="" />
          </div>
        </div>
      </div>
      <Link className={styles.link} href="/">
        <div className={styles.loadMore}>Daha Çox</div>
      </Link>

    </section>
  )
}

export default Advertisement