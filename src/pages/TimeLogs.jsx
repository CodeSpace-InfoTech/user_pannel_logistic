import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import feather from "feather-icons";
import TableHeader from "../Components/TableHeader";
import { getTimeLogs } from "../redux/timeLog";
import { TablePagination } from "@mui/material";

const TimeLogs = () => {
  const { timelogs, totalTimelogs } = useSelector((state) => state.timeLogs);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  // Re-initialize feather icons when timeLogs data changes
  useEffect(() => {
    feather.replace();
  }, [timelogs]);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('page', page)
    dispatch(getTimeLogs(page, rowsPerPage));
  }, [dispatch, page, rowsPerPage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableHeader title="Time Logs" />
      <section className="content" style={{ height: "100vh" }}>
        <div className="row">
          <div className="col-12">
            <div className="box" style={{ minHeight: "70vh" }}>
              <div className="box-body">
                <div className="table-responsive">
                  <table
                    id="example1"
                    className="table table-bordered table-striped text-center"
                  >
                    <thead>
                      <tr>
                        <th className="text-center">No.</th>
                        <th className="text-center">Employee Name</th>
                        <th className="text-center">Load Number</th>
                        <th className="text-center">Activity Type</th>
                        <th className="text-center">Description</th>
                        <th className="text-center">Start Time</th>
                        <th className="text-center">End Time</th>
                        <th className="text-center">Duration</th>
                        <th className="text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {timelogs?.length === 0 ? (
                        <tr>
                          <td colSpan="9" className="text-center">
                            No time logs found
                          </td>
                        </tr>
                      ) : (
                        timelogs?.map((log, index) => (
                          <tr key={log._id}>
                            <td>{index + 1}</td>
                            <td>{log.employeeData?.name}</td>
                            <td>{log.loadData?.loadNumber}</td>
                            <td>{log.activityType}</td>
                            <td>{log.description}</td>
                            <td>
                              {dayjs(log.startTime).format("DD/MM/YYYY HH:mm")}
                            </td>
                            <td>
                              {dayjs(log.endTime).format("DD/MM/YYYY HH:mm")}
                            </td>
                            <td>{log.duration} mins</td>
                            <td>
                              <span
                                className={`badge ${
                                  log.status === "completed"
                                    ? "bg-success"
                                    : "bg-warning"
                                }`}
                              >
                                {log.status}
                              </span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <TablePagination
                component="div"
                count={totalTimelogs}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[5, 10, 25, 50]}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TimeLogs;
