import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openDialog } from '../redux/slices/dialogSlice';
import Swal from 'sweetalert2';
import EmployeeDialog from '../Components/Dialog/EmployeeDialog';
import { deleteEmployee, getEmployees } from '../redux/employees';
import feather from "feather-icons";
import dayjs from 'dayjs';
import TableHeader from '../Components/TableHeader';
import AssignLoads from '../Components/Dialog/AssignLoads';

const Employees = () => {
      const {employees} = useSelector(state => state.employees);
 

    // Re-initialize feather icons when employees data changes
    useEffect(() => {
      feather.replace();
    }, [employees]);

    const dispatch = useDispatch();

  
 

    useEffect(() => {
      dispatch(getEmployees())
        .then(response => {
          console.log(response);
          if (response) {
            // Handle the response, e.g., update the state with the fetched data
            feather.replace(); // Re-initialize icons after data loads
          }
        })
        .catch(error => {
          console.error('Error fetching employees:', error);
        });
    }, [dispatch]);

    const handleAddEmployee= () => {
      dispatch(openDialog({ type: '', data: null })); 
    };

    const handleEditEmployee= (employee) => {
      dispatch(openDialog({ type: 'edit', data: employee })); 
    };

    const handleDelete = (id) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        const response = dispatch(deleteEmployee(id)).then((res) => {
          console.log(res)
          feather.replace(); // Re-initialize icons after delete
        }).catch((error) => {
          console.log('error', error)
        })
        console.log('response', response)
        if (result.isConfirmed) {
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        }
      });
    };

    return (
      <>
       <TableHeader title="Employee Tables" />
        <section className="content" style={{ height: '100vh' }}>
          <div className="row">
            <div className="col-12">
              <div className="box">
              
                <div className="box-body">
                  <div className="table-responsive">
                    <table
                      id="example1"
                      className="table table-bordered table-striped text-center"
                    >
                      <thead>
                        <tr>
                          <th className="text-center">No.</th>
                          <th className="text-center">Name</th>
                          <th className="text-center">Position</th>
                          <th className="text-center">Phone</th>
                          <th className="text-center">Created Date</th>
                  
                        </tr>
                      </thead>
                      <tbody>
                        {employees.length === 0 ? (
                          <tr>
                            <td colSpan="6" className="text-center">No employees found</td>
                          </tr>
                        ) : (
                          employees.map((employee, index) => (
                            <tr key={employee._id}>
                              <td>{index + 1}</td>
                              <td>{employee.name}</td>
                              <td>{employee.position}</td>
                              <td>{employee.phone}</td>
                              <td>{dayjs(employee.joinedAt).format('DD/MM/YYYY')}</td>
                              
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <EmployeeDialog />
          <AssignLoads />
        </section>
      </>
    )
}

export default Employees