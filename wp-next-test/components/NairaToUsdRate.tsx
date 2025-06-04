import { getExchangeRate } from '@/lib/exchange-rate'
import { notFound } from "next/navigation"

import React from 'react'

const NairaToUsdRate = async () => {

  let rate: number

  try {
    rate = await getExchangeRate()
  } catch (error) {
    console.error('Error fetching exchange rate: ', error)
    throw new Error('Error fetching exchange rate')
  }

  if(!rate) notFound()

  return (
    <p>₦1 = ${rate}</p>
  )
}

export default NairaToUsdRate