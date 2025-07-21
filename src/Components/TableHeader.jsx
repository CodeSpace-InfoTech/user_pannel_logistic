import React from 'react'

const TableHeader = ({title}) => {
  return (
     <div className="content-header">
          <div className="d-flex align-items-center">
            <div className="me-auto">
              <h4 className="page-title">{title}</h4>
            </div>
          </div>
        </div>
  )
}

export default TableHeader