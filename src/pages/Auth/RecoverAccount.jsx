import React, { useState } from 'react'
import FormInput from '../../Components/auth/FormInput'
import { useDispatch } from 'react-redux'
import { forgetPassword } from '../../redux/user'

const RecoverAccount = () => {
  const [formData, setFormData] = useState({
    email: ''
  })
  const [errors, setErrors] = useState({
    email: ''
  })

  const dispatch = useDispatch()
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Basic validation
    if (!formData.email) {
      setErrors(prev => ({
        ...prev,
        email: 'Email is required'
      }))
      return
    }
    // Send email in request body
    dispatch(forgetPassword({ email: formData.email }))
  }

  return (
    <div className="login-background">
      <div className="container" style={{ height: "100vh" }}>
        <div className="row align-items-center justify-content-md-center h-p100">
          <div className="col-12">
            <div className="row justify-content-center g-0">
              <div className="col-lg-5 col-md-5 col-12">
                <div className="bg-white rounded10 shadow-lg">
                  <div className="content-top-agile p-20 pb-0">
                    <h2 className="text-primary">Recover Account</h2>
                    <p className="mb-0">Enter your email to recover your account.</p>
                  </div>
                  <div className="p-40">
                    <form onSubmit={handleSubmit}>
                      <FormInput
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        icon="ti-email"
                      />
                      <div className="row">
                        <div className="col-12 text-center">
                          <button type="submit" className="btn btn-primary mt-10">
                            Send Recovery Email
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecoverAccount