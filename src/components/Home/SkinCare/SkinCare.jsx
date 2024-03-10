import React from 'react'
import styles from "../SkinCare/skincare.module.css"
import Link from 'next/link'

function SkinCare() {
    return (
        <section className={styles.SkinCare}>
            <div className={styles.title}>
                <h1 className={styles.mainTitle}>Dəri qulluğu rutini</h1>
            </div>
            <div className={styles.CardArea}>
                <div className={styles.infoCards}>
                    <div className={styles.CardImage}>
                        <img src="https://naosshop.az/storage/796/conversions/quru-deriler-%C3%BC%C3%A7%C3%BCn-nemlendirici-kremler-thumb.jpg" alt="" />
                    </div>
                    <div className={styles.CardTexts}>
                        <h3 className={styles.supportText}>1 Addım: Təmizlə</h3>
                        <p className={styles.TypeText}>Dəri tipinə uyğun təmizləyicilər</p>
                        <Link className={styles.SkinLink} href="/">Kəşf Et</Link>
                    </div>
                </div>
                <div className={styles.infoCards}>
                    <div className={styles.CardImage}>
                        <img src="https://www.bioderma.com.tr/sites/tr/files/styles/ultrawide_articles_teaser/public/2020-02/sensitive-skin-3_1920x1080.jpg?h=d1cb525d&itok=PWEN3ZEM" alt="" />
                    </div>
                    <div className={styles.CardTexts}>
                        <h3 className={styles.supportText}>2. Addım: Müalicə et və qulluq
                            (nəmləndir) et</h3>
                        <p className={styles.TypeText}>Dəri tipinə uyğun təmizləyicilər</p>
                        <Link className={styles.SkinLink} href="/">Kəşf Et</Link>
                    </div>
                </div>
                <div className={styles.infoCards}>
                    <div className={styles.CardImage}>
                        <img src="https://www.bioderma.com.tr/sites/tr/files/styles/ultrawide_articles_teaser/public/2020-02/sensitive-skin-1_1920x1080.jpg?h=d1cb525d&itok=lSm1PAtv" alt="" />
                    </div>
                    <div className={styles.CardTexts}>
                        <h3 className={styles.supportText}>3. Addım: Günəşdən qoru
                        </h3>
                        <p className={styles.TypeText}>Dəri tipinə uyğun təmizləyicilər</p>
                        <Link className={styles.SkinLink} href="/">Kəşf Et</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkinCare