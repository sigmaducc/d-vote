import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Form,Alert } from 'react-bootstrap';
import { useUserAuth } from '../context/UserAuthContext';
import { getDoc,doc} from "firebase/firestore";
import { db } from "../firebase";



export default function AdhaarAuth() {
    const [number ,setNumber]= useState("");
    const [adhaar,setadhaar] = useState("");
    const [otp , setOtp]= useState("");
    const [error ,setError]= useState("");
    const {setUpRecaptcha} = useUserAuth();
    const [flag ,setFlag]=useState(false);
    const [comfirmObj, setComfirmObj]=useState("");
    const navigate = useNavigate();
    var phone="";

    const getAdhaar= async(e)=>{
        e.preventDefault();
        if(adhaar === "" || adhaar === undefined) 
            return setError("Please enter a valid Adhaar Number ");
        try{
            setNumber("")
            const docRef = doc(db, "adhaar", adhaar);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                phone = docSnap.get("Phone")
                console.log("phone:"+ phone);
                getOTP(e);
            } else {
                console.log("No such document!");
            }
        }
        catch(err){
            setError(err.message);
        }
        
    };

    const getOTP = async (e)=>{
    e.preventDefault();
    console.log(adhaar)
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

    const verifyOTP = async (e)=>{
        e.preventDefault();
        console.log(otp);
        
        if(otp === "" || otp === null) return;
        try{
            setError("")
            await comfirmObj.confirm(otp);
            navigate("/home")
        }
        catch(err){
            setError(err.message);
        }
    };



    return (
        
        <div className="p-4 box">
            <h2 className="mb-3">Phone Number Login</h2>
            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/1200px-Aadhaar_Logo.svg.png' className='size' alt='Adhaar'/>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={getAdhaar} style={{display:!flag ? "block":"none"}}>
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
        
    )
}
