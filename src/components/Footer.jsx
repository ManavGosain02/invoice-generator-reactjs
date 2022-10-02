import React from 'react'

export default function Footer({ name, email, address, website, bank, phone }) {
  return (
    <>
      <footer className='footer border-t-2 border-gray-300 pt-3'>
          <ul className="flex flex-wrap items-center justify-center">
            <li>
              <span className="font-bold">
                Your Name:
              </span> { name }
            </li>
            <li>
              <span className="font-bold">
                Address:
              </span> { address }
            </li>
            <li>
              <span className="font-bold">
                Your Email:
              </span> { email } 
            </li>
            <li>
              <span className="font-bold">
                Phone number:
              </span> { phone } 
            </li>
            {/* <li>
              <span className="font-bold">
                Bank details:
              </span> { bank }
            </li> */}
            <li>
              <span className="font-bold">
                Website:
              </span> <a href={ website } target="_blank" rel="noopenner noreferrer">{ website }</a>
            </li>
          </ul>
        </footer>
    </>
  )
}
