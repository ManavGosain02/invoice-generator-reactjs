import { useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import './index.css';

import ClientDetails from "./components/ClientDetails.jsx";
import Dates from "./components/Dates.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import MainDetails from "./components/MainDetails.jsx";
import Notes from "./components/Notes.jsx";
import Table from "./components/Table.jsx";
import TableForm from "./components/TableForm";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [bank, setBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");

  //table values
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");

  const [list, setList] = useState([]);

  const [total, setTotal] = useState(0);

  const componentRef = useRef()


  const handlePrint = () => {
    window.print();
  }
  return (
    <>
    {/* xl:max-w-4xl xl:mx-auto */}
     <main className="m-5 p-5 bg-white md:max-w-xl md:mx-auto lg:max-w-3xl xl:mx-auto rounded shadow">
      
       {showInvoice ?  (
        <>
        <ReactToPrint trigger={() => <button className="ml-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Print / Download</button>} content={() => componentRef.current} />
          <div ref={ componentRef } className="p-5">
            {/* header */}
            <Header handlePrint={ handlePrint } />
            {/* end of header */}

            {/* Your Details */}
            <MainDetails  name={ name } address={ address } />
            {/* End of Your Details */}

            {/* Client's Detials */}
            <ClientDetails clientName={ clientName} clientAddress={clientAddress}/>
            {/* End of Client Details */}

            {/* Dates */}
            <Dates invoiceNumber={ invoiceNumber } invoiceDate={ invoiceDate } dueDate={ dueDate }/>
            {/* End of Dates */}

            {/* Content Table */}
            <Table description={ description } quantity={ quantity } price={ price } amount={ amount } list={ list } setList={ setList } total={ total } setTotal={ setTotal }/>
            {/* End of Content Table */}

            {/* Notes */}
            <Notes notes={ notes }/>
            {/* End of Notes */}

            {/* Footer */}
            <Footer name={ name } address={ address } website={ website } email={ email } phone={ phone } />
            {/* End of Footer */}
          </div>
          
          <button onClick={() => setShowInvoice(false)} className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-nlue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                Edit Information
          </button>
        </>
        ): (
          <>
            <div className="flex flex-col justify-center">

              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <lable htmlFor="name">Enter Name </lable>
                  <input type="text" name="text" id="name" placeholder="Enter name" autoComplete="off" value={ name } onChange={ (e) => setName(e.target.value)}/>
                </div>

                <div className="flex flex-col">
                  <lable htmlFor="address">Enter Address </lable>
                  <input type="text" name="address" id="address" placeholder="Enter address" autoComplete="off" value={ address } onChange={ (e) => setAddress(e.target.value)}/>
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <lable htmlFor="email">Enter E-mail</lable>
                  <input type="email" name="email" id="email" placeholder="Enter email" autoComplete="off" value={ email } onChange={ (e) => setEmail(e.target.value)}/>
                </div>
              
                <div className="flex flex-col">
                  <lable htmlFor="website">Enter Website</lable>
                  <input type="url" name="website" id="website" placeholder="Enter website url" autoComplete="off" value={ website } onChange={ (e) => setWebsite(e.target.value)}/>
                </div>

                <div className="flex flex-col">
                  <lable htmlFor="phone">Enter Phone number</lable>
                  <input type="text" name="phone" id="phone" placeholder="Enter phone number" autoComplete="off" value={ phone } onChange={ (e) => setPhone(e.target.value)}/>
                </div>
              </article>

              <article className="grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <lable htmlFor="bank">Enter Bank Name</lable>
                  <input type="text" name="bank" id="bank" placeholder="Enter bank name" autoComplete="off" value={ bank } onChange={ (e) => setBank(e.target.value)}/>
                </div>

                <div className="flex flex-col">
                  <lable htmlFor="accountNumber">Enter Account Number</lable>
                  <input type="text" name="accountNumber" id="accountNumber" placeholder="Enter account number" autoComplete="off" value={ accountNumber } onChange={ (e) => setAccountNumber(e.target.value)}/>
                </div>
              </article>

              
          
              <article className="md:grid grid-cols-2 gap-10 md:mt-10">
                <div className="flex flex-col">
                  <lable htmlFor="clientName">Enter Client Name</lable>
                  <input type="text" name="clientName" id="clientName" placeholder="Enter client name" autoComplete="off" value={ clientName } onChange={ (e) => setClientName(e.target.value)}/>
                </div>

                <div className="flex flex-col">
                  <lable htmlFor="clientAddress">Enter Client Address</lable>
                  <input type="text" name="clientAddress" id="clientAddress" placeholder="Enter client address" autoComplete="off" value={ clientAddress } onChange={ (e) => setClientAddress(e.target.value)}/>
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <lable htmlFor="invoiceNumber">Enter Invoice Number</lable>
                  <input type="text" name="invoiceNumber" id="invoiceNumber" placeholder="Enter invoice numeber" autoComplete="off" value={ invoiceNumber } onChange={ (e) => setInvoiceNumber(e.target.value)}/>
                </div>

                <div className="flex flex-col">
                  <lable htmlFor="invoiceDate">Enter Invoice Date</lable>
                  <input type="date" name="invoiceDate" id="invoiceDate" placeholder="Enter invoice date" autoComplete="off" value={ invoiceDate } onChange={ (e) => setInvoiceDate(e.target.value)}/>
                </div>

                <div className="flex flex-col">
                  <lable htmlFor="dueDate">Enter a Due Date</lable>
                  <input type="date" name="dueDate" id="dueDate" placeholder="Enter due date" autoComplete="off" value={ dueDate } onChange={ (e) => setDueDate(e.target.value)}/>
                </div>
              </article>

              {/* Table */}
              <article>
                <TableForm description={ description } setDescription={ setDescription } quantity={ quantity } setQuantity={ setQuantity } price={ price } setPrice={ setPrice } amount={ amount } setAmount={ setAmount } list={ list } setList={ setList } total={ total } setTotal={ setTotal }/>
              </article>

              <lable htmlFor="notes">Additional Notes</lable>
              <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Additional notes for the client" value={ notes } onChange={(e) => setNotes(e.target.value)}>
              </textarea>

              <button onClick={() => setShowInvoice(true)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                Preview invoice
              </button>
            </div>
          </>
        )}
      </main> 
    </>
  );
}

export default App;
