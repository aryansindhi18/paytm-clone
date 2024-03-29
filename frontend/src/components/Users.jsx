import { useState } from "react"
import { Button } from "./Button"
import { Link } from "react-router-dom";

export function Users(){
    const [users,setUsers] = useState([{
        firstName:"Aryan",
        lastName:"Sindhi",
        _id:"1"
    }])
    return <div>
        <div className="font-bold text-lg mt-6">
            Users
        </div>
        <div className=" my-2 w-full border rounded border-slate-200">
            <input type="text" placeholder="Search Users" className="w-full"/>
        </div>
        <div>
            {users.map((user)=>{
                return <User user={user}/>
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
            <Link to={'/sendmoney'}>
            <Button label={`Send Money`} onClick={()=>{
                console.log(`Money sent......`)
            }}></Button>
            </Link>
        </div>
        
    </div>
}