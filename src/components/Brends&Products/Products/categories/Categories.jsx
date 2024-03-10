
"use client"
import React from 'react'
import styles from "../categories/categories.module.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

function Categories({ categories, setCategory, category}) {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className={styles.dropdownsArea}>
      <div className={styles.dropdownBtn} onClick={(e) => {
        setIsActive(!isActive)
      }}>
        <h2 className={styles.title}> Kateqoriyalar</h2>
        <span className={styles.icon}><ExpandMoreIcon /></span>
      </div>
      {isActive && (
        <div className={styles.dropdownContent}>
          {categories?.map((item, id) => (
            <div key={id} >
              <div className={styles.dropdownItem} onClick={() => setCategory(category)} >
                <p className={styles.desc} >{item.category}</p>
              </div>
              <div className={styles.dropdownItem}>
                <p className={styles.desc}>{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Categories