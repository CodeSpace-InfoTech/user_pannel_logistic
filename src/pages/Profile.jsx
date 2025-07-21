import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile, updateChangePassword, updateProfile } from '../redux/user'
import TableHeader from '../Components/TableHeader'
import FormInput from '../Components/auth/FormInput'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState({})

    const [error, setError] = useState('')
    const [showPasswordChange, setShowPasswordChange] = useState(false)
    const [showPasswords, setShowPasswords] = useState({
        oldPassword: false,
        newPassword: false,
        confirmPassword: false
    })

    const {user} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getProfile())
    }, [dispatch])




    useEffect(() => {
        if(user) {
            setName(user.name || '')
            setEmail(user.email || '')
            setPhone(user.phone || '')
        }
    }, [user])

    const togglePasswordVisibility = (field) => {
        setShowPasswords(prev => ({
            ...prev,
            [field]: !prev[field]
        }))
    }

    const handleProfileUpdate = () => {
        const newErrors = {}
        
        if(!name.trim()) {
            newErrors.name = 'Name is required'
        }
        if(!email.trim()) {
            newErrors.email = 'Email is required'
        }
        if(!phone.trim()) {
            newErrors.phone = 'Phone is required'
        }

        if(Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

dispatch((updateProfile({
    name,
    
    phone
})))


    }
    const handleChangePassword = () => {
        const newErrors = {};

        // Validate old password
        if (!oldPassword.trim()) {
            newErrors.oldPassword = 'Current password is required';
        }

        // Validate new password
        if (!newPassword.trim()) {
            newErrors.newPassword = 'New password is required';
        } 

        // Validate confirm password
        if (!confirmPassword.trim()) {
            newErrors.confirmPassword = 'Please confirm your new password';
        } else if (confirmPassword !== newPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        // Check if there are any validation errors
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Clear any previous errors
        setErrors({});
        setError('');

        // Dispatch password change action
        dispatch(updateChangePassword({
            oldPassword,
            newPassword,
        })).then(() => {
            localStorage.clear()
            setOldPassword('');
            setNewPassword('');
            setConfirmPassword('');
            setTimeout(() => navigate('/login'),2000)
          
        }).catch(err => {
            setError(err.message || 'Failed to update password');
        });
    }

    return (
        <>
        <TableHeader title="Profile" />
        <section className="content">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h4 className="card-title mb-4">Update Profile</h4>
                                {error && <div className="alert alert-danger">{error}</div>}
                                
                                <div className="row mb-3">
                                    <div className="col-md-4">
                                        <FormInput
                                            type="text"
                                            name="name"
                                            placeholder="Full Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            error={errors.name}
                                            icon="ti-user"
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <FormInput 
                                            type="email"
                                            name="email" 
                                            placeholder="Enter your email address"
                                            value={email}
                                           
                                           disabled
                                            icon="ti-email"
                                            aria-label="Email input field"
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <FormInput
                                            type="text"
                                            name="phone"
                                            placeholder="Phone Number"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            error={errors.phone}
                                            icon="ti-mobile"
                                        />
                                    </div>
                                </div>

                                <div className="d-flex justify-content-end mb-4">
                                    <button 
                                        className="btn btn-primary"
                                        onClick={handleProfileUpdate}
                                    >
                                        Update Profile
                                    </button>
                                </div>

                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h6 className="card-subtitle mb-3 text-muted">Role Details</h6>
                                        <p><strong>Role:</strong> {user?.role?.name}</p>
                                        <p><strong>Description:</strong> {user?.role?.description}</p>
                                        <p><strong>Created:</strong> {new Date(user?.createdAt).toLocaleDateString()}</p>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title mb-4">Change Password</h5>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="position-relative">
                                                    <FormInput
                                                        type={showPasswords.oldPassword ? "text" : "password"}
                                                        name="oldPassword"
                                                        placeholder="Current Password"
                                                        value={oldPassword}
                                                        onChange={(e) => setOldPassword(e.target.value)}
                                                        error={errors.oldPassword}
                                                        icon="ti-eye"
                                                    />
                                                    <i 
                                                        className={`ti-eye${showPasswords.oldPassword ? '' : '-off'} position-absolute`}
                                                        style={{right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer'}}
                                                        onClick={() => togglePasswordVisibility('oldPassword')}
                                                    ></i>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="position-relative">
                                                    <FormInput
                                                        type={showPasswords.newPassword ? "text" : "password"}
                                                        name="newPassword"
                                                        placeholder="New Password"
                                                        value={newPassword}
                                                        onChange={(e) => setNewPassword(e.target.value)}
                                                        error={errors.newPassword}
                                                        icon="ti-eye"
                                                    />
                                                    <i 
                                                        className={`ti-eye${showPasswords.newPassword ? '' : '-off'} position-absolute`}
                                                        style={{right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer'}}
                                                        onClick={() => togglePasswordVisibility('newPassword')}
                                                    ></i>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="position-relative">
                                                    <FormInput
                                                        type={showPasswords.confirmPassword ? "text" : "password"}
                                                        name="confirmPassword"
                                                        placeholder="Confirm Password"
                                                        value={confirmPassword}
                                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                                        error={errors.confirmPassword}
                                                        icon="ti-eye"
                                                    />
                                                    <i 
                                                        className={`ti-eye${showPasswords.confirmPassword ? '' : '-off'} position-absolute`}
                                                        style={{right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer'}}
                                                        onClick={() => togglePasswordVisibility('confirmPassword')}
                                                    ></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-end mt-3">
                                            <button className="btn btn-primary" onClick={handleChangePassword}>
                                                Change Password
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Profile