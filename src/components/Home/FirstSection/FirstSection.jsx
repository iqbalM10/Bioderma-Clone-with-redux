import React from 'react'
import styles from "../FirstSection/first.module.css"
import Link from 'next/link'

function FirstSection() {
    return (
        <section className={styles.firstSection}>
            <div className={styles.leftContentArea}>
                <div className={styles.leftArea}>
                    {/*  <div className={styles.textArea}>
                        <p className={styles.desc}>
                            Ləkəyə qarşı
                            <br />
                            Parlaqladıcı qayğı:
                            <br />
                            <span className={styles.colorText}>
                                Pigmentbio
                            </span>
                        </p>
                    </div> */}
                    <div className={styles.productImage}>
                        {/* <Link className={styles.imgLink} href="/"><img src="https://naosshop.az/storage/169/conversions/nodeg-inside_main.png" alt="" /></Link> */}
                    </div>
                </div>
            </div>
            <div className={styles.rightContentArea}>
                <div className={styles.rightArea}>
                    <div className={styles.textAreaRight}>
                        <p className={styles.descRight}>
                            Ləkəyə qarşı
                            <br />
                            Parlaqladıcı qayğı:
                        </p>
                        <div className={styles.mainDesc}>
                            <span className={styles.descInfo}>
                                Make-up removal
                            </span>
                            <h4 className={styles.descTitle}>Sensibio Micellar water, 1 l</h4>
                            <Link className={styles.link} href="/">30% Endirim</Link>
                        </div>
                    </div>
                    <div className={styles.productImageRight}>
                        <Link href="/"><img className={styles.imgRight} src="https://www.bioderma.com.tr/sites/tr/files/styles/ultrawide_product_list_thumbnail/public/products/%7B40498%7D_%7BBIO_SENSIBIO_H2O%7D_%7B28709X%7D.png?itok=UibqzhdR" alt="" /></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FirstSection