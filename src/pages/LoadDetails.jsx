import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLoadDetails } from '../redux/loads'
import { useParams } from 'react-router-dom'

const LoadDetails = () => {
    const {LoadDetails} = useSelector((state) => state.loads)
    console.log('load', LoadDetails)
const loadId = sessionStorage.getItem("loadId");

    const dispatch = useDispatch();
    useEffect(() => {
      if(loadId){

        dispatch(getLoadDetails(loadId));
      }

    } ,[loadId])
  return (
<div className="container py-5">
  <div className="card shadow-lg rounded-4 p-4">
    <h1 className="h3 mb-4 fw-bold border-start border-4 ps-3 text-dark">
      # Load Details - {LoadDetails?.loadNumber}
    </h1>

    <div className="row g-4">

      {/* Status and Price */}
      <div className="col-md-6">
        <div className="card border-start border  shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-primary fw-semibold mb-3">Status & Price</h5>
            <p className="card-text mb-2">
              Status: 
              <span className={`badge ms-2 ${
                LoadDetails.status === 'delivered' ? 'bg-success' :
                LoadDetails.status === 'in_transit' ? 'bg-primary' :
                LoadDetails.status === 'pending' ? 'bg-warning' : 'bg-info'
              }`}>
                {LoadDetails.status?.charAt(0).toUpperCase() + LoadDetails.status?.slice(1)}
              </span>
            </p>
            <p className="card-text">
              Price: 
              <span className="fw-bold text-dark ms-2">
                ${LoadDetails?.price?.amount} {LoadDetails?.price?.currency}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Customer Info */}
      <div className="col-md-6">
        <div className="card border-start border  shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-primary fw-semibold mb-3">Customer Information</h5>
            <p className="card-text mb-2">Name: <span className="fw-bold text-dark">{LoadDetails?.customer?.name}</span></p>
            <p className="card-text">Company: <span className="fw-bold text-dark">{LoadDetails?.customer?.company}</span></p>
          </div>
        </div>
      </div>

      {/* Pickup Details */}
      <div className="col-md-6">
        <div className="card border-start border  shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-primary fw-semibold mb-3">Pickup Details</h5>
            <p className="card-text mb-2">Address: <span className="fw-bold text-dark">{LoadDetails?.pickup?.location?.address}</span></p>
            <p className="card-text mb-2">City: <span className="fw-bold text-dark">{LoadDetails?.pickup?.location?.city}</span></p>
            <p className="card-text mb-2">State: <span className="fw-bold text-dark">{LoadDetails?.pickup?.location?.state}</span></p>
            <p className="card-text">Zip: <span className="fw-bold text-dark">{LoadDetails?.pickup?.location?.zipCode}</span></p>
          </div>
        </div>
      </div>

      {/* Delivery Details */}
      <div className="col-md-6">
        <div className="card border-start border  shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-primary fw-semibold mb-3">Delivery Details</h5>
            <p className="card-text mb-2">Address: <span className="fw-bold text-dark">{LoadDetails?.delivery?.location?.address}</span></p>
            <p className="card-text mb-2">City: <span className="fw-bold text-dark">{LoadDetails?.delivery?.location?.city}</span></p>
            <p className="card-text mb-2">State: <span className="fw-bold text-dark">{LoadDetails?.delivery?.location?.state}</span></p>
            <p className="card-text">Zip: <span className="fw-bold text-dark">{LoadDetails?.delivery?.location?.zipCode}</span></p>
          </div>
        </div>
      </div>

      {/* Cargo Details */}
      <div className="col-12">
        <div className="card border-start border  shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-primary fw-semibold mb-3">Cargo Details</h5>
            <div className="row g-3">
              {LoadDetails?.cargo?.map((item, index) => (
                <>
                <div className="col-md-6" key={index}>
                  <div className="border p-3 rounded-3">
                    <p className="mb-1">Description: <strong className='text-capitalize'>{item.description}</strong></p>
                    <p className="mb-1">Quantity: <strong>{item.quantity}</strong></p>
                    <p className="mb-1">Weight: <strong>{item.weight}</strong></p>
                    
                  </div>
                </div>
                <div className='col-md-6'>
<p className="mb-1">Length: <strong>{item.dimensions.length}</strong></p>
                    <p className="mb-1">Width: <strong>{item.dimensions.width}</strong></p>
                    <p className="mb-0">Height: <strong>{item.dimensions.height}</strong></p>
                </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Notes */}
      <div className="col-12">
        <div className="card border-start border  shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-primary fw-semibold mb-3">Notes</h5>
            <div className=" p-3 rounded-3 text-dark" style={{ whiteSpace: 'pre-line' }}>
              {LoadDetails?.notes}
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>


  )
}

export default LoadDetails