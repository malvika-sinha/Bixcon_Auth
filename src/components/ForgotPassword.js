import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { Link } from 'react-router-dom'; // Import Link for navigation

const ForgotPassword = () => {
    return (
        <div className="min-h-screen flex">
            <div className="w-[35%] bg-[#0C0C0C] flex flex-col items-center justify-center">
                <div className="flex justify-center mb-6">
                    <Logo className="w-[200px] h-[200px] text-white" />
                </div>
                <div className="text-white w-[80%]">
                    <h1 className="text-[169%] text-[#F2613F] font-bold mb-6 text-center">Password Recovery</h1>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm text-[#9B3922]">Enter Username</label>
                            <input type="text" className="w-full p-2 border border-gray-300 placeholder-white rounded bg-[#9B3922] border-none" placeholder="Enter your Username" />
                        </div>
                        <div>
                            <label className="block text-sm text-[#9B3922]">Email address</label>
                            <input type="email" className="w-full p-2 border border-gray-300 placeholder-white rounded bg-[#9B3922] border-none" placeholder="Enter your email" />
                        </div>
                        <button className="w-full bg-[#F2613F] text-white p-2 rounded">Verify</button>
                    </form>

                    {/* Link to Login Page */}
                    <div className="text-center mt-4">
                        <p className="text-sm">Remember your password?</p>
                        <Link to="/login" className="relative -top-[23px] text-[15px] left-[37%] text-[#9B3922] underline">
                            Login here
                        </Link>
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

export default ForgotPassword;
