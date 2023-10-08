/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ImGoogle, } from "react-icons/im";
import login from "../../assets/icon/login.png"
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";




const Login = () => {

    const { user, signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.form?.pathname || "/"
    const [error, setError] = useState(' ')

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        if (password.length < 6) {
            setError('password musth be 6 characters or longer')

        }
        else {
            setError('')

        }

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset();

                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
            })

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then((data) => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User sign up successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            navigate(from, { replace: true });
                        }

                    })

            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="hero min-h-screen container mx-auto">

            <div className="hero-content flex-col lg:flex-row h-full w-full">
                <div className="text-center lg:text-left w-2/4">
                    <img className=" image-full lg:w-full" src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <form onSubmit={handleLogin}>
                        <div className="card-body ">
                            <h1 className="text-3xl font-bold text-center">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-sm bg-orange-300 border-none">Login</button>
                            </div>

                        </div>
                    </form>

                    <div className=" ml-20">
                        <button onClick={handleGoogleSignIn} className='btn btn-outline mt-3 w-full '><span className='mr-3'><ImGoogle></ImGoogle></span>Log in with Google</button>
                        <p>New in this page? <Link to="/signUp" className=" text-teal-800" >Please SignUp.</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;