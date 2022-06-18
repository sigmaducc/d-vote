import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Form,Alert } from 'react-bootstrap';
import { getDoc,doc} from "firebase/firestore";
import { db } from "../firebase";
import { RecaptchaVerifier,getAuth,signInWithPhoneNumber } from 'firebase/auth';
import { Navbar,Footer} from '../components';



export default function AdhaarAuth() {

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
            <div>
      <div className="p-4 box">
        <h2 className="mb-3">Phone Number Login</h2>
        <img src='https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/1200px-Aadhaar_Logo.svg.png' className='size' alt='Adhaar'/>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={getPhone} style={{display:!flag ? "block":"none"}}>
                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                    <Form.Control
                        type="text"
                        placeholder="Enter Adhaar Number"
                        value={adhaar}
                        onChange={(e)=> setadhaar(e.target.value)}
                    />
                    &nbsp;
                    <div  id="recaptcha-container"/>
                </Form.Group>
                <div className='button-right'>
                    <Link to="/">
                        <Button variant = "secondary">Cancel</Button> &nbsp;
                    </Link>
                    <Button variant = "primary" type='submit'>Send OTP</Button>    
                </div>
            </Form>


            <Form onSubmit={verifyOTP} style={{display: flag ? "block":"none"}}>
                <Form.Group className="mb-3" controlId="formBasicotp">
                    <Form.Control
                        type="text"
                        placeholder="Enter OTP"
                        onChange = {(e)=> setOtp(e.target.value)}
                    />
                </Form.Group>
                
                <div className='button-right'>
                    <Link to="/">
                        <Button variant = "secondary">Cancel</Button> &nbsp;
                    </Link>
                    <Button variant = "primary" type='submit'>Verify OTP</Button>    
                </div>
            </Form>
            
        </div>
    </div>
    <Footer />
        </div>
    )

}
