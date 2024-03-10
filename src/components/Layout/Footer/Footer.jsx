import React from 'react'
import styles from "../Footer/footer.module.css"
import Link from 'next/link'

function Footer() {
  return (
    <section className={styles.Footer}>
      <div className={styles.FooterTitles}>
        <img className={styles.img} src="https://naosshop.az/images/f-logo.svg" alt="" />
        <p className={styles.TitleDesc}>
          NAOS dünyanın ilk müstəqil dəriyə qulluq şirkətlərindən biridir. NAOS eko biologiyadan ilhamlanaraq 3 marka yaratdı
        </p>
      </div>
      <div className={styles.FooterTitles}>
        <div className={styles.Maintitle}>
          <h1 className={styles.title}>Kateqoriyalar</h1>
        </div>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link className={styles.link} href="/">Brendlər və Məhsullar</Link>
            <Link className={styles.link} href="/">Qulluq setləri</Link>
            <Link className={styles.link} href="/">Üz qulluğu</Link>
            <Link className={styles.link} href="/">Bədən qulluğu</Link>
            <Link className={styles.link} href="/">Göz yaş alma</Link>
          </li>

        </ul>
      </div>
      <div className={styles.FooterTitles}>
        <div className={styles.Maintitle}>
          <h1 className={styles.title}>Kateqoriyalar</h1>
        </div>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link className={styles.link} href="/">Haqqımızda</Link>
            <Link className={styles.link} href="/">Faydalı</Link>
            <Link className={styles.link} href="/">Aksiyalar və Kompaniyalar</Link>
          </li>

        </ul>
      </div>
      <div className={styles.FooterTitles}>
        <div className={styles.Maintitle}>
          <h1 className={styles.title}>Kateqoriyalar</h1>
        </div>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link className={styles.link} href="/">FAQ</Link>
            <Link className={styles.link} href="/">Ödəniş və çatdırılma</Link>
            <Link className={styles.link} href="/">Zəmanət şərtləri</Link>
            <Link className={styles.link} href="/">Mağaza ünvanları</Link>
          </li>

        </ul>
      </div>
    </section>
  )
}

export default Footer