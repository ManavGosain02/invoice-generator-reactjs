import React from 'react'

export default function ClientDetails({clientName, clientAddress}) {
  return (
    <>
        <section className="mt-10">
          <h2 className="text-xl uppercase font-bold text-2xl mb-1">{ clientName}</h2>
          <p>{ clientAddress }</p>
        </section> 
    </>
  )
}
