import React from 'react'
import styles from "../MegaDiscount/megadiscount.module.css"

function MegaDiscount() {
  return (
    <section className={styles.MegaDiscount}>
        <div className={styles.discount}>
         <div className={styles.MegaTitles}>
        <h1>MEGA DISCOUNT OF
            <br />
THE MONTH</h1>

<h3>UP TO 30% OFF</h3>
<p>Make-up removal</p>
<span>Sensibio Micellar water, 1 l</span>
         </div>
        </div>
    </section>
  )
}

export default MegaDiscount