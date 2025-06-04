"use client"
import { wordpressBaseUrl } from "@/utils/constants"
import React, { useActionState, useState } from 'react'
import ReversedName from "./ReversedName"

const NameForm = () => {

  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    
    try {
      const formValue = {
        name: formData.get("name") as string
      }
        
        if(!formValue.name) return {
          error: "Name cannot be empty",
          message: "Error"
        }

        if (formValue.name.length == 1)  return {
          error: "Name must be grater than one",
          message: "Error"
        }
        
        const res = await fetch(`${wordpressBaseUrl}/wp-json/custom/v1/submit-name`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formValue),
        })

        if(!res.ok) return {
          error: `An unexpected error occured while submitting ${formValue.name}`,
          message: "Error"
        }

        const data = await res.json();

        return {
          ...data,
          error: ""
        }
        
      } catch(err) {
        return {
          ...prevState,
          error: "An unexpected error has occured",
          message: "Error"
        }
      }
    }
  

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    message: "",
    reversed: ""
  })

  return (
    <form action={formAction} className="flex flex-col gap-2 items-start mb-10">
      <div className="flex gap-2 items-center">
        
        <label htmlFor="name font-bold">Name </label>
        <input id="name" name="name" type="text" placeholder="Enter a name"
          className="border-1 border-gray-500 rounded-sm p-1 focus:border-blue-600 focus:outline-2 focus:outline-[#155efc63]"/>

        <button type="submit" disabled={isPending} className="border-1 border-blue-600 
          rounded-sm px-2 py-1 bg-blue-600 text-white 
          hover:bg-white hover:text-blue-600 disabled:border-gray-500 disabled:bg-gray-500">
          {isPending ?
            "Submitting..." :
            "Submit"}
        </button>
      </div>      
        {state.message === "Saved" && <p className="text-green-500 text-sm">Successfully submitted and reversed to <b>{state.reversed}</b></p>}
        {state.error && <p className="text-red-500 text-sm">{state.error}</p>}
        <ReversedName newName={state.reversed} />

    </form>
  )
}

export default NameForm