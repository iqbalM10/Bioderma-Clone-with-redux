"use client"
import React from 'react'
import styles from "../Products/brends&products.module.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import Categories from './categories/Categories';
import Brends from '../Brends/Brends';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from '@/redux/categorySlice';
import  ProductsCards  from '../ProductsCard/ProductsCards';
import PriceSort from '../PriceSort/PriceSort';

function BrendsProducts() {

   const dispatch = useDispatch();
   const {categories} = useSelector(state => state.categories)
 
   useEffect(() =>{
   dispatch(getCategories())
   },[dispatch])


   const [sort, setSort] = useState("")
   const [category,setCategory] = useState('')
    return (
        <section className={styles.BrendsProducts}>
            <div className={styles.selectionArea}>
               <Categories categories={categories} setCategory={setCategory}/>
               <Brends/>
               <PriceSort setSort={setSort}/>
            </div>
            <div className={styles.productsArea}>
                <ProductsCards category={category} sort={sort}/>  
            </div>
        </section>
    )
}

export default BrendsProducts