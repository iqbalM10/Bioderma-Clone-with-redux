import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import styles from "../HamMenu/hammenu.module.css"
import Link from 'next/link';


export default function HamMenu() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={styles.hamMenu}>

            <button className={styles.hamButton} onClick={toggleMenu}><MenuIcon /></button>


            {menuOpen && (
                <div className={styles.menu}>

                    <button onClick={toggleMenu} className={styles.closeButton}>
                        &times;
                    </button>


                    <ul className={styles.ul}>
                        <Link className={styles.Link} href="/"><li className={styles.li}>Kateqoriyalar</li></Link>
                        <Link className={styles.Link} href="/"><li className={styles.li}>Brendlər və 
məhsullar</li></Link>
                        <Link className={styles.Link} href="/"><li className={styles.li}>Yaş aralığı</li></Link>
                        <Link className={styles.Link} href="/"><li className={styles.li}>Narahatlıqlar</li></Link>
                        <Link className={styles.Link} href="/"><li className={styles.li}>Qiymət</li></Link>
                    
                        
                        

                    </ul>
                </div>
            )}
        </div>
    )
}





