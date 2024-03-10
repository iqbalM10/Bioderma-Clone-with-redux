import React from 'react'
import styles from "../Brends/brends.module.css"
import { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Brends() {
    const [active, setActive] = useState(false)
  return (
    <section className={styles.Brends}>
      <div className={styles.dropdownArea}>
      <div className={styles.dropdownBtn} onClick={(e) => {
        setActive(!active)
    }}>
       <h2 className={styles.title}> Brendlər və məhsullar</h2>
        <span className={styles.icon}><ExpandMoreIcon /></span>
    </div>
       {active && (
         <div className={styles.input}>
         <input type="checkbox" name="" id=""  value="Bioderma (67)"/> Bioderma (67)
         <br />
         <input type="checkbox" name="" id=""  value="Institut Esthederm (117)"/> Institut Esthederm (117)
         <br />
         <input type="checkbox" name="" id=""  value="Etat Pur (30)"/> Etat Pur (30)
         </div>
       )
       }
      </div>
    </section>
  )
}

export default Brends