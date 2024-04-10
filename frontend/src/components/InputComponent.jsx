import { useState } from "react";
import { FaEye,FaEyeSlash } from "react-icons/fa";

export function InputComponent({label,placeholder,label2,onChange,isPwd}){
    const [showPassword,setShowPassword] = useState(false)
    return <div>
        <div className=" text-sm  font-medium text-left py-2 flex justify-between">
            <div className="flex flex-col justify-center">{label}</div>
            {{label2} && <div className="pointer underline cursor-pointer
            flex flex-col justify-center">{label2}</div>}
        </div>

        {/* <div className=" flex justify-stretch">
            <div className=" relative w-full">
            <input onChange={onChange} 
            type={(isPwd)? (showPassword)? "text" : "password" : "text"} 
            placeholder={placeholder} 
            className=" w-full px-2 py-1 border rounded border-slate-200"/>
            </div>
             {isPwd && (
                // className="flex flex-col justify-center inset-y-0 right-0 items-center pr-3"
                    <div className="flex flex-col justify-center inset-y-0 right-0  pl-1.5">
                        {showPassword ? (
                            <FaEyeSlash onClick={togglePasswordVisibility} className="text-gray-400 cursor-pointer" />
                        ) : (
                            <FaEye onClick={togglePasswordVisibility} className="text-gray-400 cursor-pointer" />
                        )}
                    </div>
            )}
        </div> */}
        
        <div className="flex relative">
            <input
                onChange={onChange}
                type={(isPwd) ? (showPassword) ? "text" : "password" : "text"}
                placeholder={placeholder}
                className="w-full px-2 py-1 border rounded border-slate-200 pr-10" // Adjusted padding to accommodate the icon
            />
            {isPwd && (
                <div 
                onClick={()=>{
                    setShowPassword(!showPassword)
                }}
                className="absolute inset-y-0 right-0 pr-2 flex items-center cursor-pointer">
                    {showPassword ? (
                        <FaEyeSlash className="text-gray-400" />
                    ) : (
                        <FaEye className="text-gray-400" />
                    )}
                </div>
            )}
        </div>
        


        </div>
}