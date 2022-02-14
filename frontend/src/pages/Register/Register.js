import React , {useState} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import cuv_Logo from "../../components/Logo/cuvette.png";
import styles from "./Register.module.css"
import '../../components/Fonts/fonts.css'

export default function Register() {

    const navigate = useNavigate();

    const [user,setUser] = useState({
        name:"",
        email:"",
        password: ""
    })

    const handleChange = e =>{
        e.preventDefault()
        const {name,value} = e.target
        setUser({
        ...user,//spread operator 
        [name]:value
        })
    }

    const handleClick = ()=>{
        navigate('/login')
    }

    //register function 
    const register = ()=>{
        const {name,email,password} = user
        if (name && email && password){
        const {data}=axios.post("http://localhost:5000/register",user )
        console.log(data)
        }
        else{
            alert("invalid input")
        }
    }

  return (<main>
    <div>
        <nav className={styles.na}>
            <img
                src={cuv_Logo}

            />
        </nav>
    </div>

    <div>
        <div className={styles.reg_frame}>
            <form action='#' className={styles.reg_form}>
                <p> Register  your account</p>
                <input
                    type='text'
                    name="name"
                    value={user.name}
                    placeholder='Full Name'
                    onChange={handleChange}
                    /><br></br>
                <input
                    type='email'
                    name="email"
                    value={user.email}
                    placeholder='Email address'
                    onChange={handleChange}
                    /><br></br>
                <input
                    type='password'
                    name="password"
                    value={user.password}
                    placeholder ="Password"
                    onChange={handleChange}
                    />
                <button className={styles.login_button}
                    onClick={register}>
                    <p>Register</p>
                </button>

            </form>
            <span className={styles.jump}>
                Already have an account ?
                <a href="/login"  onClick={handleClick}>
                    Sign in
                </a>
            </span>
        </div>
    </div>
    </main>);
}





