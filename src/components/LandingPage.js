import {useState} from 'react';
import styles from 'styled-components';
import React from 'react';
import NetflixLogo from '../images/netflixLogo.png';
import SignIn from './SignIn';
import SignUp from './SignUp';



const ModalBackground = styles.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.5);
`;

const ModalBody = styles.div`
    background-color: black;
    margin: auto;
    padding: 40px;
    width: 400px;
    top: 20%;

`;
const ModalBodySU = styles.div`
    background-color: white;
    margin: auto;
    padding: 40px;
    width: 400px;
    top: 20%;
    font-color: black;

`;

function LandingPage({children}) {
    const [ shouldShow, setShouldShow] = useState(false);
    const [ shouldShowSU, setShouldShowSU] = useState(false);

    return (
    <>
    <div className='relatetive w-full h-screen landing-page-background justify-center text-white'>
        <div className='static flex w-full h-50 items-center px-4 justify-between align-middle '>
            <img className="flex sm:w-40 w-28" src={NetflixLogo} alt="Netflix Logo" />
            <button onClick={()=> setShouldShow(true)}
            className='bg-red-700 hover:bg-red-500 h-8 px-2 py-0  rounded-md'>Sign In</button>
            {shouldShow && (
                <ModalBackground onClick={()=>setShouldShow(false)}>
                    <div className='relative top-40 align-middle place-items-center'>
                    <ModalBody className='static' onClick = {e => e.stopPropagation()}>
                        {children}
                        <SignIn />
                        <div className="grid justify-items-end">
                        <button onClick={()=>setShouldShow(false)} className=' text-white pt-4 '> Close </button>
                        </div>
                    </ModalBody>
                    </div>
                </ModalBackground>
            )}     
        </div>
        <div className='relative flex w-full h-screen items-center justify-center welcome-note'>
        <div className='absolute flex-row items-center top-20 text-center space-y-4 w-[80%] lg:w-[50%]'>
        <h1 className='text-3xl sm:text-5xl lg:text-6xl font-semibold '>Unlimited movies, TV shows, and more. </h1>
        <p className='text-lg sm:text-2xl'>Watch anywhere. Cancel anytime.</p>
        <p className='text-lg'>Ready to watch? Enter your email to create or restart your membership.</p>

            <input className='text-black text-lg h-10 p-2 w-full lg:h-20 lg:w-[70%]' type="email" placeholder='Email address' />
            <button onClick={()=> setShouldShow(true)}
            className='bg-red-700 hover:bg-red-500  h-10  sm:py-2 px-4 rounded lg:h-20 lg:w-[30%] lg:rounded-none lg:text-xl'>Get Started &gt;</button>
            {shouldShow && (  
            <ModalBackground onClick={()=>setShouldShow(false)}>
                <div className='relative top-40 align-middle place-items-center'>
                <ModalBodySU className='static' onClick = {e => e.stopPropagation()}>
                    {children}
                    <SignUp />
                    <div className="grid justify-items-end">
                    <button onClick={()=>setShouldShow(false)} className=' text-black pt-4 '> Close </button>
                    </div>
                </ModalBodySU>
                </div>
            </ModalBackground>
        )}           
        </div>
    </div>
    </div>

    </>
    );
}

export default LandingPage;
