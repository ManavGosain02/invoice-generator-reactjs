import React from 'react'

export default function MainDetails({name, address}) {
  return (
    <>
        <section className="flex flex-col justify-end items-end">
          <h2 className="text-xl uppercase font-bold mb-1">{ name }</h2>
          <p>{ address }</p>
        </section> 
    </>
  )
}
