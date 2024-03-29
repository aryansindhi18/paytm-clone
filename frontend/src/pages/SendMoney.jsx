export function SendMoney(){
    return <div className=" flex justify-center h-screen bg-gray-100">
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
                        F
                    </div>
                </div>
                <div className=" flex flex-col justify-center">
                    <h3 className=" font-semibold text-2xl">Friend's Name</h3>
                </div>
            </div>
            <div className="space-y-4">
                <div className=" space-y-2">
                    <label htmlFor="amount" className=" text-sm font-medium leading-none
                     peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Amount (In ₹)
                    </label>
                    <input type="number" id="amount" placeholder="Enter Amount" className=" h-10
                     w-full rounded-md border px-3 py-2 text-sm"/>
                </div>
                <button className=" rounded-md text-sm font-medium ring-offset-black
                    transition-colors bg-green-500 h-10 w-full px-4 py-2 text-white">
                    Initiate Transfer
                </button>
            </div>
        </div>
        </div>
        </div>
    </div>
}