import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputComponent } from "../components/InputComponent"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
export function Signin(){
    return <div className=" flex justify-center bg-slate-300 h-screen">
        <div className=" flex flex-col justify-center">
            <div className=" rounded-lg bg-white w-90 text-center p-2 h-max px-4">
                <Heading label={"Sign In"}></Heading>
                <SubHeading label={"Enter your credentials to access your account"}></SubHeading>
                <InputComponent label={"Username"} placeholder={"arsindhi18"}/>
                <InputComponent label={"Password"} placeholder={"WeDnEsDaY@1029"} label2={"Forgot Password?"}/>
                <div className=" pt-4">
                    <Button label={"Sign In"} onClick={()=>{console.log(`Signed In...`)}}/>
                </div>
                <BottomWarning label={"Don't have an account?"} linkText={"Sign Up"} to={"/signup"}/>
            </div>
        </div>
    </div>
}