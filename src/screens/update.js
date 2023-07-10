import React,{useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
function Update(props)
{
  const navigate = useNavigate();
  const [name, setName] = React.useState(false);
    const [mail, setMail] = React.useState(false);
    const [phone, setPhone] = React.useState(false);
    const [enroll, setEnroll] = React.useState(false);
    const [admin_dt, setDate] = React.useState();
    const [id, setId] = React.useState(false);
    const BaseUrl='/user/update/'
    const updateuser=async()=>{
      console.log(mail);
      {
        await axios.put(BaseUrl+mail,{
            "name":name,
            "mail":mail,
            "phone":phone,
            "enroll":enroll,
            "admin_dt":admin_dt
        }); 
        navigate('/students');
      
  }
}
  useEffect(()=>{
   setId(localStorage.getItem('id'))
    setName(localStorage.getItem('name'))
    setMail(localStorage.getItem('email'))
    setPhone(localStorage.getItem('phone'))
    setEnroll(localStorage.getItem('enroll'))
    setDate(localStorage.getItem('admin_dt'))
  },[])
  return(
            <div className="h-screen flex items-center justify-center">
               <div className="bg-white rounded-lg">
    
    <div className="px-3">
      <h3 className="text-gray-400">Name</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} className="border pr-32 h-12 w-80 rounded-sm border-gray-300 placeholder: text-sm placeholder:text-gray-300" type="text" placeholder=" Name"></input>
    </div>
    
    <div className="px-3">
      <h3 className="text-gray-400">Email</h3>
      <input value={mail} onChange={(e) => setMail(e.target.value)} className="border pr-32 h-12 w-80 rounded-sm border-gray-300 placeholder: text-sm placeholder:text-gray-300" type="text" placeholder=" Email"></input>
    </div>
    
    <div className="px-3">
      <h3 className="text-gray-400">Phone</h3>
      <input value={phone} onChange={(e) => setPhone(e.target.value)} className="border pr-32 h-12 w-80 rounded-sm border-gray-300 placeholder: text-sm placeholder:text-gray-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
       type="number" min={10} max={10} placeholder=" Phone Number"></input>
    </div>
    
    <div className="px-3">
      <h3 className="text-gray-400">Enroll Number</h3>
      <input value={enroll} onChange={(e) => setEnroll(e.target.value)} className="border pr-32 h-12 w-80 rounded-sm border-gray-300 placeholder: text-sm placeholder:text-gray-300" type="text" placeholder=" Enroll Number"></input>
    </div>
    
    <div className="px-3">
      <h3 className="text-gray-400">Date of Admission</h3>
      <input value={admin_dt} onChange={(e) => setDate(e.target.value)} className="border pr-32 h-12 w-80 rounded-sm border-gray-300 placeholder: text-sm placeholder:text-gray-300" type="date" placeholder=" Date of Admission"></input>
    </div>
    <button  onClick={() => {{updateuser()};
                    }}className="border m-3 px-28 py-2 bg-yellow-500 text-white rounded-sm border-yellow-500"
     type="submit">update</button>
    </div> 
       </div>
        )
}
export default Update
// import axios from 'axios';
// import React ,{useState,useEffect} from 'react'
// const BaseUrl='/user/update'
// function Update()
// { const [id, setId] = useState('');
//   const [name, setName] = useState('');
//   const [mail, setMail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [enroll, setEnroll] = useState('');
//   const [date, setDate] = useState('');
//   const updateuser=async()=>
//   {
//     await axios.put(BaseUrl+mail,{
//         name,
//         mail,
//         phone,
//         enroll,
//         date
//     });
//   }
//   useEffect(()=>{
//     setId(localStorage.getItem('id'))
//     setName(localStorage.getItem('name'))
//     setMail(localStorage.getItem('mail'))
//     setPhone(localStorage.getItem('phone'))
//     setEnroll(localStorage.getItem('enroll'))
//     setDate(localStorage.getItem('admin_dt'))
//   })
//     return(
//         <div className="h-screen flex items-center justify-center">
//            <div className="bg-white rounded-lg">

// <div className="px-3">
//   <h3 className="text-gray-400">Name</h3>
//   <input id="name" onChange={(e) => setName(e.target.value)} className="border pr-32 h-12 w-80 rounded-sm border-gray-300 placeholder: text-sm placeholder:text-gray-300" type="text" placeholder=" Name"></input>
// </div>

// <div className="px-3">
//   <h3 className="text-gray-400">Email</h3>
//   <input id="email" onChange={(e) => setMail(e.target.value)} className="border pr-32 h-12 w-80 rounded-sm border-gray-300 placeholder: text-sm placeholder:text-gray-300" type="text" placeholder=" Email"></input>
// </div>

// <div className="px-3">
//   <h3 className="text-gray-400">Phone</h3>
//   <input id="phone" onChange={(e) => setPhone(e.target.value)} className="border pr-32 h-12 w-80 rounded-sm border-gray-300 placeholder: text-sm placeholder:text-gray-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
//    type="number" min={10} max={10} placeholder=" Phone Number"></input>
// </div>

// <div className="px-3">
//   <h3 className="text-gray-400">Enroll Number</h3>
//   <input id="enroll" onChange={(e) => setEnroll(e.target.value)} className="border pr-32 h-12 w-80 rounded-sm border-gray-300 placeholder: text-sm placeholder:text-gray-300" type="text" placeholder=" Enroll Number"></input>
// </div>

// <div className="px-3">
//   <h3 className="text-gray-400">Date of Admission</h3>
//   <input id="admin_dt" onChange={(e) => setDate(e.target.value)} className="border pr-32 h-12 w-80 rounded-sm border-gray-300 placeholder: text-sm placeholder:text-gray-300" type="date" placeholder=" Date of Admission"></input>
// </div>
// <button className="border m-3 px-28 py-2 bg-yellow-500 text-white rounded-sm border-yellow-500"
//   onClick={updateuser}
//  type="submit">update</button>
// </div> 
//         </div>
//     )
// }
// export default Update