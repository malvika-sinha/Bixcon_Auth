import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className="min-h-screen flex">
            <div className="w-[35%] bg-[#0C0C0C] flex flex-col items-center justify-center">
                <div className="flex justify-center mb-6">
                    <Logo className="w-[200px] h-[200px] text-white" />
                </div>
                <div className="text-white w-[80%]">
                    <h1 className="text-4xl text-[#F2613F] font-bold mb-6 text-center">Register Account</h1>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm text-[#9B3922] ">Enter Name</label>
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
                    <div className="text-center mt-6">
                        <p class="text-sm mb-4 relative left-[-29%] top-[-15px]">___________________________</p>
                        <p class="text-sm mb-4 relative top-[-44px] left-[-8px]">OR</p>
                        <p class="text-sm relative top-[-87px] left-[102px]">______________________________</p>
                    </div>

                    <div className="text-center mt-6 relative top-[-75px]">
                        <p className="text-sm">Already have an account? <Link to="/login" className="bg-[#F2613F] text-white block relative left-[279px] w-[29%] h-[22px] rounded-[4px] top-[-21px]">Login</Link></p>
                    </div>
                </div>
            </div>

            {/* Background Image */}
            <div className="w-[65%] h-756px">
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
