import { useContext } from "react"
import { userContext } from "../Context"
import { json,useNavigate } from "react-router-dom"
import { BiLogOut } from "react-icons/bi";
// import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

// import { Tooltip } from "flowbite-react";
// import Tooltip from '@mui/material/Tooltip';
export function TopBar({userInfo}){
    const navigate = useNavigate()
    // const {userInfo,setuserInfo} = useContext(userContext)
    return <div className=" shadow h-14 flex justify-between">
        <div className=" font-medium flex flex-col justify-center ml-4 h-full">
            Share2Pay
        </div>
        <div className="flex">
            <div className=" font-medium flex flex-col justify-center h-full mr-4">
                {console.log(`hello `,JSON.stringify(userInfo))}
                
                Hello, {userInfo.firstName} {userInfo.lastName}
            </div>
            <div className=" rounded-full bg-slate-200 h-12 w-12 mt-1 mr-2 flex justify-center">
                <div className=" h-full text-xl flex flex-col justify-center">
                    {String(userInfo.firstName[0])}
                </div>
            </div>
            <div 
            className="flex flex-col justify-center hover: cursor-pointer pr-2.5"
            onClick={()=>{
                localStorage.removeItem("token");
                navigate("/signin")
            }}>
                <BiLogOut size={35} id="LogOutId"/>
                <Tooltip anchorSelect="#LogOutId" content="Log Out"></Tooltip>
            </div>
        </div>
    </div>
}