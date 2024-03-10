import React from 'react'
import styles from "../cartBasket/cartBasket.module.css"
import DeleteIcon from '@mui/icons-material/Delete';
import { removeFromCart } from '@/redux/cartSlice';
import { useDispatch } from 'react-redux';

function cartBasket({cart}) {
    const dispatch = useDispatch() 


   
  return (
    <section className={styles.basketArea}>
        <div className={styles.basketProducts}>
        <div className={styles.imageArea}>
            <img src={cart?.image} alt="" />
        </div>
        <div className={styles.infoArea}>
            <div className={styles.descArea}>
            <div className={styles.leftArea}>
                <h2 className={styles.mainProductName}>
                    Bioderma
                </h2>
                <p className={styles.mainDesc}>
                    {cart?.title}
                </p>
            </div>
            <div onClick={() => dispatch(removeFromCart(cart?.id)) } className={styles.rightArea}>
                <button  className={styles.remove}>
<DeleteIcon/>
                </button>
            </div>
            </div>
            <div className={styles.priceArea}>
             <div className={styles.value}>
             {cart?.price} AZN
             </div>
             <div className={styles.quantity}>
                ({cart?.quantity})
             </div>
            </div>
            
        </div>
        </div>
    </section>
  )
}

export default cartBasket