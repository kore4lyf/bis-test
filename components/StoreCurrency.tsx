import { getStoreCurrency } from '@/lib/fetchStoreCurrency'
import { notFound } from 'next/navigation'

const StoreCurrency = async () => {
  let currency: string

  try {
    currency = await getStoreCurrency()
  } catch (error) {
    console.error('EDD fetching currency: ', error)
    throw new Error('EDD fetching currency')
  }
  
  if(!currency) notFound()
  
  return (
    <p>
      Store Currency: <span className="font-bold">{currency}</span>
    </p>
  )
}

export default StoreCurrency