"use client"
import { getCartTotal } from '@/redux/cartSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartBasket from '@/components/CartBasket/cartBasket'
import styles from "../basket/basket.module.css"

function Basket() {

    
  const dispatch = useDispatch()

  const {carts, itemCount, totalAmount } = useSelector(state => state.carts)


  
  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])
  return (
    <div className={styles.mainBasketProducts}>
        {
            carts?.length > 0 ? <div> 
                {carts?.map((cart,i) =>(<CartBasket cart={cart} key={i} totalAmount={totalAmount}/>))}
                
            </div> :
            <div className={styles.infoBasket}> Kartınız boşdur</div>
        }
       {
        carts?.length > 0 ?  <div className={styles.priceArea}>
        <h2 className={styles.productBasketTitle}>Səbətdəki Məhsullar</h2>
        <p className={styles.totalPrices}>Total qiymət : <span className={styles.price}>{totalAmount} AZN</span></p>
        <button className={styles.button}>Sifarişi tamamla</button>
      </div>
      :
      <div></div>
       }
      
    </div>
  )
}

export default Basket