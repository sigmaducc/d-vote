import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Form,Alert } from 'react-bootstrap';
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
                    <h2 className="mb-3 font-serif text-white text-center">Aadhaar Card Authentication</h2>
                    <img src='https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/1200px-Aadhaar_Logo.svg.png' className='size mx-auto' alt='Adhaar'/>
                    
                    
                    <Form onSubmit={getPhone} style={{display:!flag ? "block":"none"}}>
                        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                            <Form.Control
                                type="text"
                                placeholder="Enter Adhaar Number"
                                value={adhaar}
                                onChange={(e)=> setadhaar(e.target.value)}
                            />  
                            {error && <p className="text-red-500 text-xs italic">{error}</p>}
                            
                        </Form.Group>

                        <div  id="recaptcha-container" className=' mx-auto'/>
                        <Link to="/"><button className="mx-14 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" type="button">Cancel</button></Link>
                        <Button className="mx-16 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='submit'>Send OTP</Button>    

                    </Form>


                    <Form onSubmit={verifyOTP} style={{display: flag ? "block":"none"}}>
                        <Form.Group className="mb-3" controlId="formBasicotp">
                            <Form.Control
                            type="text"
                            placeholder="Enter OTP"
                            onChange = {(e)=> setOtp(e.target.value)}
                            />
                        </Form.Group>
                
                    
                        <Link to="/">
                        <button className="mx-14 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" type="button">Cancel</button></Link>
                        <Button className="mx-16 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='submit'>Verify OTP</Button>
                        
                    </Form>

                </div>
            </div>
            <Footer />
        </div>
    )

}





            
