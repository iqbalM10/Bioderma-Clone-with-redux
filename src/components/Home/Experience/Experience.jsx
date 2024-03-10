import React from 'react'
import styles from "../Experience/experience.module.css"

function Experience() {
  return (
    <section className={styles.Experience}>
      <div className={styles.experienceArea}>
        <div className={styles.iconArea}>
          <img src="https://naosshop.az/images/f-top-icon1.svg" alt="" />
        </div>
        <div className={styles.textArea}>
          <p className={styles.desc}>Səhiyyə mütəxəssisləri ilə <br />
            40 illik iş təcrübəsi</p>
        </div>
      </div>

      <div className={styles.experienceArea}>
        <div className={styles.iconArea}>
          <img src="https://naosshop.az/images/f-top-icon2.svg" alt="" />
        </div>
        <div className={styles.textArea}>
          <p className={styles.desc}>Dəriyə dərin hörmət</p>
        </div>
      </div>

      <div className={styles.experienceArea}>
        <div className={styles.iconArea}>
          <img src="
             https://naosshop.az/images/f-top-icon3.svg" alt="" />
        </div>
        <div className={styles.textArea}>
          <p className={styles.desc}>Effektivlik və təhlükəsizlik tibbi <br />
            nəzarət altında sınaqdan keçirilmişdir</p>
        </div>
      </div>

      <div className={styles.experienceArea}>
        <div className={styles.iconArea}>
          <img src="
           https://naosshop.az/images/f-top-icon4.svg" alt="" />
        </div>
        <div className={styles.textArea}>
          <p className={styles.desc}>Səhiyyə mütəxəssisləri ilə <br />
            40 illik iş təcrübəsir</p>
        </div>
      </div>
    </section>
  )
}

export default Experience