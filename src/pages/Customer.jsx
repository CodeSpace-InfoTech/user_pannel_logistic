import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openDialog } from '../redux/slices/dialogSlice';
import Swal from 'sweetalert2';
import feather from "feather-icons";
import dayjs from 'dayjs';
import { deleteCustomer, getCustomers } from '../redux/customer';
import CustomerDialog from '../Components/Dialog/CustomerDialog';
import { TablePagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Pagination } from '@mui/material';
import TableHeader from '../Components/TableHeader';

const Customer = () => {
  const { customers, totalCustomers } = useSelector(state => state.customer);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
    const [sortBy, setSortBy] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState('desc');
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    status: '',
    company: '',
    paymentTerms: '',
    minCredit: '',
    maxCredit: ''
  });

  useEffect(() => {
    feather.replace();
  }, [customers]);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getCustomers({
      page: page + 1,
      limit: rowsPerPage,
      sortBy,
      sortOrder,
      search,
      ...filters
    }))
    .unwrap()
    .then(response => {
      if (!response) {
        throw new Error('Failed to fetch customers');
      }
    })
    .catch(error => {
      console.error('Error fetching customers:', error);
    });
  }, [dispatch, page, rowsPerPage, sortBy, sortOrder, search, filters]);

  const handleAddCustomer = () => {
    dispatch(openDialog({ type: '', data: null }));
  };

  const handleEditCustomer = (customer) => {
    dispatch(openDialog({ type: 'edit', data: customer }));
  };

  const handleDeleteCustomer = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCustomer(id));
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
     <TableHeader title="Customer Tables" />
      <section className="content" style={{ height: '100vh' }}>
        <div className="row">
          <div className="col-12">
            <div className="box">
              <div className="box-header d-flex justify-content-end p-3">
                <button
                  variant="contained"
                  color="primary"
                          className="btn btn-primary mt-10"
                  onClick={handleAddCustomer}
                >
                  Add Customer
                </button>
              </div>
              <div className='box-body'>
               
                <div className="table-responsive ">
                    <table
                      id="example1"
                      className="table table-bordered table-striped text-center"
                    >
                      <thead>
                        <tr>
                          <th className="text-center">No</th>
                          <th className="text-center">Name</th>
                          <th className="text-center">Email</th>
                          <th className="text-center">Company</th>
                          <th className="text-center">Payment Terms</th>
                          <th className="text-center">Phone</th>
                          <th className="text-center">Credit Limit</th>
                          <th className="text-center">Status</th>
                          <th className="text-center">Created Date</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {customers.map((customer, index) => (
                          <tr key={customer._id}>
                            <td className="text-center">{index + 1}</td>
                            <td className="text-center text-capitalize">{customer.name}</td>
                            <td className="text-center">{customer.email}</td>
                            <td className="text-center text-capitalize">{customer.company}</td>
                            <td className="text-center">{customer.paymentTerms}</td>
                            <td className="text-center">{customer.phone}</td>
                               <td className="text-center">
                             
                                {customer.creditLimit}
                            
                            </td>
                            <td className="text-center">
                              <span className={`badge ${customer.status === 'active' ? 'badge-success' : 'badge-danger'}`}>
                                {customer.status}
                              </span>
                            </td>
                            <td className='text-center'>
{dayjs(customer.createdAt).format('DD/MM/YYYY')}
                            </td>
                         
                            <td>
                              <div className="d-flex justify-content-center align-items-center">
                                <button
                                  className="btn btn-outline-info btn-sm me-2"
                                  onClick={() => handleEditCustomer(customer)}
                                >
                                  <i data-feather="edit" className="w-4 h-4"></i>
                                </button>
                                <button
                                  className="btn btn-outline-danger btn-sm"
                                  onClick={() => handleDeleteCustomer(customer._id)}
                                >
                                  <i data-feather="trash-2" className="w-4 h-4"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
              </div>
              <TablePagination
                component="div"
                count={totalCustomers}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[5, 10, 25, 50]}
              />
              
            </div>
          </div>
        </div>
        <CustomerDialog />
      </section>
    </>
  );
};

export default Customer;
