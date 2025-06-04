export async function getExchangeRate() {
  const apiKey = process.env.EXCHANGE_RATE_API_KEY
  const url = `https://api.exchangerate.host/change?access_key=${apiKey}&currencies=USD,NGN`
  const res = await fetch(url, { revalidate: 0 })
  
  if (!res.ok) {
    throw new Error(`Failed to fetch exchange rate: ${res.statusText}`)
  }
  
  const data = await res.json()

  const usdToNaira = data?.quotes?.USDNGN?.end_rate;
  
  if (!usdToNaira || isNaN(usdToNaira)) {
    throw new Error('Invalid exchange rate')
  }

  const nairaToUsd = 1/usdToNaira

  return nairaToUsd
}
