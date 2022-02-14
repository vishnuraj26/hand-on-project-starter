import React,{useState} from 'react'
import axios from 'axios';
import {useNavigate } from "react-router-dom"
// import PropTypes from 'prop-types'
import cuv_Logo from "./logo.png";
import userLogo from "./adduserLogo.png"
import styles from "./Login.module.css"
import '../../components/Fonts/fonts.css'



export default function Login  (){

    const navigate = useNavigate ()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const loginHandler =async (e)=>{
        e.preventDefault()

            const config ={
                headers:{
                    "Content-type":"application/json"
                }
            }

            try {
            const {data} =await axios.post("http://localhost:5000/login",{
                email,
                password,
            },config);

            localStorage.setItem("token",JSON.stringify(data.token));
            if (data.token!=undefined) {navigate('/dashboard'); window.location.reload();}


        }
         catch (error) {
             if(error.response == undefined) return
            alert(error.response.data.message)
        }
    }

    const handleClick = ()=>{
        navigate('/register')
    }

        return (
                    <main role='main'>
                        <div>
                            <nav className={styles.na}>
                                <img
                                    src={cuv_Logo}

                                />
                            </nav>

                            <div className={styles.mes_frame}>

                                    <section>

                                            <img
                                            src={userLogo}
                                            />
                                    </section>

                                        <div>
                                            <strong>Welcome to your Dashboard</strong>
                                        </div>
                                        <p>
                                            Your uploaded APIs will be
                                            displayed here once you login to your
                                            account
                                        </p>

                            </div>
                        </div>

                        <div className={styles.login_frame}>
                            <form className={styles.entry} action="#" autoComplete="off">

                                <p> Login to your account</p>
                                <input
                                    type='email'
                                    name="email"
                                    value={email}
                                    onChange={(e)=> setEmail(e.target.value)}
                                    placeholder='Email address'
                                    /><br></br>

                                <input
                                    type='password'
                                    name="password"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    placeholder ="Password"
                                  />

                                <button className={styles.login_button}
                                    onClick={loginHandler}
                                >
                                    <p>Login</p>
                                </button>
                            </form>


                            <span className={styles.alt}>
                                Don&#x27;t have an account?Signup <a href="/register" onClick={handleClick}>here</a>
                            </span>


                        </div>

                    </main>

               )
}


// Login.propTypes ={
//     setToken: PropTypes.func.isRequired
// }

