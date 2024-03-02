import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { storeContext } from '../../context/storeContext';

export default function () {
    let navigate = useNavigate()
    let {id}= useParams()
    const [errMsg,setErrMsg]= useState('')
    const [loading,setLoading]= useState(true)

    let {pay} = useContext(storeContext)

    async function sendData(values){
        setLoading(false)
        let data = await pay(id,values)
        if(data.status=="success"){
            window.location.href= data.session.url
        }

    }


    let adress=useFormik({
        initialValues:{
            details:'',
            phone:"",
            city:"",
        },
        onSubmit:(values)=>{

            sendData(values)
        }
    })

    return (
    <div>
        <div className="w-75 m-auto my-5">
            <h2>adress Now:</h2>
            <form onSubmit={adress.handleSubmit}>
            
                <label htmlFor="details">details:</label>
                <textarea onBlur={adress.handleBlur} value={adress.values.email} onChange={adress.handleChange} type="text" name='details' className='form-control mb-3' id='details'></textarea>


                
                <label htmlFor="phone">phone:</label>
                <input onBlur={adress.handleBlur} value={adress.values.password} onChange={adress.handleChange} type="text" name='phone' className='form-control mb-3' id='phone' />
                
                <label htmlFor="city">city:</label>
                <input onBlur={adress.handleBlur} value={adress.values.password} onChange={adress.handleChange} type="text" name='city' className='form-control mb-3' id='city' />


                <button disabled={!(adress.dirty&&adress.isValid)} type='submit' className='btn bg-main text-white'>
                    {loading ? 'Pay':'loading...'}
                </button>
            </form>
        </div>
    </div>
  )
}
