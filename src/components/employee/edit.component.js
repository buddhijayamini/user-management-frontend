import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';

export default function EditEmployee() {
  const navigate = useNavigate();

  const { id } = useParams();
  
  const [company, setEmployee] = useState([]);
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profile, setProfile] = useState('');
  const [validationError,setValidationError] = useState({})

  useEffect(() => {
    const fetchEmployee = async () => {
       const response = await fetch(`http://localhost:8000/api/v/employee/${id}`, {
            method: 'GET',
            headers: {
               'Content-type': 'application/json; charset=UTF-8',
            //    'Authorization': `Bearer ${localStorage.userToken}`
               'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTdmMDczNGM4MjhlNzg3OGY4NjE2ZjIwNjc2YjEzY2ZiYTJmZmFkM2ZkNjBkZTI3YjM4MDBjMjk0Y2EzZWU2NTRmYjczMzVlMDBkMDEzMDciLCJpYXQiOjE2NTk1Mzk4NTYuNjE2Mjg5LCJuYmYiOjE2NTk1Mzk4NTYuNjE2MjkzLCJleHAiOjE2OTEwNzU4NTYuNjEwMjAzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.lTqU_4p2gQiY1Synn4hCa4nhC76UnuLs4l66CKA-FI1G7KU1_lMv_4wCJ65lFzvol1tgpYsTvbkY3vMWZ2b0JBmPE4wwZTa3iX4M_VYeFqusPsywnAoKBioB_xf7CFRckTPdt7Pfka9dMPi7_q5Imj46mY_nxMgj6YcUrITiCxZzxz82ojs-qx3KfhSRiGpS5AW_FdPoQPtbT97bnmAFXNiIwtNvguRDIydaVG-uvYaBy8f-c1CpJYrrYzIdgp6yyQUWRwisxXx6Q5HoMq0vc5D0Klp-JQDyT2g_vmpoXW6z9JaqK8GVObVNYfTDkWGY5DOmQzBv5CA_UVFhBPU7_Yh5Fa9xI3D2KkxoMajWT87wfWZ23Ks3R_udR9KdGJrDpQ3bX1176nMWz7PdEJddVk_LU3VsokNjmwV0MKPqmczPvqZfjIUQkRm0IrKx-9V7VyZXQyuwsK1LkY1lRKXd1zJ0bDJUc5HuP9JrYA9U0Gw_QsjHcVRCd8_SMJMOqj6IyLC3jVAvz6OSecjSrghNWF5Q86-vqtEH4bc8JfqiljX9RE_kAjvd3cu2RXzSq4MsL-0lzbgctaZjAmQuxWMeNH3q7KHPA72B_dAZbP15M8ljNVS3Rd56JGDhXZw3VP2TIfC0Pvg4DnAI9Glqn-z_eOtQF-0f1CQfDOp8Ogf5XCk`
            },}
       );
       const data = await response.json();
       console.log(data);
        //setName(data.data.name)
      // setEmail(data.data.email)
       setEmployee(data.data);
    };
    fetchEmployee();
 }, []);

   
  const changeHandler = (event) => {
		setProfile(event.target.files[0]);
	};

  const updateEmployee = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:8000/api/v1/employee/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            first_name: fname,
            last_name: lname,
            email: email,
            phone: phone,
            profile_image: profile,
            company_id: company
         }),
        headers: {
           'Content-type': 'application/json; charset=UTF-8',
           'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTdmMDczNGM4MjhlNzg3OGY4NjE2ZjIwNjc2YjEzY2ZiYTJmZmFkM2ZkNjBkZTI3YjM4MDBjMjk0Y2EzZWU2NTRmYjczMzVlMDBkMDEzMDciLCJpYXQiOjE2NTk1Mzk4NTYuNjE2Mjg5LCJuYmYiOjE2NTk1Mzk4NTYuNjE2MjkzLCJleHAiOjE2OTEwNzU4NTYuNjEwMjAzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.lTqU_4p2gQiY1Synn4hCa4nhC76UnuLs4l66CKA-FI1G7KU1_lMv_4wCJ65lFzvol1tgpYsTvbkY3vMWZ2b0JBmPE4wwZTa3iX4M_VYeFqusPsywnAoKBioB_xf7CFRckTPdt7Pfka9dMPi7_q5Imj46mY_nxMgj6YcUrITiCxZzxz82ojs-qx3KfhSRiGpS5AW_FdPoQPtbT97bnmAFXNiIwtNvguRDIydaVG-uvYaBy8f-c1CpJYrrYzIdgp6yyQUWRwisxXx6Q5HoMq0vc5D0Klp-JQDyT2g_vmpoXW6z9JaqK8GVObVNYfTDkWGY5DOmQzBv5CA_UVFhBPU7_Yh5Fa9xI3D2KkxoMajWT87wfWZ23Ks3R_udR9KdGJrDpQ3bX1176nMWz7PdEJddVk_LU3VsokNjmwV0MKPqmczPvqZfjIUQkRm0IrKx-9V7VyZXQyuwsK1LkY1lRKXd1zJ0bDJUc5HuP9JrYA9U0Gw_QsjHcVRCd8_SMJMOqj6IyLC3jVAvz6OSecjSrghNWF5Q86-vqtEH4bc8JfqiljX9RE_kAjvd3cu2RXzSq4MsL-0lzbgctaZjAmQuxWMeNH3q7KHPA72B_dAZbP15M8ljNVS3Rd56JGDhXZw3VP2TIfC0Pvg4DnAI9Glqn-z_eOtQF-0f1CQfDOp8Ogf5XCk`
        },
     })
        .then((response) => response.json())
        .then((data) => {    
          setFName("");
          setLName("");
          setEmail("");
          setPhone("");
          setProfile("");
           Swal.fire({
                icon:"success",
                text:data.message
              });
           navigate("/company");
        })
        .catch((err) => {
           console.log(err.message);
           if(err.status===422){
                setValidationError(err.data.errors)
              }else{
                Swal.fire({
                  text:err.message,
                  icon:"error"
                })
              }
        });
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Update Employee</h4>
              <hr />
              <div className="form-wrapper">
                {
                  Object.keys(validationError).length > 0 && (
                    <div className="row">
                      <div className="col-12">
                        <div className="alert alert-danger">
                          <ul className="mb-0">
                            {
                              Object.entries(validationError).map(([key, value])=>(
                                <li key={key}>{value}</li>   
                              ))
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                }
                <Form onSubmit={updateEmployee}>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Name">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" required value={fname} onChange={(event)=>{
                              setFName(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Name">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" required value={lname} onChange={(event)=>{
                              setLName(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  <Row>
                      <Col>
                        <Form.Group controlId="Email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={(event)=>{
                              setEmail(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>
                  </Row>
                  <Row>
                      <Col>
                        <Form.Group controlId="telephone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="tel" value={phone} onChange={(event)=>{
                              setPhone(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="logo" className="mb-3">
                        <Form.Label>Profile Image</Form.Label>
                        <Form.Control type="file" onChange={changeHandler} />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
                    Update
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}