import axios from "axios";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import Module from "../components/module";
import Profile from "../assets/profile.jpg";
import ReactModal from "react-modal";
import React, { useEffect } from 'react';
const refresh = () => window.location.reload(true);
const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      width: 400,
    },
  };

  const createURL = "user/create";
  const getAllURL = "user/getuser/all";
  const updtURL = "user/update/";


function Students(){


    const [modalOpen, setModalOpen] =React.useState(false);
    const [post, setPost] = React.useState(null);
    const [getAll, setgetAll] = React.useState([]);
    const [update, setUpdate] = React.useState(null);
    
  //create data
    const [iname, setName] = React.useState(false);
    const [imail, setMail] = React.useState(false);
    const [iphone, setPhone] = React.useState(false);
    const [ienroll, setEnroll] = React.useState(false);
    const [idate, setDate] = React.useState();


    //Create
  function createPost() {
    axios
      .post(createURL, {
        "email": imail,
        "id": imail,
        "name": iname,
        "phone": iphone,
        "enroll": ienroll,
        "admin_dt": idate
      })
      .then((response) => {
        setPost(response.data);
      }).catch((error)=>{console.log(error)});
  }

  //getAll
  function getAllPost(){
    axios.get(getAllURL).then((response) => {
        setgetAll(response.data);
      }).catch((error)=>{console.log(error)});
    

    }
    useEffect(()=>{
        getAllPost()
    },[])


    //update


  // function updatePost() {
  //   axios
  //     .put(`${updtURL+"imail"}`, {
  //       "email": imail,
  //       "id": imail,
  //       "name": iname,
  //       "phone": iphone,
  //       "enroll": ienroll,
  //       "admin_dt": idate
  //     })
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }
    

    return(
        <div className="flex h-screen">
            <div>
                <Sidebar/>
            </div>

            <div>
                <Header/>
                <div className="bg-gray-100 h-screen">
          <div className="flex bg-transparent">
            <h1 className="mt-8 ml-8 text-2xl font-semibold">Students List</h1>
            <div className="ml-80 mt-8 pl-96">
              <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_192)">
                <path d="M12.6 12.375H1.39998C0.157481 12.375 -0.472519 13.8574 0.411231 14.7211L6.01123 20.2211C6.55811 20.7582 7.44623 20.7582 7.99311 20.2211L13.5931 14.7211C14.4681 13.8574 13.8425 12.375 12.6 12.375ZM6.99998 19.25L1.39998 13.75H12.6L6.99998 19.25ZM1.39998 9.625H12.6C13.8425 9.625 14.4725 8.14257 13.5887 7.2789L7.98873 1.7789C7.44186 1.24179 6.55373 1.24179 6.00686 1.7789L0.406856 7.2789C-0.468144 8.14257 0.157481 9.625 1.39998 9.625ZM6.99998 2.74999L12.6 8.24999H1.39998L6.99998 2.74999Z" fill="#FEAF00" />
              </g>
              <defs>
                <clipPath id="clip0_1_192">
                  <rect width="14" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg></div>
            <button onClick={setModalOpen} className="text-center ml-12 mt-4 bg-yellow-500 rounded-lg h-12 w-48">ADD NEW STUDENT</button>
            <ReactModal isOpen={modalOpen} style={customStyles}>
              <div className="bg-white rounded-lg">

                <div className="px-3">
                  <h3 className="text-gray-400">Name</h3>
                  <input id="name" onChange={(e) => setName(e.target.value)} className="border pr-32 h-12 w-80 rounded-sm border-gray-300 placeholder: text-sm placeholder:text-gray-300" type="text" placeholder=" Name"></input>
                </div>

                <div className="px-3">
                  <h3 className="text-gray-400">Email</h3>
                  <input id="email" onChange={(e) => setMail(e.target.value)} className="border pr-32 h-12 w-80 rounded-sm border-gray-300 placeholder: text-sm placeholder:text-gray-300" type="text" placeholder=" Email"></input>
                </div>

                <div className="px-3">
                  <h3 className="text-gray-400">Phone</h3>
                  <input id="phone" onChange={(e) => setPhone(e.target.value)} className="border pr-32 h-12 w-80 rounded-sm border-gray-300 placeholder: text-sm placeholder:text-gray-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                   type="number" min={10} max={10} placeholder=" Phone Number"></input>
                </div>

                <div className="px-3">
                  <h3 className="text-gray-400">Enroll Number</h3>
                  <input id="enroll" onChange={(e) => setEnroll(e.target.value)} className="border pr-32 h-12 w-80 rounded-sm border-gray-300 placeholder: text-sm placeholder:text-gray-300" type="text" placeholder=" Enroll Number"></input>
                </div>

                <div className="px-3">
                  <h3 className="text-gray-400">Date of Admission</h3>
                  <input id="admin_dt" onChange={(e) => setDate(e.target.value)} className="border pr-32 h-12 w-80 rounded-sm border-gray-300 placeholder: text-sm placeholder:text-gray-300" type="date" placeholder=" Date of Admission"></input> </div>
                <button className="border m-3 px-28 py-2 bg-yellow-500 text-white rounded-sm border-yellow-500"
                  onClick={() => {alert('added sucessfully');
                    setModalOpen(false);
                    {createPost()};{refresh()}
                  }} type="submit"> Add Student</button>
              </div> 
            </ReactModal>
          </div><br/>

          <div className="bg-gray-200 h-0.5 m-4 w-229"></div>

          <div className="grid grid-cols-7 m-2 mx-12 text-sm">
            <p></p>
            <p> Name</p>
            <p> Email</p>
            <p> Phone</p>
            <p> Enroll Number</p>
            <p> Date of Admission</p>
            <p></p>
          </div>
          <br/>
               {getAll.map((getEach)=> {
                    return (
        <Module profile={Profile} name={getEach.name} email={getEach.email} 
        phone={getEach.phone} enroll={getEach.enroll} admin_dt={getEach.admin_dt} />);})}

                </div>
            </div>
        </div>
    );
}

export default Students;