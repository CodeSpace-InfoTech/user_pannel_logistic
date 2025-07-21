import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import feather from "feather-icons";

const Dashboard = () => {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <section className="content" style={{height:"100vh"}}>
      <div className="row">
        <div className="col-xl-3 col-lg-6 col-12">
          <div className="box">
            <div className="box-body">
              <div className="d-flex justify-content-between">
                <h2 className="my-0 fw-600 text-primary">10+</h2>
                <div className="w-40 h-40 bg-primary rounded-circle text-center fs-24 l-h-40">
                  <i className="fa fa-inbox"></i>
                </div>
              </div>
              <p className="fs-18 mt-10">Total Shelfs</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-12">
          <div className="box">
            <div className="box-body">
              <div className="d-flex justify-content-between">
                <h2 className="my-0 fw-600 text-warning">3432+</h2>
                <div className="w-40 h-40 bg-warning rounded-circle text-center fs-24 l-h-40">
                  <i className="fa fa-shopping-bag"></i>
                </div>
              </div>
              <p className="fs-18 mt-10">New Order</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-12">
          <div className="box">
            <div className="box-body">
              <div className="d-flex justify-content-between">
                <h2 className="my-0 fw-600 text-info">$ 532k</h2>
                <div className="w-40 h-40 bg-info rounded-circle text-center fs-24 l-h-40">
                  <i className="fa fa-dollar"></i>
                </div>
              </div>
              <p className="fs-18 mt-10">Total Sales</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-12">
          <div className="box">
            <div className="box-body">
              <div className="d-flex justify-content-between">
                <h2 className="my-0 fw-600 text-danger">2453</h2>
                <div className="w-40 h-40 bg-danger rounded-circle text-center fs-24 l-h-40">
                  <i className="fa fa-dropbox"></i>
                </div>
              </div>
              <p className="fs-18 mt-10">Units Sold</p>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-12">
          <div className="box">
            <div className="box-header">
              <h4 className="box-title">Top Cities</h4>
            </div>
            <div className="box-body py-0">
              <div id="topcities"></div>
            </div>
            <div className="box-footer">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <p className="mb-0 me-10">Show</p>
                  <div className="btn-group">
                    <button
                      className="btn btn-xs btn-primary-light dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      5 Result
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="#">
                        10 Result
                      </Link>
                      <Link className="dropdown-item" to="#">
                        15 Result
                      </Link>
                      <Link className="dropdown-item" to="#">
                        20 Result
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <p className="mb-0 me-10">Short By</p>
                  <div className="btn-group">
                    <button
                      className="btn btn-xs btn-primary-light dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      Order
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="#">
                        Delivery Date
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Payment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-12">
          <div className="box">
            <div className="box-header">
              <h4 className="box-title">Inventory Stock</h4>
            </div>
            <div className="box-body">
              <div id="recent_trend"></div>
            </div>
          </div>
        </div>
        {/* <div className="col-xl-8 col-12">
          <div className="box position-static">
            <div className="box-header">
              <h4 className="box-title">Section Overview</h4>
              <div className="box-controls pull-right">
                <input
                  className="form-control no-border bg-lightest"
                  id="e"
                  type="date"
                />
              </div>
            </div>
            <div className="box-body">
              <div className="row mb-20">
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="row g-0 row-cols-auto">
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">
                                  Row 3 #124578
                                </h4>
                                <p className="text-white">H60 x W60 x 20 KG</p>
                                <p className="mb-0 text-white-50">
                                  Delivered 06:15PM
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">
                                  Row 3 #124578
                                </h4>
                                <p className="text-white">H60 x W60 x 20 KG</p>
                                <p className="mb-0 text-white-50">
                                  Delivered 06:15PM
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">
                                  Row 3 #124578
                                </h4>
                                <p className="text-white">H60 x W60 x 20 KG</p>
                                <p className="mb-0 text-white-50">
                                  Delivered 06:15PM
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="row g-0 row-cols-auto">
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">
                                  Row 3 #124578
                                </h4>
                                <p className="text-white">H60 x W60 x 20 KG</p>
                                <p className="mb-0 text-white-50">
                                  Delivered 06:15PM
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">
                                  Row 3 #124578
                                </h4>
                                <p className="text-white">H60 x W60 x 20 KG</p>
                                <p className="mb-0 text-white-50">
                                  Delivered 06:15PM
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <div className="w-40 h-40 m-5"> </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="row g-0 row-cols-auto">
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <div className="w-40 h-40 m-5"> </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="row g-0 row-cols-auto">
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">
                                  Row 3 #124578
                                </h4>
                                <p className="text-white">H60 x W60 x 20 KG</p>
                                <p className="mb-0 text-white-50">
                                  Delivered 06:15PM
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">
                                  Row 3 #124578
                                </h4>
                                <p className="text-white">H60 x W60 x 20 KG</p>
                                <p className="mb-0 text-white-50">
                                  Delivered 06:15PM
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">
                                  Row 3 #124578
                                </h4>
                                <p className="text-white">H60 x W60 x 20 KG</p>
                                <p className="mb-0 text-white-50">
                                  Delivered 06:15PM
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">
                                  Row 3 #124578
                                </h4>
                                <p className="text-white">H60 x W60 x 20 KG</p>
                                <p className="mb-0 text-white-50">
                                  Delivered 06:15PM
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">
                                  Row 3 #124578
                                </h4>
                                <p className="text-white">H60 x W60 x 20 KG</p>
                                <p className="mb-0 text-white-50">
                                  Delivered 06:15PM
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">
                                  Row 3 #124578
                                </h4>
                                <p className="text-white">H60 x W60 x 20 KG</p>
                                <p className="mb-0 text-white-50">
                                  Delivered 06:15PM
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">
                                  Row 3 #124578
                                </h4>
                                <p className="text-white">H60 x W60 x 20 KG</p>
                                <p className="mb-0 text-white-50">
                                  Delivered 06:15PM
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="row g-0 row-cols-auto">
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">
                                  Row 3 #124578
                                </h4>
                                <p className="text-white">H60 x W60 x 20 KG</p>
                                <p className="mb-0 text-white-50">
                                  Delivered 06:15PM
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">
                                  Row 3 #124578
                                </h4>
                                <p className="text-white">H60 x W60 x 20 KG</p>
                                <p className="mb-0 text-white-50">
                                  Delivered 06:15PM
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">
                                  Row 3 #124578
                                </h4>
                                <p className="text-white">H60 x W60 x 20 KG</p>
                                <p className="mb-0 text-white-50">
                                  Delivered 06:15PM
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <div className="w-40 h-40 m-5"> </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="row g-0 row-cols-auto">
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">
                                  Row 3 #124578
                                </h4>
                                <p className="text-white">H60 x W60 x 20 KG</p>
                                <p className="mb-0 text-white-50">
                                  Delivered 06:15PM
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <div className="w-40 h-40 m-5"> </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">
                                  Row 3 #124578
                                </h4>
                                <p className="text-white">H60 x W60 x 20 KG</p>
                                <p className="mb-0 text-white-50">
                                  Delivered 06:15PM
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">
                                  Row 3 #124578
                                </h4>
                                <p className="text-white">H60 x W60 x 20 KG</p>
                                <p className="mb-0 text-white-50">
                                  Delivered 06:15PM
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">
                                  Row 3 #124578
                                </h4>
                                <p className="text-white">H60 x W60 x 20 KG</p>
                                <p className="mb-0 text-white-50">
                                  Delivered 06:15PM
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">
                                  Row 3 #124578
                                </h4>
                                <p className="text-white">H60 x W60 x 20 KG</p>
                                <p className="mb-0 text-white-50">
                                  Delivered 06:15PM
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning-light d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">Empty</h4>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="section-bx">
                        <Link
                          to="#"
                          className="w-40 h-40 m-5 bg-warning d-block rounded10"
                        >
                          <div className="bx-dec">
                            <div className="section-dec d-flex align-items-center">
                              <div className="box-img">
                                <img
                                  src="../images/box.png"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="dec">
                                <h4 className="text-white my-0">
                                  Row 3 #124578
                                </h4>
                                <p className="text-white">H60 x W60 x 20 KG</p>
                                <p className="mb-0 text-white-50">
                                  Delivered 06:15PM
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex mt-20">
                <div className="d-flex">
                  <div className="w-20 h-20 bg-warning-light rounded"></div>
                  <h5 className="mx-15 my-0">Free Place</h5>
                </div>
                <div className="d-flex">
                  <div className="w-20 h-20 bg-warning rounded"></div>
                  <h5 className="mx-15 my-0">Loaded Place</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-4">
          <div className="box overflow-h">
            <div className="box-header no-border">
              <h4 className="box-title">Revenue Overview</h4>
              <ul className="box-controls pull-right">
                <li className="dropdown">
                  <Link
                    data-bs-toggle="dropdown"
                    to="#"
                    className="btn btn-success-light px-10 base-font"
                  >
                    Export
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
                    <Link className="dropdown-item" to="#">
                      <i className="ti-import"></i> Import
                    </Link>
                    <Link className="dropdown-item" to="#">
                      <i className="ti-export"></i> Export
                    </Link>
                    <Link className="dropdown-item" to="#">
                      <i className="ti-printer"></i> Print
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="#">
                      <i className="ti-settings"></i> Settings
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className="box-body py-0">
              <div className="row">
                <div className="col-6">
                  <div className="py-10">
                    <div className="text-fade fw-600">Average Profit</div>
                    <div className="fs-18 fw-600">$150K</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="py-10">
                    <div className="text-fade fw-600">Revenue</div>
                    <div className="fs-18 fw-600">$15,250k</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="py-10">
                    <div className="text-fade fw-600">Taxes</div>
                    <div className="fs-18 fw-600">$50k</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="py-10">
                    <div className="text-fade fw-600">Yearly Income</div>
                    <div className="fs-18 fw-600">$44,850k</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-body p-0">
              <div id="revenue4" className="text-dark min-h-auto"></div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-12">
          <div className="box" id="bt-sellers">
            <div className="box-header">
              <h4 className="box-title">Best Sellers This Quarter</h4>
            </div>
            <div className="box-body">
              <div className="inner-user-div3">
                <div className="box-shadowed p-10 mb-10 rounded10">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="my-5">Kelly Bookshelf</h5>
                      <p className="mb-0">BR 8129</p>
                    </div>
                    <div>
                      <h3 className="my-5">124 Units</h3>
                      <p className="mb-0">
                        <span>$588 per unit</span> | <strong>$72,931</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="box-shadowed p-10 mb-10 rounded10">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="my-5">Darcy Side Table</h5>
                      <p className="mb-0">BR 3039</p>
                    </div>
                    <div>
                      <h3 className="my-5">107 Units</h3>
                      <p className="mb-0">
                        <span>$188 per unit</span> | <strong>$20,116</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="box-shadowed p-10 mb-10 rounded10">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="my-5">Clarissa Chaise</h5>
                      <p className="mb-0">BR 8129</p>
                    </div>
                    <div>
                      <h3 className="my-5">102 Units</h3>
                      <p className="mb-0">
                        <span>$980 per unit</span> | <strong>$99,960</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="box-shadowed p-10 mb-10 rounded10">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="my-5">Sheffield Bedframe</h5>
                      <p className="mb-0">BR 8129</p>
                    </div>
                    <div>
                      <h3 className="my-5">98 Units</h3>
                      <p className="mb-0">
                        <span>$140 per unit</span> | <strong>$37,200</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="box-shadowed p-10 mb-10 rounded10">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="my-5">Amelia Floorlamp</h5>
                      <p className="mb-0">BR 8129</p>
                    </div>
                    <div>
                      <h3 className="my-5">93 Units</h3>
                      <p className="mb-0">
                        <span>$110 per unit</span> | <strong>$10,230</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="box-shadowed p-10 mb-10 rounded10">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="my-5">Kelly Bookshelf</h5>
                      <p className="mb-0">BR 8129</p>
                    </div>
                    <div>
                      <h3 className="my-5">124 Units</h3>
                      <p className="mb-0">
                        <span>$588 per unit</span> | <strong>$72,931</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="box-shadowed p-10 mb-10 rounded10">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="my-5">Darcy Side Table</h5>
                      <p className="mb-0">BR 3039</p>
                    </div>
                    <div>
                      <h3 className="my-5">107 Units</h3>
                      <p className="mb-0">
                        <span>$188 per unit</span> | <strong>$20,116</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="box-shadowed p-10 mb-10 rounded10">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="my-5">Clarissa Chaise</h5>
                      <p className="mb-0">BR 8129</p>
                    </div>
                    <div>
                      <h3 className="my-5">102 Units</h3>
                      <p className="mb-0">
                        <span>$980 per unit</span> | <strong>$99,960</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="box-shadowed p-10 mb-10 rounded10">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="my-5">Sheffield Bedframe</h5>
                      <p className="mb-0">BR 8129</p>
                    </div>
                    <div>
                      <h3 className="my-5">98 Units</h3>
                      <p className="mb-0">
                        <span>$100 per unit</span> | <strong>$17,200</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="box-shadowed p-10 mb-10 rounded10">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="my-5">Amelia Floorlamp</h5>
                      <p className="mb-0">BR 8129</p>
                    </div>
                    <div>
                      <h3 className="my-5">93 Units</h3>
                      <p className="mb-0">
                        <span>$110 per unit</span> | <strong>$10,230</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-12">
          <div className="box">
            <div className="box-header with-border">
              <h4 className="box-title">List of Sections</h4>
            </div>
            <div className="box-body pt-0">
              <div className="table-responsive">
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th>Section</th>
                      <th>Date</th>
                      <th>Usage</th>
                      <th className="text-end">Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: '001', usage: 20, color: 'primary' },
                      { id: '002', usage: 28, color: 'primary' },
                      { id: '003', usage: 80, color: 'danger' },
                      { id: '004', usage: 50, color: 'warning' },
                      { id: '005', usage: 58, color: 'warning' },
                      { id: '006', usage: 36, color: 'success' }
                    ].map(section => (
                      <tr key={section.id}>
                        <td>
                          <Link to="#" onClick={(e) => e.preventDefault()}>
                            Section {section.id}
                          </Link>
                        </td>
                        <td>
                          <span className="text-muted text-nowrap">
                            <i className="fa fa-calendar-o text-success-light mx-5"></i>
                            05-12-2021
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mx-5">Used</span>
                            <div className="progress progress-xs w-p100 mt-0">
                              <div
                                className={`progress-bar bg-${section.color}`}
                                role="progressbar"
                                style={{width: `${section.usage}%`}}
                                aria-valuenow={section.usage}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              />
                            </div>
                          </div>
                        </td>
                        <td className="text-end">{section.usage}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box-header with-border">
              <h4 className="box-title">Average Inventory Turnaround</h4>
            </div>
            <div className="box-body py-0">
              <div id="overview_trend"></div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Dashboard;
