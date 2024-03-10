import Loading from '@/components/Loading/Loading';
import { getProducts, getCategoryProducts } from '@/redux/productSlice';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import BrendsCard from '../BrendsCards/BrendsCard';
import styles from '../ProductsCard/productsCard.module.css'
function ProductsCards({ category, sort }) {
    const dispatch = useDispatch();
    const { products, productsStatus } = useSelector(state => state.products)


    useEffect(() => {
        if (category) {
            dispatch(getCategoryProducts())
        } else { dispatch(getProducts()) }

    }, [dispatch, category])

    console.log("sort", sort);


    return (
        <>
            {
                productsStatus == 'LOADING' ? <Loading /> :
                    <div className={styles.mainCards}>
                        {
                            products?.slice().sort((a, b) => sort == "inc" ? a.price - b.price : sort == "dec" ? b.price - a.price : "")?.map((product, i) => (
                                <BrendsCard key={i} product={product} />
                            ))
                        }
                    </div>
            }
        </>
    )
}

export default ProductsCards