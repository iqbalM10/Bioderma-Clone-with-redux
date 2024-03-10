'use client'
import { useState } from "react"
import styles from "../../app/brends&products/[slug]/single.module.css"
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "@/redux/cartSlice"



const SingleProduct = ({ post }) => {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(0)


    const increment = () => {
        setQuantity(quantity + 1)
    }

    const decrement = () => {
        if (quantity > 0) setQuantity(quantity - 1)
    }
    const addBasket = () => {
        dispatch(addToCart({ id: post?.id, title: post?.MainDesc, image: post?.img, quantity: quantity, price: post?.price, count: post?.count }))
    }


    console.log(post.count);

    return (
        <section className={styles.SinglePost}>
            <div className={styles.PostArea}>
                <div className={styles.PostImg}>
                    <div className={styles.ImgArea}>
                        <img className={styles.img} src={post.img} alt="" />
                        <span className={styles.InfoArea}>
                            Çox satılan
                        </span>
                    </div>
                </div>
                <div className={styles.PostDetail}>
                    <h2 className={styles.title}>
                        Bioderma
                    </h2>
                    <h4 className={styles.brendsName}>Sensibio Micellar water, 1 l, 500 ml</h4>
                    <p className={styles.desc}>
                        {post.MainDesc}
                    </p>

                    <span className={styles.Price}>
                        ${post.price}
                    </span>

                    <div className={styles.CountArea}>
                        <div className={styles.Count}>
                            <span onClick={decrement}>-</span>
                            <span className={styles.number}>{quantity}</span>

                            <span onClick={increment}>+</span>
                        </div>
                        <div className={styles.addToCart}>
                            <button href="/" onClick={addBasket} className={styles.buttonCart}>
                                Səbətə at
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}


export default SingleProduct