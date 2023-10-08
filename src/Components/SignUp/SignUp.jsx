/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useContext } from 'react';
import register from '../../assets/icon/login.png'

import { ImGoogle } from "react-icons/im";


import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import GoogleLogin from "../GoogleLogin/GoogleLogin";


const SignUp = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.form?.pathname || "/"

    const { createUser, signInWithGoogle,updateUserProfile } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photo = form.photoURL.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, photo, email, password)
        const savedUser = { name: name, email: email }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Your work has been saved',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                        navigate(from, { replace: true })
                    })

                updateUserProfile(name, photo)
                    .then(() => {

                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.log(error);
            });


    }

   

    return (
        <div className="hero min-h-screen container mx-auto">
            <div className="hero-content flex-col lg:flex-row h-full w-full">
                <div className="text-center lg:text-left w-2/4">

                    <img className=" lg:w-[1000px]" src={register} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 lg:w-[500px]">
                    <form onSubmit={handleSignUp} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="PhotoURL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn  bg-[#D1A054] rounded-full">SignUp</button>
                            <Link to='/login'><p className=' mt-2'>Already have an account? Please Login</p></Link>
                        </div>
                    </form>
                    <div className=' mx-auto mb-6'>
                        <GoogleLogin ></GoogleLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;