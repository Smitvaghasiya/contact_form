import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Table from 'react-bootstrap/Table';


const root = ReactDOM.createRoot(document.getElementById('root'));

let ind = -1;
const ContactForm = () => {
  let [mulContact, setMulContact] = useState([{
    FirstName : "a",
    LastName : "b",
    Email : "ad@gmail.com"
  },
  {
    FirstName : "atfg",
    LastName : "bdd",
    Email : "adscs14@gmail.com"
  },
  {
    FirstName : "ag",
    LastName : "bddsfdd",
    Email : "ads745ds14@gmail.com"
  }
  ]);
  let [data, setData] = useState({});
  let formatedContact = mulContact.map((con,i) => {
    return (
      <>
        <tr>
          <td>{con.FirstName}</td>
          <td>{con.LastName}</td>
          <td>{con.Email}</td>
          <td><button className='btn btn-outline-warning' onClick={()=>{
            ind = i;
            setData({ ...data, FirstName : mulContact[i].FirstName, LastName : mulContact[i].LastName, Email : mulContact[i].Email });
          }}>Edit</button> &nbsp;
          <button className='btn btn-outline-danger' onClick={()=>{mulContact.splice(i,1);setMulContact([...mulContact])}}>Delete</button>
          </td>
        </tr>
      </>
    )
  })

  return (
    <>
    <div className='bg-light m-5 p-5'>
      <div>
        <div className='container p-2 '>
          <table class="p-3 mb-4 border-2 " >
            <thead className='text-center'>
              <tr>
                <td>First Name</td>
                <td>:</td>
                <td><input type="text" value={data.FirstName} onChange={(e) => { setData({...data, FirstName: e.target.value }) }} className='form-control' /></td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>:</td>
                <td><input type="text" value={data.LastName}  onChange={(e) => { setData({...data, LastName: e.target.value }) }}  className='form-control' /></td>
              </tr>
              <tr>
                <td>Email ID</td>
                <td>:</td>
                <td><input type="text" value={data.Email}  onChange={(e) => { setData({...data, Email: e.target.value }) }} className='form-control' /></td>
              </tr>
              <tr>
                <td colSpan={3}> <button className='btn btn-outline-primary' onClick={(e) => {
                  e.preventDefault();
                  if(ind > -1){
                    mulContact[ind] = data;
                    ind = -1;
                  }
                  else{
                    setMulContact([...mulContact, data])
                  }
                  setData({ ...data, FirstName : "", LastName : "", Email : "" });
                }} >Submit</button> </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <div className='container'>
      <table class="table table-bordered " border={2}><thead >
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
            </tr>
        </thead>{formatedContact}</table>
      </div>
    </div>
    </>
  );

}

root.render(<ContactForm />);

