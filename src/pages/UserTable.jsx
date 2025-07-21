import React, { useEffect, useState } from 'react'
import TableHeader from '../Components/TableHeader'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUsers } from '../redux/user';
import Swal from 'sweetalert2';
import feather from "feather-icons";
import dayjs from 'dayjs';
import { TablePagination } from '@mui/material';
import UserDialog from '../Components/Dialog/UserDialog';
import { openDialog } from '../redux/slices/dialogSlice';

const UserTable = () => {
    const [page, setPage] = useState(0); // Changed to 0-based for MUI pagination
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const { users, totalUsers } = useSelector(state => state.users);
    const dispatch = useDispatch();


    console.log("user" ,users)
    useEffect(() => {
        feather.replace();
    }, [users]);
  
    useEffect(() => {
        dispatch(getUsers({ 
            page: page + 1,
            limit: rowsPerPage 
        }));
    }, [page, rowsPerPage, dispatch]);

    const handleAddUser = () => {
   dispatch(openDialog({ type: 'add', data: null })); 
    }

    const handleEditUser = (user) => {
          dispatch(openDialog({ type: 'edit', data: user })); 
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteUser(id));
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <>
            <TableHeader title="User Tables" />
            <section className="content" style={{ height: '100vh' }}>
                <div className="row">
                    <div className="col-12">
                        <div className="box">
                            <div className="box-header d-flex justify-content-end align-items-center">
                              
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleAddUser}
                                >
                                    Add User
                                </button>
                            </div>
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
                                                <th className="text-center">Email</th>
                                                <th className="text-center">Role Name</th>
                                                <th className='text-center'>Role Description</th>
                                                <th className="text-center">Created Date</th>
                                                <th className="text-center">Role Status</th>
                                                <th ClassName="text-center">View Profile</th>
                                                <th className="text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users?.length === 0 ? (
                                                <tr>
                                                    <td colSpan="6" className="text-center">No employees found</td>
                                                </tr>
                                            ) : (
                                                users?.map((user, index) => (
                                                    <tr key={user._id}>
                                                        <td>{page * rowsPerPage + index + 1}</td>
                                                        <td className="text-capitalize">{user.name}</td>
                                                        <td>{user.email}</td>

                                                        <td className="text-capitalize">{user.roleData.name}</td>
                                                        <td>{user.roleData.description}</td>
                                                         <td>{dayjs(user.joinedAt).format('DD/MM/YYYY')}</td>
                                                        <td>
                                                            <span className={`badge text-capitalize ${user.roleData.status === 'active' ? 'badge-success' : 'badge-danger'}`}>
                                                                {user.roleData.status}
                                                            </span>
                                                        </td>
                                                       
                                                        <td>
                                                            <button
                                                                className="btn btn-outline-primary btn-sm me-2"
                                                                onClick={() => handleEditUser(user)}
                                                            >
                                                                <i data-feather="user" className="w-4 h-4"></i>
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex justify-content-center align-items-center">
                                                                <button
                                                                    className="btn btn-outline-info btn-sm me-2"
                                                                    onClick={() => handleEditUser(user)}
                                                                >
                                                                    <i data-feather="edit" className="w-4 h-4"></i>
                                                                </button>
                                                                <button
                                                                    className="btn btn-outline-danger btn-sm"
                                                                    onClick={() => handleDelete(user._id)}
                                                                >
                                                                    <i data-feather="trash-2" className="w-4 h-4"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                <TablePagination
                                    component="div"
                                    count={totalUsers}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    rowsPerPage={rowsPerPage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    rowsPerPageOptions={[5, 10, 25, 50]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <UserDialog />
            </section>
        </>
    )
}

export default UserTable