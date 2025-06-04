"use client"
import { wordpressBaseUrl } from "@/utils/constants"
import { useEffect, useMemo } from "react"
import { useState } from 'react'

const ReversedName = ({ newName }: {newName: string}) => {
  const [lastReversedName, setLastReversedName]  = useState("")

  useEffect(() => {    
    const fetchData = async () => {
      try {
        const res = await fetch(`${wordpressBaseUrl}/wp-json/custom/v1/get-name`, {
          next: {
            revalidate: 0
          }
        })

        if (!res.ok) {
          throw new Error(`Error fetching Name: ${res.status}`)
        }
        
        const data = await res.json()

        setLastReversedName(data?.reversed_name)

      } catch (error) {
        console.error('Error fetching reversed name', error)
      }
    }

    fetchData()

  }, [newName])


  return (
    <p>Last Reversed Name: <b>{lastReversedName && lastReversedName}</b></p>
  )
}

export default ReversedName