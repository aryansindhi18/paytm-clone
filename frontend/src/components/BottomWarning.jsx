import { Link } from "react-router-dom";
export function BottomWarning({label,linkText,to}){
    return <div className=" flex justify-center py-2 text-sm">
        <div>{label}</div>
        <Link to={to} className=" pointer underline cursor-pointer pl-1">{linkText}</Link>
    </div>
}