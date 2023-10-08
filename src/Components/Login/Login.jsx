/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import login from "../../assets/icon/login.png"
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import GoogleLogin from "../GoogleLogin/GoogleLogin";




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


    return (
        <div className="hero min-h-screen container mx-auto">

            <div className="hero-content flex-col lg:flex-row h-full w-full">
                <div className="text-center lg:text-left w-2/4">
                    <img className=" image-full lg:w-full" src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 shadow-2xl bg-base-100 ">
                    <form onSubmit={handleLogin} className="card-body lg:w-[500px]">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="type the captcha" name='password' className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">

                            <button className='btn rounded-3xl bg-[#D1A054]' type="submit">Login</button>
                        </div>
                        <Link to='/signUp'><p>New in this site? Please SignUp</p></Link>
                    </form>
                    <div className=' mx-auto mb-6'>
                        <GoogleLogin ></GoogleLogin>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;