import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import styles from "../Loading/loading.module.css"
function Loading() {
    const[loading, setLoading] = useState(false)
    useEffect(() =>{
        setLoading(true)
        setTimeout(() =>{
            setLoading(false)
        },3000)
    },[])
  return (
    

    <div  className={styles.loader}>
        
      <ClipLoader
     
        color={"#36d7b7"}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loading