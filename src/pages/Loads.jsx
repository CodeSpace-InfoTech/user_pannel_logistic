import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openDialog } from '../redux/slices/dialogSlice';
import Swal from 'sweetalert2';
import { enUS } from 'date-fns/locale';
import feather from "feather-icons";
import { deleteLoad } from '../redux/loads';
import { getLoads } from '../redux/loads';
import TableHeader from '../Components/TableHeader';
import { TablePagination } from '@mui/material';
import dayjs from 'dayjs';
import LoadsCreateDialog from '../Components/Dialog/LoadsCreateDialog/LoadsCreateDialog';
import { toast } from 'react-toastify';
import AssignLoads from '../Components/Dialog/AssignLoads';
import $ from 'jquery';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from 'react-date-range';

const Loads = () => {
  const {loads, totalLoads} = useSelector(state => state.loads);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortBy, setSortBy] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState('desc');
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState("");
  const [assignDialogue ,setAssignDialogue]=useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [data, setData] = useState([]);
  const [date, setDate] = useState([]);
  const [startDate, setStartDate] = useState(dayjs(new Date()).format('YYYY-MM-DD'));
  const [endDate, setEndDate] = useState(dayjs(new Date()).format('YYYY-MM-DD'));
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
 
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  useEffect(() => {
    setData(loads);
  },[loads])

  useEffect(() => {
    feather.replace();
    
    $(document).on('click', (e) => {
      if (!$(e.target).closest('.dropdown').length) {
        setIsDropdownOpen(false);
      }
    });

    return () => {
      $(document).off('click');
    };
  }, [loads]);
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (date.length === 0) {
      setDate([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      ]);
    }
    $("#datePicker").removeClass("show");
    setData(loads);
  }, [date, loads]);

  useEffect(() => {
    dispatch(getLoads({
      page: page + 1,
      limit: rowsPerPage,
      sortBy,
      sortOrder,
      search,
      startDate: dayjs(startDate).format('YYYY-MM-DD'),
      endDate: dayjs(endDate).format('YYYY-MM-DD'),
      status
    }))
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error('Error fetching loads:', error);
      });
  }, [dispatch, page, rowsPerPage, sortBy, sortOrder, search, status]);

  const navigate = useNavigate();

  const handleAddLoad = () => {
    setAssignDialogue(false);
    dispatch(openDialog({ type: 'loadsCreate', data: null }));
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleEditLoad = (load) => {
    setAssignDialogue(false);
    if (load.status === 'pending') {
      dispatch(openDialog({ type: 'loadsCreate', data: load }));
    } else {
      toast.error('You can only edit pending loads');
    }
  };

  const handleAssignLoad = (load) => {
    if(load.status == 'pending' ) {
      setAssignDialogue(true);
      dispatch(openDialog({ type: 'assignLoad', data: load }));
    } else {
      toast.error('You can only assign pending loads');
    }
  };

  const handleDeleteLoad = (id) => {
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
        dispatch(deleteLoad(id))
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

  const handleViewLoad = (load) => {
    sessionStorage.setItem("loadId", load._id);
    navigate("load-details");
  }

  const handleStatusSelect = (status) => {
    setStatus(status);
    setIsDropdownOpen(false);
  };

  const toggleDatePicker = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  }

  return (
    <>
      <TableHeader title="Loads Tables" />
      <section className="content" >
        <div className="row">
          <div className="col-12">
            <div className="box h-screen">
              <div className="box-header align-items-center d-flex justify-content-between">
                <div>
                   <div className="date-picker-container position-relative">
                    <button 
                      className="btn btn-primary"
                      onClick={toggleDatePicker}
                    >
                      {dayjs(startDate).format('YYYY-MM-DD')} - {dayjs(endDate).format('YYYY-MM-DD')}
                    </button>
                    {isDatePickerOpen && (
                      <div className="position-absolute" style={{zIndex: 1000}}>
                        <DateRangePicker
                          onChange={(item) => {
                            if (dayjs(item.selection.startDate).isAfter(tomorrow) || 
                                dayjs(item.selection.endDate).isAfter(tomorrow)) {
                              toast.error("Cannot select future dates");
                              return;
                            }
                            
                            setDate([item.selection]);
                            const dayStart = dayjs(item.selection.startDate).format('YYYY-MM-DD');
                            const dayEnd = dayjs(item.selection.endDate).format('YYYY-MM-DD');
                            setPage(0);
                            setStartDate(dayStart);
                            setEndDate(dayEnd);
                            dispatch(getLoads({
                              page: 0,
                              limit: rowsPerPage,
                              sortBy,
                              sortOrder,
                              search,
                              startDate: dayStart,
                              endDate: dayEnd,
                              status
                            }))
                          }}
                          showSelectionPreview={true}
                          moveRangeOnFirstSelection={false}
                          ranges={date}
                          direction="horizontal"
                          locale={enUS}
                          maxDate={tomorrow}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div>
                <button
                  type="button"
                  className="btn btn-primary "
                  onClick={handleAddLoad}
                >
                  Add Load
                </button>
                </div>
              </div>
              <div className="box-body">
                <div className="table-responsive">
                  <table
                    id="example1"
                    className="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Load Number</th>
                        <th>Customer</th>
                        {/* <th>Origin</th> */}
                        {/* <th>Destination</th> */}
                        <th>Pickup Date/Time</th>
                        <th>Delivery Date/Time</th>
                        <th>Status</th>
                        {/* <th>Rate</th> */}
                        <th>Equipment</th>
                        <th>clockIn</th>
                        <th>Assign</th>
                        <th>Edit</th>
                        <th>View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loads.length > 0 && loads.map((load ,ind) => (
                        <tr key={load._id}>
                          <td>{(page * rowsPerPage) + (ind + 1)}</td>
                          <td>{load.loadNumber}</td>
                          {/* <td>{load.customerData?.name ? load.customerData?.name :load.customer?.name}</td> */}
                          {/* <td>{`${load.pickup?.location?.city}, ${load.pickup?.location?.state}`}</td> */}
                          <td>{`${load.delivery?.location?.city}, ${load.delivery?.location?.state}`}</td>
                          <td>
                            {dayjs(load.pickup?.date).format('YYYY-MM-DD')}
                            <br />
                            {`${dayjs(load.pickup?.timeWindow?.start).format('HH:mm')} - ${dayjs(load.pickup?.timeWindow?.end).format('HH:mm')}`}
                          </td>
                          <td>
                            {dayjs(load.delivery?.date).format('YYYY-MM-DD')}
                            <br />
                            {`${dayjs(load.delivery?.timeWindow?.start).format('HH:mm')} - ${dayjs(load.delivery?.timeWindow?.end).format('HH:mm')}`}
                          </td>
                          <td>
                            <span className={`badge ${
                              load.status === 'delivered' ? 'bg-success' :
                              load.status === 'in_transit' ? 'bg-primary' :
                              load.status === 'pending' ? 'bg-warning' : 
                              load.status === 'cancelled' ? 'bg-danger' :
                              load.status === 'assigned' ? 'bg-secondary' :
                              'bg-info'
                            }`}>
                              {load.status?.charAt(0).toUpperCase() + load.status?.slice(1)}
                            </span>
                          </td>
                          {/* <td>${load.price?.amount}</td> */}
                          <td>{load.equipment?.toUpperCase()}</td>
                          <td>
                            <button  onClick={() => handleAssignLoad(load)} className="btn btn-outline-success btn-sm me-2">
<i data-feather="clock" className="w-3 h-3"></i> 
                            </button>
                          </td>
                          <td>
                            <button 
                              className="btn btn-outline-warning btn-sm me-2"
                              onClick={() => handleAssignLoad(load)}
                            >
                              <i data-feather="briefcase" className="w-3 h-3"></i>
                            </button>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center align-items-center">
                              <button
                                className="btn btn-outline-info btn-sm me-2"
                                onClick={() => handleEditLoad(load)}
                              >
                                <i data-feather="edit" className="w-3 h-3"></i>
                              </button>
                            </div>
                          </td>
                          <td>
                            <button
                              className="btn btn-outline-primary btn-sm"
                              onClick={() => handleViewLoad(load)}
                            >
                              <i data-feather="eye" className="w-3 h-3"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <TablePagination
                component="div"
                count={totalLoads}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[5, 10, 25, 50]}
              />
            </div>
          </div>
        </div>
        {assignDialogue ? (
          <AssignLoads />
        ):
        (
          <LoadsCreateDialog />
        )
        }
      </section>
    </>
  );
};

export default Loads;
