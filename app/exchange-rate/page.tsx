import React, { Suspense } from 'react'
import Loading from "@/components/Loading"
import NairaToUsdRate from "@/components/NairaToUsdRate"

const ExchangeRatePage = () => {

  return (
    <main className="grid gap-3">
      <h1 className="page_title">Part 2: REST API - External Exchange Rate</h1>
      <div>
        <p className="text-gray-500 font-bold">Naira to USD</p>
        <Suspense fallback={<Loading/>}>
          <NairaToUsdRate/>
        </Suspense>
      </div>
    </main>
  )
}

export default ExchangeRatePage