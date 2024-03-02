import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function ForgotPassword() {

    let navigate = useNavigate()

    let validationSchema = Yup.object({
        email: Yup.string().email().required(),
    })

    async function sendCode(values){
        
        let {data}= await axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', values)
        if(data.statusMsg==='success'){
            alert('Reset code sent to your email')
            navigate('/verfiyCode')
        }
        
    }
    let formik = useFormik({
        initialValues:{
            email:''
        },
        validationSchema:validationSchema,
        onSubmit:sendCode
    })



  return (
    <>
        <h3 className='container'>Forgot Password ?</h3>
        <form onSubmit={formik.handleSubmit} className='w-75 mx-auto my-5'>
            <label htmlFor="email">Email: </label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" id='email' name='email' className='form-control' />
            {formik.errors.email && formik.touched.email ?<div className="alert alert-danger">{formik.errors.email}</div>:''}

            <button disabled={!(formik.dirty&&formik.isValid)} type='submit' className='btn bg-main text-white my-3'>send Code</button>
        </form>
    </>
  )
}
