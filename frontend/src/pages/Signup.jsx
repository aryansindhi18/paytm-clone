import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputComponent } from "../components/InputComponent"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
export function Signup(){
    return <>
        <div className=" flex justify-center bg-slate-300 h-screen">
            <div className=" flex flex-col justify-center">
                <div className=" rounded-lg bg-white w-90 text-center p-2 h-max px-4">
                    <Heading label={"Sign Up"}></Heading>
                    <SubHeading label={"Enter your details to create an account"}></SubHeading>
                    <InputComponent label={"First Name"} placeholder={"Aryan"}/>
                    <InputComponent label={"Last Name"} placeholder={"Sindhi"}/>
                    <InputComponent label={"Email"} placeholder={"abc@xyz.com"}/>
                    <InputComponent label={"Username"} placeholder={"arsindhi18"}/>
                    <InputComponent label={"Password"} placeholder={"WeDnEsDaY@01029"}/>
                    <InputComponent label={"Phone Number"} placeholder={"+918823568329"}/>
                    <div className=" pt-4">
                        <Button label={"Sign Up"} onClick={()=>{console.log("Signed Up")}}></Button>
                    </div>
                    <BottomWarning label={"Already have an account?"} linkText={"SignIn"} to={"/signin"}/>
                </div>
            </div>
        </div>
    </>
}