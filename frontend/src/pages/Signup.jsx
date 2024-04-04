import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputComponent } from "../components/InputComponent"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export function Signup(){
    const [firstName,setfirstName] = useState("")
    const [lastName,setlastName] = useState("")
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const [phoneNumber,setphoneNumber] = useState("")
    const [username,setusername] = useState("")
    const [isSignedUp,setisSignedUp] = useState(false)
    const [isSignUpError,setisSignUpError] = useState(false)
    // const [isSignedIn,setisSignedIn] = useState(false)
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_REACT_APP_BASEURL}/api/v1/user`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((res)=>{
            if(res.status==200){
                // setisSignedIn(true);
                navigate("/dashboard")
            }
            
        })
    },[])
    return <>
        { 
        <div className=" flex justify-center bg-slate-300 h-screen">
            <div className=" flex flex-col justify-center">
                <div className=" rounded-lg bg-white w-90 text-center p-2 h-max px-4">
                    <Heading label={"Sign Up"}></Heading>
                    <SubHeading label={"Enter your details to create an account"}></SubHeading>
                    <InputComponent onChange={(e)=>{
                        setfirstName(e.target.value)
                    }} label={"First Name"} placeholder={"Aryan"}/>
                    <InputComponent onChange={(e)=>{
                        setlastName(e.target.value)
                    }} label={"Last Name"} placeholder={"Sindhi"}/>
                    <InputComponent onChange={(e)=>{
                        setemail(e.target.value)
                    }} label={"Email"} placeholder={"abc@xyz.com"}/>
                    <InputComponent onChange={(e)=>{
                        setusername(e.target.value)
                    }} label={"Username"} placeholder={"arsindhi18"}/>
                    <InputComponent onChange={(e)=>{
                        setpassword(e.target.value)
                    }} label={"Password"} placeholder={"WeDnEsDaY@01029"}/>
                    <InputComponent onChange={(e)=>{
                        setphoneNumber(e.target.value)
                    }} label={"Phone Number"} placeholder={"+918823568329"}/>
                    <div className=" pt-4">
                        <Button label={"Sign Up"} onClick={async ()=>{
                            try{
                                const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BASEURL}/api/v1/user/signup`,{
                                    username,
                                    firstName,
                                    lastName,
                                    email,
                                    password,
                                    phoneNumber
                                })
                                if(response.data.token){
                                    localStorage.setItem("token",response.data.token);
                                    localStorage.setItem("userInfo", JSON.stringify({
                                        username,
                                        firstName,
                                        lastName,
                                        email,
                                        phoneNumber
                                    }));
                                    setisSignedUp(true);
                                    setTimeout(()=>{
                                        navigate("/dashboard");
                                    },918)
                                }
                            }
                            catch(e){
                                console.log(`e: ${e}`);
                                setisSignUpError(true);
                            }
                            }}>
                        </Button>
                    </div>
                    {console.log(`isSignedUp: ${isSignedUp}`)}
                    {isSignedUp && <div className=" flex justify-center py-2 text-sm">
                        <div className=" text-green-500 font-semibold">Signed up succesfully...</div>
                    </div>}
                    {isSignUpError && <div className=" flex justify-center py-2 text-sm">
                        <div className=" text-red-500 font-semibold">Error in sign up...</div>
                    </div>}
                    <BottomWarning label={"Already have an account?"} 
                    linkText={"SignIn"} to={"/signin"}/>
                </div>
            </div>
        </div>
    }
    </>
}