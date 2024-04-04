import { useEffect, useState } from "react"
import { Button } from "./Button"
import { Link } from "react-router-dom";
import axios from "axios";

export function Users(){
    const accessToken = localStorage.getItem(`token`);
    const [filter,setFilter] = useState("")
    const [users,setUsers] = useState([
    //     {
    //     firstName:"Aryan",
    //     lastName:"Sindhi",
    //     _id:"1"
    // }
])
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_REACT_APP_BASEURL}/api/v1/user/searchUsers?filter=${filter}`,{
            headers:{
                authorization: `Bearer ${accessToken}`
            }
        })
        .then((res)=>{
            setUsers(res.data.users)
        })
    },[])
    return <div>
        <div className="font-bold text-lg mt-6">
            Users
        </div>
        <div className=" my-2 w-full border rounded border-slate-200">
            <input type="text" placeholder="Search Users" className="w-full"/>
        </div>
        <div>
            {/* {console.log(JSON.stringify(users))} */}
            {
            users.map((user)=>{
                // console.log(user._id)
                return <User user={user} key={user.userId}/>
            })}
        </div>
    </div>
}

function User({user}){
    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full bg-slate-200 h-12 w-12 mt-1 mr-2 flex justify-center">
                <div className=" h-full text-xl flex flex-col justify-center">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center">
                {user.firstName} {user.lastName}
            </div>
        </div>
        <div className=" flex flex-col justify-center">
            <Link to={`/sendmoney?id=${user.userId}&fname=${user.firstName}&lname=${user.lastName}`}>
            <Button label={`Send Money`} onClick={()=>{
                console.log(`Money sent......`)
            }}></Button>
            </Link>
        </div>
        
    </div>
}