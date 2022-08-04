import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

export default function List() {

    const [employee, setEmployee] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployee = async () => {
           const response = await fetch(
              'http://localhost:8000/api/v1/employee', {
                method: 'GET',
                headers: {
                   'Content-type': 'application/json; charset=UTF-8',
                //    'Authorization': `Bearer ${localStorage.userToken}`
                   'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTdmMDczNGM4MjhlNzg3OGY4NjE2ZjIwNjc2YjEzY2ZiYTJmZmFkM2ZkNjBkZTI3YjM4MDBjMjk0Y2EzZWU2NTRmYjczMzVlMDBkMDEzMDciLCJpYXQiOjE2NTk1Mzk4NTYuNjE2Mjg5LCJuYmYiOjE2NTk1Mzk4NTYuNjE2MjkzLCJleHAiOjE2OTEwNzU4NTYuNjEwMjAzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.lTqU_4p2gQiY1Synn4hCa4nhC76UnuLs4l66CKA-FI1G7KU1_lMv_4wCJ65lFzvol1tgpYsTvbkY3vMWZ2b0JBmPE4wwZTa3iX4M_VYeFqusPsywnAoKBioB_xf7CFRckTPdt7Pfka9dMPi7_q5Imj46mY_nxMgj6YcUrITiCxZzxz82ojs-qx3KfhSRiGpS5AW_FdPoQPtbT97bnmAFXNiIwtNvguRDIydaVG-uvYaBy8f-c1CpJYrrYzIdgp6yyQUWRwisxXx6Q5HoMq0vc5D0Klp-JQDyT2g_vmpoXW6z9JaqK8GVObVNYfTDkWGY5DOmQzBv5CA_UVFhBPU7_Yh5Fa9xI3D2KkxoMajWT87wfWZ23Ks3R_udR9KdGJrDpQ3bX1176nMWz7PdEJddVk_LU3VsokNjmwV0MKPqmczPvqZfjIUQkRm0IrKx-9V7VyZXQyuwsK1LkY1lRKXd1zJ0bDJUc5HuP9JrYA9U0Gw_QsjHcVRCd8_SMJMOqj6IyLC3jVAvz6OSecjSrghNWF5Q86-vqtEH4bc8JfqiljX9RE_kAjvd3cu2RXzSq4MsL-0lzbgctaZjAmQuxWMeNH3q7KHPA72B_dAZbP15M8ljNVS3Rd56JGDhXZw3VP2TIfC0Pvg4DnAI9Glqn-z_eOtQF-0f1CQfDOp8Ogf5XCk`
                },}
           );
           const data = await response.json();
           setEmployee(data.data);
        };
        fetchEmployee();
     }, []);
    
    const deleteEmployee = async (id) => {
        const isConfirm = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
             return  result.isConfirmed;
          });

          if(!isConfirm){
            return;
          }

           await fetch(
            `http://localhost:8000/api/v1/employee/${id}`, {
              method: 'DELETE',
              headers: {
                 'Content-type': 'application/json; charset=UTF-8',
              //    'Authorization': `Bearer ${localStorage.userToken}`
                 'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTdmMDczNGM4MjhlNzg3OGY4NjE2ZjIwNjc2YjEzY2ZiYTJmZmFkM2ZkNjBkZTI3YjM4MDBjMjk0Y2EzZWU2NTRmYjczMzVlMDBkMDEzMDciLCJpYXQiOjE2NTk1Mzk4NTYuNjE2Mjg5LCJuYmYiOjE2NTk1Mzk4NTYuNjE2MjkzLCJleHAiOjE2OTEwNzU4NTYuNjEwMjAzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.lTqU_4p2gQiY1Synn4hCa4nhC76UnuLs4l66CKA-FI1G7KU1_lMv_4wCJ65lFzvol1tgpYsTvbkY3vMWZ2b0JBmPE4wwZTa3iX4M_VYeFqusPsywnAoKBioB_xf7CFRckTPdt7Pfka9dMPi7_q5Imj46mY_nxMgj6YcUrITiCxZzxz82ojs-qx3KfhSRiGpS5AW_FdPoQPtbT97bnmAFXNiIwtNvguRDIydaVG-uvYaBy8f-c1CpJYrrYzIdgp6yyQUWRwisxXx6Q5HoMq0vc5D0Klp-JQDyT2g_vmpoXW6z9JaqK8GVObVNYfTDkWGY5DOmQzBv5CA_UVFhBPU7_Yh5Fa9xI3D2KkxoMajWT87wfWZ23Ks3R_udR9KdGJrDpQ3bX1176nMWz7PdEJddVk_LU3VsokNjmwV0MKPqmczPvqZfjIUQkRm0IrKx-9V7VyZXQyuwsK1LkY1lRKXd1zJ0bDJUc5HuP9JrYA9U0Gw_QsjHcVRCd8_SMJMOqj6IyLC3jVAvz6OSecjSrghNWF5Q86-vqtEH4bc8JfqiljX9RE_kAjvd3cu2RXzSq4MsL-0lzbgctaZjAmQuxWMeNH3q7KHPA72B_dAZbP15M8ljNVS3Rd56JGDhXZw3VP2TIfC0Pvg4DnAI9Glqn-z_eOtQF-0f1CQfDOp8Ogf5XCk`
              },}
          ).then(({data})=>{
            Swal.fire({
                icon:"success",
                text:data.message
            });
            //navigate("/company");
           // window.location.reload();
          }).catch(({response:{data}})=>{
            Swal.fire({
                text:data.message,
                icon:"error"
            })
          })
    }

    return (
      <div className="container">
          <div className="row">
            <div className='col-12'>
                <Link className='btn btn-primary mb-2 float-end' to={"/employee/create"}>
                    Create Employee
                </Link>
            </div>
            <div className="col-12">
                <div className="card card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered mb-0 text-center">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Company</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Profile Image</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employee.length > 0 && (
                                        employee.map((row, key)=>(
                                            <tr key={key}>
                                                <td>{row.first_name}  {row.last_name}</td>
                                                <th>{row.company.name}</th>
                                                <td>{row.email}</td>
                                                <td>{row.phone}</td>
                                                <td><img src='profiles/${row.profile_image}'/></td>
                                                <td>
                                                    <Link to={`/employee/edit/${row.id}`} className='btn btn-success me-2'>
                                                        Edit
                                                    </Link>
                                                    <Button variant="danger" onClick={()=>deleteEmployee(row.id)}>
                                                        Delete
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </div>
      </div>
    )
}