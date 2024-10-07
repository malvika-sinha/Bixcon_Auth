import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { Link } from 'react-router-dom'; // Import Link for navigation


const Login = () => {
    return (
        <div className="min-h-screen flex">
            <div className="w-[35%] bg-[#0C0C0C] flex flex-col items-center justify-center">
                <div className="flex justify-center mb-6">
                    <Logo className="w-[200px] h-[200px] text-white" />
                </div>
                <div className="text-white w-[80%]">
                    <h1 className="text-4xl text-[#F2613F] font-bold mb-6 text-center">Login to Account</h1>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm text-[#9B3922]">Email address</label>
                            <input type="email" className="w-full p-2 border border-gray-300 border-none placeholder-white rounded bg-[#9B3922]" placeholder="Enter your email" />
                        </div>
                        <div>
                            <label className="block text-sm text-[#9B3922]">Enter Password</label>
                            <input type="password" className="w-full p-2 border border-gray-300 border-none placeholder-white rounded bg-[#9B3922]" placeholder="Enter your password" />
                        </div>
                        <label className="relative top-[4px] underline block text-sm text-[#9B3922]">Remember Password</label>
                        <input type="checkbox" className="relative top-[-28px] left-[-12%]  checked:bg-red-500 checked:border-transparent w-full p-2 border border-gray-300 placeholder-white rounded bg-[#9B3922] border-none" placeholder="" />
                        <div className="text-right">
                            <Link to="/forgot-password" className="underline relative -top-[69px] text-[13px] text-[#9B3922]">
                                Forgot Password?
                            </Link>
                        </div>

                        <button className="w-full relative top-[-57px] bg-[#F2613F] text-white p-2 rounded">Login</button>
                    </form>
                    <div className="text-center mt-6 relative top-[-8%]">
                        <p className="text-sm">Don't have an account? <a href="/register" className="bg-[#F2613F] text-white block relative left-[279px] w-[29%] h-[22px] rounded-[4px] top-[-21px]">Register</a></p>
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

export default Login;
