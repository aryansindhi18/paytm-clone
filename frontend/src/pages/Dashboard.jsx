import { TopBar } from "../components/TopBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useEffect, useState, useContext } from "react"
import axios from "axios"
import { userContext } from "../Context"
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