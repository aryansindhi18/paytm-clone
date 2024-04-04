export function InputComponent({label,placeholder,label2,onChange,isPwd,showPassword}){
    return <div>
        <div className=" text-sm  font-medium text-left py-2 flex justify-between">
            <div className="flex flex-col justify-center">{label}</div>
            {{label2} && <div className="pointer underline cursor-pointer
            flex flex-col justify-center">{label2}</div>}
        </div>
        <input onChange={onChange} type={(isPwd)? (showPassword)? "text" : "password" : "text"} placeholder={placeholder} className=" w-full px-2 py-1 border rounded border-slate-200"/>
    </div>
}