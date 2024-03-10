"use client"

import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"

export const ProductsCards = createContext()


const DiscountCards = ({ children }) => {

  const [cards, setCards] = useState([])

  const value = { cards, setCards }

  useEffect(() => {
    getCards()
  }, [])

  const getCards = async () => {
    const req = await fetch('https://vercel-psi-coral.vercel.app/bioderma')
    const res = await req.json()
    setCards(res)


  }

  return (
    <ProductsCards.Provider value={value}>
      {children}
    </ProductsCards.Provider>
  )
}

export default DiscountCards