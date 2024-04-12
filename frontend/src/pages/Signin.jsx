import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputComponent } from "../components/InputComponent"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { useNavigate,useSearchParams } from "react-router-dom"
import { useState,useContext,useEffect } from "react"
import axios from "axios"
import { userContext } from "../Context"


export function Signin(){
    const [username,setusername] = useState("")
    const [password,setpassword] = useState("")
    const [isSignedIn,setisSignedIn] = useState(false)
    const [isSignInError,setisSignInError] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const {userInfo,setuserInfo} = useContext(userContext)
    const [searchParams] = useSearchParams()
    const isLoggedOut = searchParams.get("isLoggedOut");

    const onClickSignIn = async ()=>{
        // console.log(`Signed In...`)
        try{
            const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BASEURL}/api/v1/user/signin`,{
                username,
                password

            })
            if(response.data.token){
                
                localStorage.setItem("token",response.data.token);
                setisSignInError(false);
                setisSignedIn(true);
                // setuserInfo({
                //     username: response.data.username,
                //     firstName: response.data.firstName,
                //     lastName: response.data.lastName,
                //     email: response.data.email,
                //     phoneNumber: response.data.phoneNumber
                // })
                // console.log({
                //     username: response.data.username,
                //     firstName: response.data.firstName,
                //     lastName: response.data.lastName,
                //     email: response.data.email,
                //     phoneNumber: response.data.phoneNumber
                // })
                // console.log(`userInfo update`,JSON.stringify(userInfo))
                localStorage.setItem("userInfo", JSON.stringify({
                        username: response.data.username,
                        firstName: response.data.firstName,
                        lastName: response.data.lastName,
                        email: response.data.email,
                        phoneNumber: response.data.phoneNumber
                    }));
                setTimeout(()=>{
                    navigate("/dashboard");
                },718)
            }
        }
        catch(e){
            
            console.log(`Error: ${e}`)
            setisSignInError(true)
            
            // throw e
        }
        }
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
    return <div className=" flex justify-center bg-slate-300 h-screen"
            onKeyDown={(e)=>{
                if(e.key===`Enter`){
                console.log(`enter pressed...`)
                    onClickSignIn();
                }
            }}>
        <div className=" flex flex-col justify-center">
            <div className=" rounded-lg bg-white w-90 text-center p-2 h-max px-4">
                <Heading label={"Sign In"}></Heading>
                <SubHeading isLoggedOut={isLoggedOut} label={
                    (!isLoggedOut)?"Enter your credentials to access your account"
                    :"You have been logged out, please sign in again..."
                    }></SubHeading>
                <InputComponent onChange={(e)=>{
                    setusername(e.target.value)
                }} label={"Username"} placeholder={"arsindhi18"}/>
                <InputComponent isPwd={true} showPassword={showPassword} onChange={(e)=>{
                    setpassword(e.target.value);
                }} label={"Password"} placeholder={"WeDnEsDaY@1029"} label2={"Forgot Password?"}/>
                <div className=" pt-4">
                        <Button label={"Sign In"}
                        
                        onClick={async ()=>{
                            console.log(`Signed In...`)
                            try{
                                const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BASEURL}/api/v1/user/signin`,{
                                    username,
                                    password

                                })
                                if(response.data.token){
                                    
                                    localStorage.setItem("token",response.data.token);
                                    setisSignInError(false);
                                    setisSignedIn(true);
                                    // setuserInfo({
                                    //     username: response.data.username,
                                    //     firstName: response.data.firstName,
                                    //     lastName: response.data.lastName,
                                    //     email: response.data.email,
                                    //     phoneNumber: response.data.phoneNumber
                                    // })
                                    // console.log({
                                    //     username: response.data.username,
                                    //     firstName: response.data.firstName,
                                    //     lastName: response.data.lastName,
                                    //     email: response.data.email,
                                    //     phoneNumber: response.data.phoneNumber
                                    // })
                                    // console.log(`userInfo update`,JSON.stringify(userInfo))
                                    localStorage.setItem("userInfo", JSON.stringify({
                                            username: response.data.username,
                                            firstName: response.data.firstName,
                                            lastName: response.data.lastName,
                                            email: response.data.email,
                                            phoneNumber: response.data.phoneNumber
                                        }));
                                    setTimeout(()=>{
                                        navigate("/dashboard");
                                    },718)
                                }
                            }
                            catch(e){
                                
                                console.log(`Error: ${e}`)
                                setisSignInError(true)
                                
                                // throw e
                            }
                            }
                            }/>
                </div>
                {isSignedIn && <div className=" flex justify-center py-2 text-sm">
                    <div className=" text-green-500 font-semibold">Signed in succesfully...</div>
                </div>}
                {isSignInError && <div className=" flex justify-center py-2 text-sm">
                    <div className=" text-red-500 font-semibold">Wrong Credentials...</div>
                </div>}
                <BottomWarning label={"Don't have an account?"} linkText={"Sign Up"} to={"/signup"}/>
            </div>
        </div>
    </div>
}