export function SubHeading({label,isLoggedOut}){
    return <div className={`${isLoggedOut ? 'text-red-500' : 'text-slate-500'} text-md pt-1 px-4 pb-4`}>
        {label}
    </div>
}