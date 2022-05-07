
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


const SignIn = () => {

    const userEmail = "user@email.com";
    const userPass = "netflix";

    const initialValues = {email:"", password:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues,[name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(()=>{
        // console.log(formErrors);
        
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    },[formErrors]);

    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.email){
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)){
            errors.email = "This is not a valid email format!";
        } 
        else if (values.email !== userEmail){
            errors.email = "Email not registered!";
        }


        if(!values.password){
            errors.password = "Password is required!";
        } else if (values.password.length < 4){
            errors.password = "Password must be more than 4 characters!";
        } 
        else if (values.password !== userPass){
            errors.password = "Incorrect Password!";
        }
        return errors;
    };

    const ConditionalLink = ({ children, to, condition }) => (!!condition && to)
      ? <Link to='/netflixshow'>{children}</Link>
      : <>{children}</>;

    return (
        <>
            <div className="signin relative flex">
                {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
                <form onSubmit={handleSubmit} className="static items-center w-full justify-center">
                    <div className="static flex-row black  space-y-4 justify-center">
                        <h1 className="text-3xl font-bold pb-4">Sign In</h1>
                        <input 
                            className='w-full h-10 p-2 text-black bg-grey rounded-md' 
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                        <p className='text-red-700 text-sm'>{formErrors.email}</p>
                        <input 
                            className='w-full h-10 p-2 text-black space-y-10 bg-grey rounded-md' 
                            type="password" 
                            name="password"
                            placeholder="Password" 
                            value={formValues.password}
                            onChange={handleChange}
                        />
                        <p className= 'text-red-700 text-sm'>{formErrors.password}</p>
                        <button 
                        className='w-full h-10 bg-red-700 hover:bg-red-500   rounded-md'>
                            <ConditionalLink to="netflix-clone/netflixshow" 
                            condition={Object.keys(formErrors).length === 0 && isSubmit}
                            className="flex w-full justify-center"> 
                            Sign In 
                            </ConditionalLink>
                        </button>
                        {/* <div 
                            className="grid justify-items-end">
                            <button type="submit" > Sign Up Now </button>
                        </div> */}
                    </div>    
                </form>            
            </div>
        </>
    )
}

export default SignIn;