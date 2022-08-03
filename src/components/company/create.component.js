import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
const CreateCompany = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [telephone, setTelehone] = useState('');
const [logo, setLogo] = useState();
const [cover, setCover] = useState('');
const [web, setWeb] = useState('');
const navigate = useNavigate();

const addCompany = async (name, email,telephone,logo,cover,web) => {
   await fetch('http://localhost:8000/api/v1/company', {
      method: 'POST',
      body: JSON.stringify({
         name: name,
         email: email,
         telephone: telephone,
         logo: logo,
         cover_images: cover,
         website: web
      }),
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
         'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTdmMDczNGM4MjhlNzg3OGY4NjE2ZjIwNjc2YjEzY2ZiYTJmZmFkM2ZkNjBkZTI3YjM4MDBjMjk0Y2EzZWU2NTRmYjczMzVlMDBkMDEzMDciLCJpYXQiOjE2NTk1Mzk4NTYuNjE2Mjg5LCJuYmYiOjE2NTk1Mzk4NTYuNjE2MjkzLCJleHAiOjE2OTEwNzU4NTYuNjEwMjAzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.lTqU_4p2gQiY1Synn4hCa4nhC76UnuLs4l66CKA-FI1G7KU1_lMv_4wCJ65lFzvol1tgpYsTvbkY3vMWZ2b0JBmPE4wwZTa3iX4M_VYeFqusPsywnAoKBioB_xf7CFRckTPdt7Pfka9dMPi7_q5Imj46mY_nxMgj6YcUrITiCxZzxz82ojs-qx3KfhSRiGpS5AW_FdPoQPtbT97bnmAFXNiIwtNvguRDIydaVG-uvYaBy8f-c1CpJYrrYzIdgp6yyQUWRwisxXx6Q5HoMq0vc5D0Klp-JQDyT2g_vmpoXW6z9JaqK8GVObVNYfTDkWGY5DOmQzBv5CA_UVFhBPU7_Yh5Fa9xI3D2KkxoMajWT87wfWZ23Ks3R_udR9KdGJrDpQ3bX1176nMWz7PdEJddVk_LU3VsokNjmwV0MKPqmczPvqZfjIUQkRm0IrKx-9V7VyZXQyuwsK1LkY1lRKXd1zJ0bDJUc5HuP9JrYA9U0Gw_QsjHcVRCd8_SMJMOqj6IyLC3jVAvz6OSecjSrghNWF5Q86-vqtEH4bc8JfqiljX9RE_kAjvd3cu2RXzSq4MsL-0lzbgctaZjAmQuxWMeNH3q7KHPA72B_dAZbP15M8ljNVS3Rd56JGDhXZw3VP2TIfC0Pvg4DnAI9Glqn-z_eOtQF-0f1CQfDOp8Ogf5XCk`
      },
   })
      .then((response) => response.json())
      .then((data) => {    
         setName('');
         setEmail('');
         setTelehone('');
         setLogo('');
         setCover('');
         setWeb('');
         navigate("/company");
      })
      .catch((err) => {
         console.log(err.message);
      });
};

const handleSubmit = (e) => {
   e.preventDefault();
   addCompany(name, email,telephone,logo,cover,web);
};    


return (
   <div className="app">
      <div className="add-post-container">
         <form onSubmit={handleSubmit}>
            <input type="text" className="form-control" value={name} placeholder="Name"
               onChange={(e) => setName(e.target.value)}
            />
            <br/>
             <input type="text" className="form-control" value={email} placeholder="Email"
               onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
            <input type="text" className="form-control" value={telephone} placeholder="Telehone"
               onChange={(e) => setTelehone(e.target.value)}
            />
            <br/>
            <input type="file" className="form-control" value={logo} label="Logo"
             onChange={(e) => setLogo(e.target.value)}
            />
            <br/>
            <input type="file" className="form-control" value={cover} label="Cover Image"
               onChange={(e) => setCover(e.target.value)}
            />
            <br/>
            <input type="url" className="form-control" value={web} placeholder="WebSite"
               onChange={(e) => setWeb(e.target.value)}
            />
            <br/>
            <button type="submit" className='btn btn-primary' > Add Company</button>
            
         </form>
      </div>
   </div>
);
};

export default CreateCompany;