import React  from "react";
import cuv_Logo from "./logo.png";
import userLogo from "./adduserLogo.png"
import styles from "./Login.module.css"



export default function Login(){

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
                            <div className={styles.entry}>

                                <p> Login to your account</p>
                                <input
                                    type='email'
                                    placeholder='Email address'
                                    /><br></br>

                                <input
                                 type='password'
                                 placeholder ="Password"
                                  /><br></br>

                                <button className={styles.login_button}
                                onClick={()=>console.log('I was clicked')}
                                >
                                    <p>Login/Signup</p>
                                </button>
                            </div>

                        </div>

                    </main>

               )
}