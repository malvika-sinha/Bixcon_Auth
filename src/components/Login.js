import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Login = () => {
    return (
        <div className="min-h-screen flex">
            {/* Left Side with Form */}
            <div className="flex flex-col items-center justify-center w-full md:w-[35%] lg:w-[30%] bg-[#0C0C0C]">
                <div className="flex justify-center mb-6">
                    <Logo className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] text-white" />
                </div>
                <div className="text-white w-[90%] lg:w-[80%]">
                    <h1 className="text-3xl md:text-4xl text-[#F2613F] font-bold mb-6 text-center">Login to Account</h1>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm text-[#9B3922]">Email address</label>
                            <input 
                                type="email" 
                                className="w-full p-2 border border-gray-300 placeholder-white rounded bg-[#9B3922] border-none" 
                                placeholder="Enter your email" 
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-[#9B3922]">Enter Password</label>
                            <input 
                                type="password" 
                                className="w-full p-2 border border-gray-300 placeholder-white rounded bg-[#9B3922] border-none" 
                                placeholder="Enter your password" 
                            />
                        </div>
                        <div className="flex items-center justify-between mt-1">
                            <label className="flex items-center text-sm text-[#9B3922]">
                                <input type="checkbox" className="mr-2 checked:bg-red-500 checked:border-transparent" />
                                Remember Password
                            </label>
                            <Link to="/forgot-password" className="underline text-[13px] text-[#9B3922]">
                                Forgot Password?
                            </Link>
                        </div>

                        <button className="w-full bg-[#F2613F] text-white p-2 rounded">Login</button>
                    </form>

                    <div className="flex flex-col items-center mt-6">
                        <div className="flex items-center mb-4 w-full">
                            <div className="flex-grow border-t border-gray-300" />
                            <span className="mx-2 text-sm">OR</span>
                            <div className="flex-grow border-t border-gray-300" />
                        </div>
                    </div>

                    <div className="text-center mt-6 relative top-[-3%]">
                        <p className="text-sm">Don't have an account? 
                            <Link to="/register" className="bg-[#F2613F] w-[42%] relative top-[9px]  text-white block w-[60%] mx-auto rounded-[4px] p-2 text-center">
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side Background Image */}
            <div className="hidden md:block w-[65%] lg:w-[70%]">
                <img
                    src="https://i.postimg.cc/pTjQmjhG/background.png"
                    className="h-full w-full object-cover"
                    alt="Background"
                />
            </div>
        </div>
    );
};

export default Login;
