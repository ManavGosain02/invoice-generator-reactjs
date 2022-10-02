import React from 'react';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

export default function TableForm({ description, setDescription, quantity, setQuantity, price, setPrice, amount, setAmount, list, setList, total, setTotal }) {
  
  const [isEditing, setIsEditing] = useState(false);
  
  //submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !quantity || !price) {
      alert("Please fill in all the fields!!!")
    }else{
      const newItems = {
        id: uuidv4(),
        description,
        quantity,
        price,
        amount
      }
      setDescription("")
      setPrice("")
      setQuantity("")
      setAmount("")
      setList([...list, newItems])
      setIsEditing(false)
    }

    
  }

  //calculate items amount
  useEffect(() => {
    const calculateAmt = (amount) => {
      setAmount(quantity * price);
    }
    calculateAmt(amount);
  }, [amount, price, quantity, setAmount])

  //calculate total amount
 useEffect(() => {
  let rows = document.querySelectorAll(".amount")
  let sum = 0
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].className === "amount") {
      sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
      setTotal(sum)
    }
  }
 })
//edit function
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id)
    setList(list.filter((row) => row.id !== id))
    setIsEditing(true)
    setDescription(editingRow.description)
    setQuantity(editingRow.quantity)
    setPrice(editingRow.price)
  }

  //delete fuction
  const deteRow = (id) => {
    setList(list.filter((row) => row.id !== id))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col md:mt-10'>
          <label htmlFor="description">Item Description</label>
          <input type="text" name='description' autoComplete='off' id='description' placeholder='item name' value={ description } onChange={(e) => setDescription(e.target.value)}/>
        </div>

        <div className='md:grid grid-cols-3 gap-10'>
          <div className='flex flex-col'>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" name='quantity' autoComplete='off' id='quantity' placeholder='0' min='0' value={ quantity } onChange={(e) => setQuantity(e.target.value)}/>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="price">Item Price</label>
            <input type="text" name='price' autoComplete='off' id='price' placeholder='item price' value={ price } onChange={(e) => setPrice(e.target.value)}/>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="amount">Amount</label>
            <p>{ amount }</p>
          </div>
        </div>
        <button type='submit' className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 mb-5">{isEditing ? "Update item" : "Add item"}</button>
      </form>

      {/* Edit table items */}

      <table width="100%" className='mb-10'>
          <thead>
           <tr className='bg-gray-100 p-1'>
             <td className='font-bold'>Item Description</td>
             <td className='font-bold'>Price</td>
             <td className='font-bold'>Quantity</td>
             <td className='font-bold'>Amount</td>
           </tr>
         </thead>
        {list.map(({id, description, quantity, price, amount}) =>(
         <React.Fragment key={id}>

         <tbody>
           <tr>
             <td>{ description }</td>
             <td>{ price }</td>
             <td>{ quantity }</td>
             <td className='amount'>{ amount }</td>
             <td><button onClick={() => editRow(id)}><AiOutlineEdit className='text-green-500 font-bold'/></button></td>
             <td><button onClick={() => deteRow(id)}><AiOutlineDelete className='text-red-500 font-bold'/></button></td>
           </tr>
         </tbody>
         </React.Fragment>
        ))}
      </table> 
      <div>
        <h4 className='text-gray-800 text-2xl font-bold mb-5'>{ total.toLocaleString }</h4>
      </div>
      <div>
          <h2 className='text-gray-800 text-4xl font-bold flex items-end justify-end'>Rs. { total }</h2>
      </div>
    </>
  )
}
