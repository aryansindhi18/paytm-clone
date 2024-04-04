import { TopBar } from "../components/TopBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useEffect, useState, useContext } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { userContext } from "../Context"
import { Signin } from "./Signin"
export function Dashboard(){
    // const [userInfo,setuserInfo] = useState({
    //     username: "ar18",
    //     firstName: "hh",
    //     lastName: "hkj",
    //     email: "gvj",
    //     phoneNumber: "ygu"
    // })
    // const {userInfo} = useContext(userContext);
    // const userinfo = sessionStorage.getItem("userInfo")
    // console.log(`userinfo: ${userinfo}`)
    const navigate = useNavigate()
    const [isSignedIn,setisSignedIn] = useState(true)
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_REACT_APP_BASEURL}/api/v1/user`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((res)=>{
            if(res.status==200){
                // setisSignedIn(true);
                // navigate("/dashboard")
            }
            else{
                navigate("/signin?isLoggedOut=true")
            }
            
        }).catch((e)=>{
            // setisSignedIn(false);

            navigate("/signin?isLoggedOut=true")
        })
    },[])
    const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null

    console.log(`dahsboard userInfo ${userInfo}`)
    const accessToken = localStorage.getItem(`token`);
    const [balance,setbalance]=useState("Loading...")
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_REACT_APP_BASEURL}/api/v1/account/balance`,{
            headers:{
                authorization: `Bearer ${accessToken}`
            }
        })
        .then((res)=>{
            setbalance(res.data.balance)
        })
    },[balance]);
    // if(!isSignedIn){
    //     return <Signin isLoggedOut={true}/>
    // }
    return <>
        {/* <userContext.Provider value={{userInfo,setuserInfo}}> */}
            <TopBar userInfo={userInfo}/>
        {/* </userContext.Provider> */}
        <div className=" m-8">
            <Balance value={balance}/>
            <Users user={{firstName:"Aryan",lastName:"Sindhi"}}/>
        </div>
    </>
}