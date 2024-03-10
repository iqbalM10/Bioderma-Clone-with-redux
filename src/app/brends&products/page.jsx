"use client"
import BrendsProducts from '@/components/Brends&Products/Products/BrendsProducts'
import React from 'react'
import { useState } from 'react'


function brends () {
  const [selected,setSelected] = useState('')
 
  return (
    <>
    <BrendsProducts selected={selected} setSelected={setSelected}/>
    </>
  )
}

export default brends 