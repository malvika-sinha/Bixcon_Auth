import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className="min-h-screen flex">
            <div className="flex flex-col items-center justify-center w-full md:w-[50%] lg:w-[35%] bg-[#0C0C0C] flex-grow">
                <div className="flex justify-center mb-6">
                    <Logo className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] text-white" />
                </div>
                <div className="text-white w-[90%] lg:w-[80%]">
                    <h1 className="text-3xl md:text-4xl text-[#F2613F] font-bold mb-6 text-center">Register Account</h1>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm text-[#9B3922]">Enter Name</label>
                            <input type="text" className="w-full p-2 border border-gray-300 placeholder-white rounded bg-[#9B3922] border-none" placeholder="Enter your Name" />
                        </div>
                        <div>
                            <label className="block text-sm text-[#9B3922]">Enter Username</label>
                            <input type="text" className="w-full p-2 border border-gray-300 placeholder-white rounded bg-[#9B3922] border-none" placeholder="Enter your Username" />
                        </div>
                        <div>
                            <label className="block text-sm text-[#9B3922]">Email address</label>
                            <input type="email" className="w-full p-2 border border-gray-300 placeholder-white rounded bg-[#9B3922] border-none" placeholder="Enter your email" />
                        </div>
                        <div>
                            <label className="block text-sm text-[#9B3922]">Enter Password</label>
                            <input type="password" className="w-full p-2 border border-gray-300 placeholder-white rounded bg-[#9B3922] border-none" placeholder="Enter your password" />
                        </div>
                        <button className="w-full bg-[#F2613F] text-white p-2 rounded">Create Account</button>
                    </form>

                    {/* OR Section */}
                    <div className="flex flex-col items-center mt-6">
                        <div className="flex items-center mb-4 w-full">
                            <div className="flex-grow border-t border-gray-300" />
                            <span className="mx-2 text-sm">OR</span>
                            <div className="flex-grow border-t border-gray-300" />
                        </div>
                    </div>

                    {/* Login Link Section */}
                    <div className="text-center mt-6 relative top-[-3%]">
                        <p className="text-sm mb-2">Already have an account?</p>
                        <Link to="/login" className="bg-[#F2613F] text-white block w-[42%] relative top-[9px] mx-auto rounded-[4px] p-2 text-center">
                            Login
                        </Link>
                    </div>

                </div>
            </div>

            {/* Background Image */}
            <div className="hidden md:block md:w-[50%] lg:w-[65%]">
                <img
                    src="https://i.postimg.cc/pTjQmjhG/background.png"
                    className="h-full w-full object-cover"
                    alt="Background"
                />
            </div>
        </div>
    );
};

export default Registration;
