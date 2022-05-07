import React, { useState, useEffect } from 'react'
import NetflixLogo from '../images/netflixLogo.png';
import '../App.css';
import {BiLogOut} from 'react-icons/bi';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import LandingPage from './LandingPage';
import {useNavigate} from 'react-router-dom';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 100){
            handleShow(true);
        }else{handleShow(false);} 
        });
    return ()=>{
        window.removeEventListener("scroll", ()=>{});
    };
    }, []);

    const style = {color: "white"};

    let navigate = useNavigate(); 

    const submit = () => {
        confirmAlert({
        title: 'Confirm to Log out',
        message: 'Are you sure you want to log out ?',
        buttons: [
        {
            label: 'Yes',
            onClick: () => {
                let path = `/netflix-clone`; 
                navigate(path);
            }
        },
        {
            label: 'No',
            onClick: () => {}
        }
        ]
    });
    };

  return (
    <div className={` nav ${show && "nav_black"}`}>
        <img className="flex sm:w-28 w-24 object-contain" src={NetflixLogo} alt="Netflix Logo" />
        <div className='w-20 h-[60px] justify-center items-center p-4'>
            <BiLogOut style={style} size={30} className="hover:scale-125" onClick={submit}/>
        </div>    
    
    </div>
  )
}

export default Nav