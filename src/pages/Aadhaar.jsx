import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { getDoc,doc} from "firebase/firestore";
import { db } from "../firebase";
import { RecaptchaVerifier,getAuth,signInWithPhoneNumber } from 'firebase/auth';
import { Navbar,Footer} from '../components';



export default function Aadhaar() {

    const [adhaar,setadhaar] = useState("");
    const [otp , setOtp]= useState("");
    const [error ,setError]= useState("");
    // const setUpRecaptcha = useUserAuth();
    
    const [flag ,setFlag]=useState(false);
    const [comfirmObj, setComfirmObj]=useState("");
    const navigate = useNavigate();
    var phone="";

    // Recaptcha Loader
    async function setUpRecaptcha(number){
        const auth = getAuth();
        const  reCaptchaVerifier = new RecaptchaVerifier("recaptcha-container",
        {},
        auth
        );
        reCaptchaVerifier.render();
        return signInWithPhoneNumber(auth,number,reCaptchaVerifier); 
    }
    //Getting Phone number from firebase
    const getPhone= async(e)=>{
        //Preventing default action of form
        e.preventDefault();
        
        if(adhaar === "" || adhaar === undefined) 
            return setError("Please enter a valid Adhaar Number ");
        try{
            const docRef = doc(db, "adhaar", adhaar);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                phone = docSnap.get("Phone")
                // console.log("phone:"+ phone);
                //create an alert over here
                getOTP(e);
            } else {
                //Adhaar card is not registered,create an alert over here
                console.log("No such document!");
            }
        }
        catch(err){
            setError(err.message);
        }
        
    };

    //Seding otp flag: true otp send, flag: false: otp failed
    const getOTP = async (e)=>{
    e.preventDefault();
    
    try{
        setError("");
        const response = await setUpRecaptcha(phone);
        console.log("Response is : "+ response);
        setComfirmObj(response);
        setFlag(true);
    }catch(err){
        setError(err.message);
    }
    };

    //Verify otp
    const verifyOTP = async (e)=>{
        e.preventDefault();
        console.log(otp);
        
        if(otp === "" || otp === null) return;
        try{
            setError("")
            await comfirmObj.confirm(otp);
            navigate("/user")
        }
        catch(err){
            setError(err.message);
        }
    };



    return (
        <div>
            <Navbar />
            <div className='gradient-bg-timeline p-4'>
                <div className="p-4 bg-white shadow-white  max-w-lg rounded  box mx-auto my-10 border-10  ">
                    <h2 className="mb-3 font-serif text-black text-center">Aadhaar Card Authentication</h2>
                    <img src='https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/1200px-Aadhaar_Logo.svg.png' className='size mx-auto' alt='Adhaar'/>
                    
                    
                    <form onSubmit={getPhone} style={{display:!flag ? "block":"none"}}>
                        <div className="mb-3">
                            <input
                                type="text"
                                placeholder="Enter Adhaar Number"
                                className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                value={adhaar}
                                onChange={(e)=> setadhaar(e.target.value)}
                            />  
                            {error && <p className="text-red-500 text-xs italic">{error}</p>}

                        </div>

                        <div  id="recaptcha-container" className=' mx-auto'/>
                        <Link to="/"><button className="mx-14 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" type="button">Cancel</button></Link>
                        <Button className="mx-16 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='submit'>Send OTP</Button>    

                    </form>


                    <form onSubmit={verifyOTP} style={{display: flag ? "block":"none"}}>
                        <div className="mb-3">
                            <input
                            type="text"
                            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                            placeholder="Enter OTP"
                            onChange = {(e)=> setOtp(e.target.value)}
                            />
                        </div>
                
                    
                        <Link to="/">
                        <button className="mx-14 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" type="button">Cancel</button></Link>
                        <Button className="mx-16 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='submit'>Verify OTP</Button>
                        
                    </form>

                </div>
                <p className="text-center text-gray-500 text-xs">&copy;2022 NSA Engineers. All rights reserved.</p>
            </div>
            <Footer />
        </div>
    )

}





            
