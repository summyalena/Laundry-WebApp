import React from 'react';
import Link from 'next/link'
import styles from '../form/loginform.module.css'
import {useState} from 'react'
import {useRouter} from 'next/router'
const loginForm = () => {
  // const router = useRouter();
  const onSubmit = (e)=>{
     if(!name){
       alert('Please input Reg Number')
      } if(!password){
        alert('Please input Password')
      } 
      else {
        // e.preventDefault()
       router.push("/dashindex")
       alert('This has gone')
      }
      
    }     
  return (
      <div className={styles.containerlogin}>
<form className={styles.login} onSubmit={onSubmit}>
      <div className={styles.loginhead}><h3>Login</h3></div>
      
         <div className={styles.inputt}>
       <input className={styles.input} value="name" placeholder='name' type='text' required/>
       </div>
        <div className={styles.inputt}>
       <input className={styles.input} value="passowrd" placeholder='Password' type='password' required/>
    </div>
     
    <div className={styles.btnlogcon}>
   <input type='submit' className={styles.btnlogin} pointer='cursor' value='Login'/>
    <p className={styles.p}>  Don't have an account ? sign up <br/> <Link href='/dashindex'><a className={styles.a}>Here </a></Link></p>
    </div>
  </form> 
  </div> 
  )
}

export default loginForm

