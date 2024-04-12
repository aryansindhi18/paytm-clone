import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useSearchParams,useNavigate } from "react-router-dom"
import axios from "axios";
import { TopBar } from "../components/TopBar"
// import { Signin } from "./Signin";
export function SendMoney(){
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    // console.log(searchParams)
    const uid = searchParams.get("id");
    const fname = searchParams.get("fname")
    const lname = searchParams.get("lname")
    const [amount,setamount] = useState(0);
    const [paymentSuccess,setpaymentSuccess] = useState(false);
    const [paymentFailure,setpaymentFailure] = useState(false);
    const [isSignedIn,setisSignedIn] = useState(true)
    const [isPaymentDone,setisPaymentDone] = useState(true);
    const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
    useEffect(()=>{
        console.log(`2nd useEffect`)
        axios.get(`${import.meta.env.VITE_REACT_APP_BASEURL}/api/v1/user`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((res)=>{
            console.log(res.status)
            if(res.status===200){
                // setisSignedIn(true);
                // navigate("/dashboard")
                console.log(`issignedin=true inside .then 200`)
            }
            else{
                console.log(`issignedin=false`)
                setisSignedIn(false);
                navigate("/signin?isLoggedOut=true")
            }
            
        }).catch((e)=>{
            setisSignedIn(false);
            navigate("/signin?isLoggedOut=true")
        })
    },[isSignedIn,window.location.pathname])
    // console.log(isSignedIn)
    // if(isSignedIn==false){
    //     console.log(`isSignedOut=false`)
    //     return <Signin isLoggedOut={true}/>
    // }
    // console.log(`isSignedOut=true`)
    return <>
        <TopBar userInfo={userInfo}/>
        <div className=" flex justify-center h-screen bg-gray-100">
        <div className=" flex flex-col justify-center h-full">
        <div className="border w-96 p-4 bg-white shadow-lg h-min rounded-lg
         space-y-8 max-w-md">
        <div className=" space-y-1.5 p-6">
            <h2 className=" text-3xl font-bold text-center">Send Money</h2>
        </div>
        <div className="p-6">
            <div className="flex space-x-4 items-center">
                <div className="rounded-full bg-green-500 h-12 w-12 mt-1 mr-2 flex justify-center">
                    <div className="h-full text-2xl flex flex-col justify-center text-white">
                        {fname[0]}
                    </div>
                </div>
                <div className=" flex flex-col justify-center">
                    <h3 className=" font-semibold text-2xl">{fname} {lname}</h3>
                </div>
            </div>
            <div className="space-y-4">
                <div className=" space-y-2">
                    <label htmlFor="amount" className=" text-sm font-medium leading-none
                     peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Amount (In ₹)
                    </label>
                    <input onChange={(e)=>{
                        setamount(e.target.value);
                    }} type="number" id="amount" value={amount} placeholder="Enter Amount" className=" h-10
                     w-full rounded-md border px-3 py-2 text-sm"/>
                </div>
                <button onClick={()=>{
                    setisPaymentDone(false);
                    axios.post(`${import.meta.env.VITE_REACT_APP_BASEURL}/api/v1/account/transfer`,{
                        toUserId:uid,
                        amount: parseInt(amount)
                        
                    },{
                        headers:{
                            authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    }).then((res)=>{
                        setTimeout(() => {
                            setamount(0); // Reset amount input to blank
                        }, 0);
                        if(res.status==200){
                            setpaymentSuccess(true);
                            setisPaymentDone(true);
                        }
                        else{
                            setpaymentFailure(true)
                            setisPaymentDone(true);
                        }
                        
                    })
                }} className={`rounded-md text-sm font-medium ring-offset-black
                    transition-colors bg-green-500 h-10 w-full px-4 py-2 text-white
                    ${isPaymentDone ? "" : "cursor-not-allowed"}`}>
                    {(isPaymentDone)?`Initiate Transfer`:`Payemnt Processing...`}
                </button>
                {paymentSuccess && <div className="justify-center py-2 text-sm">
                    <div className=" justify-center flex text-green-500 font-semibold">Transfer succesful</div>
                    <p>
                        <Link to={"/dashboard"} className=" justify-center flex pointer underline cursor-pointer pl-1">Go to dashboard</Link>
                    </p>
                </div>}
                {paymentFailure && <div className={`justify-center py-2 text-sm`}>
                    <div className=" text-red-500 font-semibold">Payment failed...</div>
                </div>}
            </div>
        </div>
        </div>
        </div>
    </div>
    </> 
}