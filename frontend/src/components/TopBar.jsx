export function TopBar(){
    return <div className=" shadow h-14 flex justify-between">
        <div className=" font-medium flex flex-col justify-center ml-4 h-full">
            Share2Pay
        </div>
        <div className="flex">
            <div className=" font-medium flex flex-col justify-center h-full mr-4">
                Hello, User
            </div>
            <div className=" rounded-full bg-slate-200 h-12 w-12 mt-1 mr-2 flex justify-center">
                <div className=" h-full text-xl flex flex-col justify-center">
                    U
                </div>
            </div>
        </div>
    </div>
}