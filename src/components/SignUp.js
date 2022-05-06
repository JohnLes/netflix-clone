import React from "react";


const SignUp = () => {

    return (
        <>
            <div className="signup relative flex">
                <div className="static flex-row text-black space-y-4 justify-left">
                    <h1 className="  text-3xl font-bold pb-4">Sign Up</h1>
                    <input className='w-full h-10 p-2 bg-grey rounded-md border-2' type="text" placeholder="Email or phone number"></input>
                    <input className='w-full h-10 p-2 space-y-10 bg-grey rounded-md border-2' type="password" placeholder="Password" />
                    <button className='w-full h-10 bg-red-700 hover:bg-red-500 text-white  rounded-md'>
                    Sign Up
                    </button>
                    <div className="grid justify-items-end">
                    <button > Sign In</button>
                    </div>
                        
                </div>
            </div>
        </>
    )
}

export default SignUp;