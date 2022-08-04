import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
const CreateEmployee = () => {
  const [company, setCompany] = useState([]);
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [conform_pass, setConfPassword] = useState("");
  const [profile, setProfile] = useState();
const navigate = useNavigate();

useEffect(() => {
  const fetchCompany = async () => {
    const response = await fetch("http://localhost:8000/api/v1/company", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        //    'Authorization': `Bearer ${localStorage.userToken}`
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTdmMDczNGM4MjhlNzg3OGY4NjE2ZjIwNjc2YjEzY2ZiYTJmZmFkM2ZkNjBkZTI3YjM4MDBjMjk0Y2EzZWU2NTRmYjczMzVlMDBkMDEzMDciLCJpYXQiOjE2NTk1Mzk4NTYuNjE2Mjg5LCJuYmYiOjE2NTk1Mzk4NTYuNjE2MjkzLCJleHAiOjE2OTEwNzU4NTYuNjEwMjAzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.lTqU_4p2gQiY1Synn4hCa4nhC76UnuLs4l66CKA-FI1G7KU1_lMv_4wCJ65lFzvol1tgpYsTvbkY3vMWZ2b0JBmPE4wwZTa3iX4M_VYeFqusPsywnAoKBioB_xf7CFRckTPdt7Pfka9dMPi7_q5Imj46mY_nxMgj6YcUrITiCxZzxz82ojs-qx3KfhSRiGpS5AW_FdPoQPtbT97bnmAFXNiIwtNvguRDIydaVG-uvYaBy8f-c1CpJYrrYzIdgp6yyQUWRwisxXx6Q5HoMq0vc5D0Klp-JQDyT2g_vmpoXW6z9JaqK8GVObVNYfTDkWGY5DOmQzBv5CA_UVFhBPU7_Yh5Fa9xI3D2KkxoMajWT87wfWZ23Ks3R_udR9KdGJrDpQ3bX1176nMWz7PdEJddVk_LU3VsokNjmwV0MKPqmczPvqZfjIUQkRm0IrKx-9V7VyZXQyuwsK1LkY1lRKXd1zJ0bDJUc5HuP9JrYA9U0Gw_QsjHcVRCd8_SMJMOqj6IyLC3jVAvz6OSecjSrghNWF5Q86-vqtEH4bc8JfqiljX9RE_kAjvd3cu2RXzSq4MsL-0lzbgctaZjAmQuxWMeNH3q7KHPA72B_dAZbP15M8ljNVS3Rd56JGDhXZw3VP2TIfC0Pvg4DnAI9Glqn-z_eOtQF-0f1CQfDOp8Ogf5XCk`,
      },
    });
    const data = await response.json();
    //console.log(data);
    setCompany(data.data);
  };
 fetchCompany();
}, []);



const addEmployee = async (fname,lname, email,phone,profile,password,conform_pass) => {
   await fetch('http://localhost:8000/api/v1/employee', {
      method: 'POST',
      body: JSON.stringify({
         first_name: fname,
         last_name:lname,
         email: email,
         phone: phone,
         company_id: 1,
       //  user_id: 7,
        // user_role: '',
         profile_image: profile,
         password: password,
         password_confirmation:conform_pass
      }),
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
         'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTdmMDczNGM4MjhlNzg3OGY4NjE2ZjIwNjc2YjEzY2ZiYTJmZmFkM2ZkNjBkZTI3YjM4MDBjMjk0Y2EzZWU2NTRmYjczMzVlMDBkMDEzMDciLCJpYXQiOjE2NTk1Mzk4NTYuNjE2Mjg5LCJuYmYiOjE2NTk1Mzk4NTYuNjE2MjkzLCJleHAiOjE2OTEwNzU4NTYuNjEwMjAzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.lTqU_4p2gQiY1Synn4hCa4nhC76UnuLs4l66CKA-FI1G7KU1_lMv_4wCJ65lFzvol1tgpYsTvbkY3vMWZ2b0JBmPE4wwZTa3iX4M_VYeFqusPsywnAoKBioB_xf7CFRckTPdt7Pfka9dMPi7_q5Imj46mY_nxMgj6YcUrITiCxZzxz82ojs-qx3KfhSRiGpS5AW_FdPoQPtbT97bnmAFXNiIwtNvguRDIydaVG-uvYaBy8f-c1CpJYrrYzIdgp6yyQUWRwisxXx6Q5HoMq0vc5D0Klp-JQDyT2g_vmpoXW6z9JaqK8GVObVNYfTDkWGY5DOmQzBv5CA_UVFhBPU7_Yh5Fa9xI3D2KkxoMajWT87wfWZ23Ks3R_udR9KdGJrDpQ3bX1176nMWz7PdEJddVk_LU3VsokNjmwV0MKPqmczPvqZfjIUQkRm0IrKx-9V7VyZXQyuwsK1LkY1lRKXd1zJ0bDJUc5HuP9JrYA9U0Gw_QsjHcVRCd8_SMJMOqj6IyLC3jVAvz6OSecjSrghNWF5Q86-vqtEH4bc8JfqiljX9RE_kAjvd3cu2RXzSq4MsL-0lzbgctaZjAmQuxWMeNH3q7KHPA72B_dAZbP15M8ljNVS3Rd56JGDhXZw3VP2TIfC0Pvg4DnAI9Glqn-z_eOtQF-0f1CQfDOp8Ogf5XCk`
      },
   })
      .then((response) => response.json())
      .then((data) => {    
         setFName('');
         setLName('');
         setEmail('');
         setPhone('');
         navigate("/employee");
      })
      .catch((err) => {
         console.log(err.message);
      });
};

const handleSubmit = (e) => {
   e.preventDefault();
   addEmployee(fname, lname,email,phone,profile,password,conform_pass);
};    


return (
   <div className="app">
      <div className="add-post-container">
         <form onSubmit={handleSubmit}>
            <input type="text" className="form-control" value={fname} placeholder="First Name"
               onChange={(e) => setFName(e.target.value)}
            />
            <br/>
            <input type="text" className="form-control" value={lname} placeholder="Last Name"
               onChange={(e) => setLName(e.target.value)}
            />
            <br/>
            <select className="form-control" value={company} onChange={setCompany}>
                        {/* onChange={(event) =>{setCompany(event.target.value)}} */}                   
                          {company.length > 0 && company.map((row) => (
                              <option value={row.id}>{row.name}</option>
                            ))}
                        </select>
                 <br/>
             <input type="text" className="form-control" value={email} placeholder="Email"
               onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
            <input type="text" className="form-control" value={phone} placeholder="Telephone"
               onChange={(e) => setPhone(e.target.value)}
            />
            <br/>
            <input type="file" className="form-control" value={profile} label="profile"
             onChange={(e) => setProfile(e.target.value)}
            />
            <br/>
            <input type="password" className="form-control" value={password} placeholder="Password"
               onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            <input type="password" className="form-control" value={conform_pass} placeholder="Conform Password"
               onChange={(e) => setConfPassword(e.target.value)}
            />
            <br/>
            <button type="submit" className='btn btn-primary' > Add Employee</button>
            
         </form>
      </div>
   </div>
);
};

export default CreateEmployee;