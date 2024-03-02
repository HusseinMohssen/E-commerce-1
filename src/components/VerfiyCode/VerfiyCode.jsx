import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function VerfiyCode() {

    let navigate = useNavigate()

    
    let validationSchema2 = Yup.object({
        resetCode: Yup.string().required(),
    })

    async function sendData(values){
        
        let {data}= await axios.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode', values)
        if(data.status==='Success'){
            alert('Code is valid')
            navigate('/resetPassword')
        }
    }
    let verfiyFormik = useFormik({
        initialValues:{
            resetCode:''
        },
        validationSchema:validationSchema2,
        onSubmit:sendData
    })
  return (
    <>
        <h3 className='container'>verfiyCode:</h3>
        <form onSubmit={verfiyFormik.handleSubmit} className='w-75 mx-auto my-5'>
            <label htmlFor="resetCode">resetCode: </label>
            <input onBlur={verfiyFormik.handleBlur} onChange={verfiyFormik.handleChange} value={verfiyFormik.values.resetCode} type="text" id='resetCode' name='resetCode' className='form-control' />
            {verfiyFormik.errors.resetCode && verfiyFormik.touched.resetCode ?<div className="alert alert-danger">{verfiyFormik.errors.resetCode}</div>:''}

            <button disabled={!(verfiyFormik.dirty&&verfiyFormik.isValid)} type='submit' className='btn bg-main text-white my-3'>send Code</button>
        </form>    </>
  )
}
