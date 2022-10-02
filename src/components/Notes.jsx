import React from 'react'

export default function Notes({ notes }) {
  return (
    <>
      <section className="mb-5 mt-10">
          <p className='lg:w-1/2 text-justify'>{ notes }</p>
        </section> 
    </>
  )
}
