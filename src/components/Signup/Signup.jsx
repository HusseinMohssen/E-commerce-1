import { useFormik } from 'formik'
import React from 'react'

export default function Signup() {

    function validate(values){

        const myError = {};

        if(!values.name){
            myError.name = 'name is required.'
        }
        if(!values.email){
            myError.email = 'email is required.'
        }
        if(!/^[A-Z][a-zA-Z0-9@]{6,}$/.test(values.password)){
            myError.password = 'passowrd must be 7 charcters or more and start with a capital letter.'
        }
        if(values.rePassword !== values.password || values.rePassword === ''){
            myError.rePassword = 'passowrd and rePassword not match.'
        }

        return myError
    }


    let register=useFormik({
        initialValues:{
            name:'',
            email:'',
            password:"",
            rePassword:"",
        },
        validate,
        onSubmit:(values)=>{
            console.log(values);
        }
    })
    console.log(register.errors);
    return (
    <div>
        <div className="w-75 m-auto my-5">
            <h2>Register Now:</h2>
            <form onSubmit={register.handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input onBlur={register.handleBlur} value={register.values.name} onChange={register.handleChange} type="text" name='name' className='form-control mb-3' id='name' />

                {register.errors.name && register.touched.name ?<div className="alert alert-danger">{register.errors.name}</div>:''}
                
                <label htmlFor="email">Email:</label>
                <input onBlur={register.handleBlur} value={register.values.email} onChange={register.handleChange} type="email" name='email' className='form-control mb-3' id='email' />

                {register.errors.email && register.touched.email ?<div className="alert alert-danger">{register.errors.email}</div>:''}

                
                <label htmlFor="password">Password:</label>
                <input onBlur={register.handleBlur} value={register.values.password} onChange={register.handleChange} type="password" name='password' className='form-control mb-3' id='password' />

                {register.errors.password && register.touched.password ?<div className="alert alert-danger">{register.errors.password}</div>:''}
                
                <label htmlFor="rePassword">RePassword:</label>
                <input onBlur={register.handleBlur} value={register.values.rePassword} onChange={register.handleChange} type="password" name='rePassword' className='form-control mb-3' id='rePassword' />

                {register.errors.rePassword && register.touched.rePassword ?<div className="alert alert-danger">{register.errors.rePassword}</div>:''}

                <button type='submit' className='btn bg-main text-white'>SignUp</button>
            </form>
        </div>
    </div>
  )
}
