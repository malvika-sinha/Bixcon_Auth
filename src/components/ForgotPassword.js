import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    return (
        <div className="min-h-screen flex">
            {/* Left Side with Form */}
            <div className="flex flex-col items-center justify-center w-full md:w-[35%] lg:w-[30%] bg-[#0C0C0C]">
                <div className="flex justify-center mb-6">
                    <Logo className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] text-white" />
                </div>
                <div className="text-white w-[90%] lg:w-[80%]">
                    <h1 className="text-3xl md:text-4xl text-[#F2613F] font-bold mb-6 text-center">Password Recovery</h1>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm text-[#9B3922]">Enter Username</label>
                            <input 
                                type="text" 
                                className="w-full p-2 border border-gray-300 placeholder-white rounded bg-[#9B3922] border-none" 
                                placeholder="Enter your Username" 
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-[#9B3922]">Email address</label>
                            <input 
                                type="email" 
                                className="w-full p-2 border border-gray-300 placeholder-white rounded bg-[#9B3922] border-none" 
                                placeholder="Enter your email" 
                            />
                        </div>
                        <button className="w-full bg-[#F2613F] text-white p-2 rounded">Verify</button>
                    </form>

                    <div className="flex flex-col items-center mt-6">
                        <div className="flex items-center mb-4 w-full">
                            <div className="flex-grow border-t border-gray-300" />
                            <span className="mx-2 text-sm">OR</span>
                            <div className="flex-grow border-t border-gray-300" />
                        </div>
                    </div>

                    {/* Link to Login Page */}
                    <div className="text-center mt-4 relative top-[-3%]">
                        <p className="text-sm">Remember your password?</p>
                        <Link to="/login" className="bg-[#F2613F] text-white block w-[42%] relative top-[9px] mx-auto rounded-[4px] p-2 text-center">
                            Login here
                        </Link>
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

export default ForgotPassword;
