import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function ResetPassword() {

    let navigate = useNavigate()

    let validationSchema = Yup.object({
        email: Yup.string().email().required(),
        newPassword: Yup.string().matches(/^[A-Z][A-Za-z0-9@]{6,}$/).required(),
    })

    async function resetPassword(values){
        let {data}= await axios.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword', values)
        if(data= true){
            alert('Password Reseted')
            navigate('/signin')
        }
    }

    let formik = useFormik({
        initialValues:{
            email:"",
            newPassword: ""
        },
        validationSchema:validationSchema,
        onSubmit:resetPassword
    })

    
  return (
    <div>
        <div className="w-75 m-auto my-5">
            <h2>Reset Password Now:</h2>
            <form onSubmit={formik.handleSubmit} >
            
                <label htmlFor="email">Email:</label>
                <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" name='email' className='form-control mb-3' id='email' />

                {formik.errors.email && formik.touched.email ?<div className="alert alert-danger">{formik.errors.email}</div>:''}

                
                <label htmlFor="newPassword">New Password:</label>
                <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.newPassword} type="password" name='newPassword' className='form-control mb-3' id='newPassword' />

                {formik.errors.newPassword && formik.touched.newPassword ?<div className="alert alert-danger">{formik.errors.newPassword}</div>:''}

                <button disabled={!(formik.dirty&&formik.isValid)} type='submit' className='btn bg-main text-white my-3'>Reset Password</button>

            </form>
        </div>
    </div>
  )
}
